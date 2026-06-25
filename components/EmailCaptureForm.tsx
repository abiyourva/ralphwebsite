"use client";

import { useState, type CSSProperties } from "react";

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
};

// Reusable email-capture form. On submit it prevents the default, swaps the
// button into a disabled green success state, and disables the input — the
// same behavior as the original main.js handler. Used on the homepage, the
// shows page, and the resources page.
export default function EmailCaptureForm({
  id,
  className = "email-form email-capture-form",
  formStyle,
  inputClassName,
  inputStyle,
  placeholder = "Your email address",
  inputAriaLabel = "Email address",
  formAriaLabel = "Email signup",
  buttonLabel = "I'm In",
  buttonClassName = "btn btn-primary",
  buttonStyle,
  successLabel = "You're in! ✓",
}: EmailCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // TODO: wire to email provider (Kit/ConvertKit, MailerLite, etc.)
    console.log("Email captured:", email);
  }

  return (
    <form id={id} className={className} style={formStyle} aria-label={formAriaLabel} onSubmit={handleSubmit}>
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
  );
}
