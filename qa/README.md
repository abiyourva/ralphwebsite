# Chaos test suite

Plain Node scripts that prove and guard against a set of real race
conditions and silent-failure bugs found in the API routes and forms.
No test framework dependency — just Node's built-in `fetch` and a raw
CDP WebSocket connection to a headless Chrome instance (same technique
used for manual QA elsewhere in this project).

## Requirements

- A running server: `npm run build && npm run start` (or `npm run dev`)
  on `http://localhost:3000`.
- A headless Chrome with remote debugging enabled, for `double-submit.mjs`
  only:
  ```
  chromium --headless=new --disable-gpu --no-sandbox \
    --remote-debugging-port=9350 --remote-debugging-address=127.0.0.1
  ```
- `KIT_API_SECRET` should be **unset** when running these against a local
  server — several tests rely on Kit (ConvertKit) calls failing closed so
  they never touch a real Kit account. Do not run this suite against a
  server configured with a real Kit API key.

## Scripts

- **`malformed-json.mjs`** — POSTs a truncated/empty body to all 8 API
  routes, asserts a clean `4xx {error: "..."}` JSON response instead of an
  uncaught `SyntaxError` producing a generic 500.
- **`honeypot-parity.mjs`** — POSTs to `/api/cohost`, `/api/quiz`, and
  `/api/book-notify` with the honeypot field filled in, asserts a
  `200 {ok:true}` short-circuit that never reaches the Kit API call.
- **`tag-retry.mjs`** — pure Node, no server required. Stubs `global.fetch`
  to fail the first Kit tag-call attempt and succeed the second, asserts
  `tagKitSubscriber` recovers instead of leaving the subscriber
  permanently untagged. Run with Node's native TS type-stripping:
  `node --experimental-strip-types qa/chaos-suite/tag-retry.mjs`.
- **`double-submit.mjs`** — drives a real headless browser, fills in
  `EmailCaptureForm`, `ContactForm`, and `CohostApplicationForm` with valid
  data, and dispatches two back-to-back clicks on each submit button.
  Asserts exactly one `fetch()` call fires per form.

## Running everything

```bash
node qa/chaos-suite/malformed-json.mjs
node qa/chaos-suite/honeypot-parity.mjs
node --experimental-strip-types qa/chaos-suite/tag-retry.mjs
node qa/chaos-suite/double-submit.mjs
```

Each exits `0` on pass, `1` on failure, with a `PASS`/`FAIL` line per case.
