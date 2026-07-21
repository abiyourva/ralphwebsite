"use client";

import { useState, type CSSProperties } from "react";
import { track } from "@vercel/analytics";
import Honeypot from "@/components/Honeypot";

type EmailCaptureFormProps = {
  /** id on the <form>, e.g. for anchor-linking to it from elsewhere on the page. */
  id?: string;
  /** Class on the <form> — e.g. "email-form email-capture-form" or "email-form-left email-capture-form". */
  className?: string;
  formStyle?: CSSProperties;
  inputClassName?: string;
  inputStyle?: CSSProperties;
  placeholder?: string;
  inputAriaLabel?: string;
  formAriaLabel?: string;
  buttonLabel?: string;
  buttonClassName?: string;
  buttonStyle?: CSSProperties;
  /** Success label shown on the button after submit. */
  successLabel?: string;
  /** API route to POST { email } to. Defaults to the general signup endpoint. */
  endpoint?: string;
  /** Where this form appears, e.g. "Homepage" or "Budget Calculator" — recorded on the tracked signup event. */
  location?: string;
};

// Reusable email-capture form. On submit it prevents the default, swaps the
// button into a disabled green success state, and disables the input — the
// same behavior as the original main.js handler. Used on the homepage, the
// shows page, and the resources page. Default styling targets dark/navy
// backgrounds (.email-form) — pass className="email-form-light" on light
// backgrounds instead.
export default function EmailCaptureForm({
  id,
  className = "email-form",
  formStyle,
  inputClassName,
  inputStyle,
  placeholder = "Your email address",
  inputAriaLabel = "Email address",
  formAriaLabel = "Email signup",
  buttonLabel = "I'm In",
  buttonClassName,
  buttonStyle,
  successLabel = "You're in! ✓",
  endpoint = "/api/subscribe",
  location = "Unknown",
}: EmailCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — must stay empty

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setSubmitted(true);
      track("Email Signup", { location });
    } catch {
      setError("Something went wrong — please try again.");
    }
  }

  return (
    <>
      <form id={id} className={className} style={formStyle} aria-label={formAriaLabel} onSubmit={handleSubmit}>
        <Honeypot value={website} onChange={setWebsite} />
        <input
          type="email"
          className={inputClassName}
          style={inputStyle}
          placeholder={placeholder}
          required
          aria-label={inputAriaLabel}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitted}
        />
        <button
          type="submit"
          className={buttonClassName}
          style={submitted ? { ...buttonStyle, background: "#2A6049" } : buttonStyle}
          disabled={submitted}
        >
          {submitted ? successLabel : buttonLabel}
        </button>
      </form>
      {error && (
        <p role="alert" style={{ color: "#C0392B", fontSize: "0.85rem", marginTop: "8px" }}>
          {error}
        </p>
      )}
    </>
  );
}
