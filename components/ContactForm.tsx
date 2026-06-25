"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type ContactFormProps = {
  /** The form fields. */
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  id?: string;
  submitLabel?: string;
  successLabel?: string;
  submitClassName?: string;
  submitStyle?: CSSProperties;
  /** Optional note rendered beneath the submit button. */
  footer?: ReactNode;
};

// Reusable contact/inquiry form. On submit it prevents the default and swaps
// the submit button into a disabled green success state ("Message sent! ✓"),
// mirroring the original main.js contact-form handler. Used by the coaching,
// speaking, and contact pages.
export default function ContactForm({
  children,
  className = "contact-form",
  ariaLabel = "Contact form",
  id,
  submitLabel = "Send Message",
  successLabel = "Message sent! ✓",
  submitClassName = "btn btn-primary",
  submitStyle,
  footer,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire to Formspree/Netlify Forms or an API route
    console.log("Form submitted");
  }

  return (
    <form className={className} aria-label={ariaLabel} id={id} onSubmit={handleSubmit}>
      {children}
      <button
        type="submit"
        className={submitClassName}
        style={submitted ? { ...submitStyle, background: "#2A6049" } : submitStyle}
        disabled={submitted}
      >
        {submitted ? successLabel : submitLabel}
      </button>
      {footer}
    </form>
  );
}
