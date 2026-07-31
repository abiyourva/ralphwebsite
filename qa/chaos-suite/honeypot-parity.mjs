// Chaos test: POST to the three routes that historically had no spam/bot
// protection (cohost, quiz, book-notify), with the honeypot field filled
// in, and assert a clean {ok:true} short-circuit that never reaches the
// Kit API call. Since KIT_API_SECRET is intentionally unset in this
// sandbox, a request that DOES reach the Kit call always 502s (missing key)
// — so "did we get 200 {ok:true} instead of 502" is a real, observable
// proxy for "did the honeypot check run before the Kit call."
//
// Usage: node qa/chaos-suite/honeypot-parity.mjs [baseUrl]

const baseUrl = process.argv[2] || "http://localhost:3000";

const CASES = [
  {
    route: "/api/cohost",
    body: { email: "bot@example.com", firstName: "Bot", application: "spam spam spam", website: "http://spam.example" },
  },
  {
    route: "/api/quiz",
    body: { stage: "started", name: "Bot", email: "bot@example.com", website: "http://spam.example" },
  },
  {
    route: "/api/book-notify",
    body: { email: "bot@example.com", book: "bfc", website: "http://spam.example" },
  },
];

let failures = 0;

for (const { route, body } of CASES) {
  try {
    const res = await fetch(`${baseUrl}${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => null);
    const ok = res.status === 200 && json && json.ok === true;

    if (ok) {
      console.log(`PASS  ${route} -> ${res.status} ${JSON.stringify(json)} (honeypot short-circuited before Kit call)`);
    } else {
      failures++;
      console.log(`FAIL  ${route} -> ${res.status} ${JSON.stringify(json)} (expected 200 {ok:true} — honeypot not checked, request reached the Kit call and failed instead)`);
    }
  } catch (err) {
    failures++;
    console.log(`FAIL  ${route} -> request threw: ${err.message}`);
  }
}

console.log("");
if (failures > 0) {
  console.log(`❌ ${failures}/${CASES.length} route(s) do not honor the honeypot field.`);
  process.exit(1);
} else {
  console.log(`✅ All ${CASES.length} previously-unprotected routes now short-circuit on a filled honeypot.`);
  process.exit(0);
}
