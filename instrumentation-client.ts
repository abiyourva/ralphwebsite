import { initBotId } from "botid/client/core";

// Invisible bot check for form-submitting endpoints. checkBotId() on each
// route only works for paths listed here; the client attaches classification
// headers to matching requests before they're sent.
initBotId({
  protect: [
    { path: "/api/subscribe", method: "POST" },
    { path: "/api/bfc-teaser", method: "POST" },
    { path: "/api/budget-calculator", method: "POST" },
    { path: "/api/debt-payoff", method: "POST" },
    { path: "/api/contact", method: "POST" },
  ],
});
