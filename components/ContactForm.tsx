"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type ContactFormProps = {
  /** The form fields — inputs/textareas/selects must have a `name` attribute. */
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
  /** Which inquiry type this form represents (coaching, speaking, press, accounting, podcasting, general). */
  inquiryType: string;
};

// Reusable contact/inquiry form. On submit it posts named field values to
// /api/contact, which creates/tags the subscriber in Kit, then swaps the
// submit button into a disabled green success state ("Message sent! ✓").
// Used by the coaching, speaking, and contact pages.
export default function ContactForm({
  children,
  className = "contact-form",
  ariaLabel = "Contact form",
  id,
  submitLabel = "Send Message",
  successLabel = "Message sent! ✓",
  submitClassName = "btn btn-navy",
  submitStyle,
  footer,
  inquiryType,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    const fields = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryType, fields }),
      });
      if (!res.ok) throw new Error("contact submit failed");
      setSubmitted(true);
    } catch {
      setError(true);
    }
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
      {error && (
        <p role="alert" style={{ color: "#C0392B", fontSize: "0.85rem", marginTop: "8px" }}>
          Something went wrong — please try again.
        </p>
      )}
      {footer}
    </form>
  );
}
