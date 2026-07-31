// Chaos test: for each vulnerable form, load the real page in a real
// browser (headless Chrome via raw CDP — no Playwright dependency), fill
// in valid data, then dispatch two back-to-back clicks on the submit
// control (simulating a rapid-fire double-click / impatient double-tap).
// Assert exactly ONE fetch() call fires to the relevant API route.
//
// Detection method: a page-context monkey-patch of window.fetch that
// records every call's URL to a global array, read back afterward via
// Runtime.evaluate. This is more reliable than watching CDP's
// Network.requestWillBeSent events, which raced the very fast fetch calls
// these forms make and silently missed them in testing.
//
// Usage: node qa/chaos-suite/double-submit.mjs [baseUrl] [cdpHttpUrl]
// Requires: a running `next start` server, and a headless Chrome with
// --remote-debugging-port already running (both external to this script).

const baseUrl = process.argv[2] || "http://localhost:3000";
const CDP_HTTP = process.argv[3] || "http://127.0.0.1:9350";

const FETCH_HOOK = `
  window.__fetchCalls = [];
  const __origFetch = window.fetch;
  window.fetch = function(...args) {
    window.__fetchCalls.push(String(args[0]));
    return __origFetch.apply(this, args);
  };
`;

// Sets a React-controlled input/textarea's value via the native setter so
// React's change tracking actually picks it up, then dispatches a real
// "input" event (what React listens for on controlled components).
const SET_REACT_VALUE_HELPER = `
  function setReactValue(el, value) {
    const proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    setter.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }
`;

async function runCase(url, setupAndClickJs) {
  const res = await fetch(`${CDP_HTTP}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  const target = await res.json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }
  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
  });

  await new Promise((resolve) => ws.addEventListener("open", resolve));
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.navigate", { url });
  await new Promise((r) => setTimeout(r, 1800));

  await send("Runtime.evaluate", { expression: FETCH_HOOK });
  const evalRes = await send("Runtime.evaluate", {
    expression: `${SET_REACT_VALUE_HELPER}\n(async function() { ${setupAndClickJs} })();`,
    returnByValue: true,
    awaitPromise: true,
  });
  if (evalRes.exceptionDetails) {
    throw new Error(`Page script threw: ${evalRes.exceptionDetails.text}`);
  }

  await new Promise((r) => setTimeout(r, 1200)); // let any in-flight fetches resolve

  const callsRes = await send("Runtime.evaluate", {
    expression: "JSON.stringify(window.__fetchCalls || [])",
    returnByValue: true,
  });
  const calls = JSON.parse(callsRes.result.value);

  await send("Page.close");
  ws.close();
  return calls;
}

let failures = 0;
function report(name, calls, routeSubstring) {
  const matching = calls.filter((u) => u.includes(routeSubstring));
  const ok = matching.length === 1;
  if (ok) {
    console.log(`PASS  ${name}: 1 fetch() to ${routeSubstring}`);
  } else {
    failures++;
    console.log(`FAIL  ${name}: ${matching.length} fetch() call(s) to ${routeSubstring} (expected 1) — all fetch calls: ${JSON.stringify(calls)}`);
  }
}

// ── Test 1: EmailCaptureForm (homepage) ──────────────────────────────────
{
  const calls = await runCase(`${baseUrl}/`, `
    const form = document.querySelector('form.email-form, form[aria-label="Email signup"]');
    const input = form.querySelector('input[type="email"]');
    setReactValue(input, 'chaos-test-${Date.now()}@example.com');
    const btn = form.querySelector('button[type="submit"]');
    btn.click();
    btn.click();
  `);
  report("EmailCaptureForm double-click", calls, "/api/subscribe");
}

// ── Test 2: ContactForm (/contact page) ──────────────────────────────────
{
  const calls = await runCase(`${baseUrl}/contact`, `
    const form = document.getElementById('main-contact-form');
    setReactValue(form.querySelector('#contact-name'), 'Chaos Test');
    setReactValue(form.querySelector('#contact-email'), 'chaos-test-${Date.now()}@example.com');
    setReactValue(form.querySelector('#contact-subject'), 'Chaos test subject');
    setReactValue(form.querySelector('#contact-message'), 'Chaos test message body.');
    const btn = form.querySelector('button[type="submit"]');
    btn.click();
    btn.click();
  `);
  report("ContactForm double-click", calls, "/api/contact");
}

// ── Test 3: CohostApplicationForm (/cohost page) — full field fill ──────
{
  const calls = await runCase(`${baseUrl}/cohost`, `
    const form = document.querySelector('form');
    const text = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    text.forEach((el) => {
      if (el.type === 'email') setReactValue(el, 'chaos-test-${Date.now()}@example.com');
      else setReactValue(el, 'Chaos test answer');
    });
    const seenRadioGroups = new Set();
    form.querySelectorAll('input[type="radio"]').forEach((el) => {
      if (!seenRadioGroups.has(el.name)) {
        el.click();
        seenRadioGroups.add(el.name);
      }
    });
    const checkboxGroups = {};
    form.querySelectorAll('input[type="checkbox"]').forEach((el) => {
      const key = el.closest('.cohost-field')?.querySelector('label.q')?.textContent || 'default';
      if (!checkboxGroups[key]) {
        el.click();
        checkboxGroups[key] = true;
      }
    });
    await new Promise((r) => setTimeout(r, 100));
    const btn = form.querySelector('.cohost-submit-btn');
    btn.click();
    btn.click();
  `);
  report("CohostApplicationForm double-click", calls, "/api/cohost");
}

console.log("");
if (failures > 0) {
  console.log(`❌ ${failures} form(s) fired more than one request on a rapid double-click.`);
  process.exit(1);
} else {
  console.log("✅ All 3 forms fire exactly one request even when double-clicked.");
  process.exit(0);
}
