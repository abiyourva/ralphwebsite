// Chaos test: POST a malformed/empty body to every API route and assert we
// get back the app's normal clean {error: "..."} JSON contract with a 4xx
// status, instead of an uncaught SyntaxError producing Next's generic
// error response.
//
// Usage: node qa/chaos-suite/malformed-json.mjs [baseUrl]
// Requires a running `next start`/`next dev` server (default http://localhost:3000).

const baseUrl = process.argv[2] || "http://localhost:3000";

const ROUTES = [
  "/api/subscribe",
  "/api/contact",
  "/api/bfc-teaser",
  "/api/budget-calculator",
  "/api/debt-payoff",
  "/api/cohost",
  "/api/quiz",
  "/api/book-notify",
];

// Deliberately malformed bodies: truncated JSON and completely empty.
const BAD_BODIES = ["{", ""];

let failures = 0;

for (const route of ROUTES) {
  for (const body of BAD_BODIES) {
    const label = `${route} body=${JSON.stringify(body)}`;
    try {
      const res = await fetch(`${baseUrl}${route}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const contentType = res.headers.get("content-type") || "";
      let parsed = null;
      let isJson = contentType.includes("application/json");
      if (isJson) {
        try {
          parsed = await res.json();
        } catch {
          isJson = false;
        }
      }

      const ok = res.status >= 400 && res.status < 500 && isJson && parsed && typeof parsed.error === "string";

      if (ok) {
        console.log(`PASS  ${label} -> ${res.status} ${JSON.stringify(parsed)}`);
      } else {
        failures++;
        console.log(`FAIL  ${label} -> status=${res.status} content-type=${contentType} isJson=${isJson} body=${JSON.stringify(parsed)}`);
      }
    } catch (err) {
      failures++;
      console.log(`FAIL  ${label} -> request threw: ${err.message}`);
    }
  }
}

console.log("");
if (failures > 0) {
  console.log(`❌ ${failures} malformed-body case(s) did NOT get a clean 4xx JSON error response.`);
  process.exit(1);
} else {
  console.log(`✅ All ${ROUTES.length * BAD_BODIES.length} malformed-body cases returned a clean 4xx JSON error.`);
  process.exit(0);
}
