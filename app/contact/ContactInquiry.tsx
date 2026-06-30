"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

type InquiryType =
  | "coaching"
  | "speaking"
  | "press"
  | "accounting"
  | "podcasting"
  | "general";

const options: { type: InquiryType; icon: string; title: string; desc: string }[] = [
  { type: "coaching", icon: "🤝", title: "Coaching", desc: "One-on-one financial coaching or creator business coaching" },
  { type: "speaking", icon: "🎤", title: "Speaking", desc: "Book Ralph for your event, conference, or podcast" },
  { type: "press", icon: "📰", title: "Press / Media", desc: "Interviews, guest appearances, and journalist inquiries" },
  { type: "accounting", icon: "📊", title: "Accounting Services", desc: "Work with Saggio Management Group" },
  { type: "podcasting", icon: "🎙", title: "Podcasting / Shows", desc: "Show questions, listener mail, or collaboration" },
  { type: "general", icon: "✉️", title: "General Inquiry", desc: "Something else — Ralph's team will route it correctly" },
];

// Routing notes shown after an inquiry type is selected (ported from the
// routingMessages map in the original contact.html script).
const routingMessages: Partial<Record<InquiryType, ReactNode>> = {
  coaching: (
    <>
      For coaching inquiries, you can also use the dedicated form on the{" "}
      <Link href="/coaching" style={{ color: "var(--h)" }}>Coaching page</Link>.
    </>
  ),
  speaking: (
    <>
      For speaking inquiries, you can also use the booking form on the{" "}
      <Link href="/speaking#book" style={{ color: "var(--h)" }}>Speaking page</Link>{" "}
      which captures event-specific details.
    </>
  ),
  press: (
    <>
      For press and media inquiries, please also see the{" "}
      <Link href="/press" style={{ color: "var(--h)" }}>Media Kit page</Link> for bios,
      photos, and interview angles.
    </>
  ),
  accounting: (
    <>
      For accounting services, you can also contact Saggio Management Group directly at{" "}
      <a href="https://saggioaccounting.com" style={{ color: "var(--h)" }} target="_blank" rel="noopener">
        saggioaccounting.com
      </a>
      .
    </>
  ),
  podcasting: (
    <>Show questions and listener mail can also be sent to ralph@ralphestepjr.com with the show name in the subject line.</>
  ),
};

const subjectMap: Record<InquiryType, string> = {
  coaching: "Coaching Inquiry",
  speaking: "Speaking / Event Inquiry",
  press: "Press / Media Inquiry",
  accounting: "Accounting Services Inquiry",
  podcasting: "Podcast / Show Question",
  general: "",
};

export default function ContactInquiry() {
  const [selected, setSelected] = useState<InquiryType>("general");
  const [touched, setTouched] = useState(false);

  const routingNote = touched ? routingMessages[selected] : undefined;
  const subjectPlaceholder = subjectMap[selected] || "Brief subject line";

  return (
    <>
      <div className="contact-options" role="group" aria-label="Inquiry type">
        {options.map((opt) => (
          <button
            key={opt.type}
            className={`contact-option${touched && selected === opt.type ? " selected" : ""}`}
            aria-pressed={touched && selected === opt.type}
            onClick={() => {
              setSelected(opt.type);
              setTouched(true);
            }}
            type="button"
          >
            <span className="contact-option-icon" aria-hidden="true">{opt.icon}</span>
            <h4>{opt.title}</h4>
            <p>{opt.desc}</p>
          </button>
        ))}
      </div>

      {routingNote && (
        <div className="notice-banner mb-4" id="routing-note">
          <strong>{routingNote}</strong>
        </div>
      )}

      <ContactForm
        ariaLabel="Contact form"
        id="main-contact-form"
        submitLabel="Send Message"
        submitStyle={{ padding: "14px 32px" }}
        inquiryType={selected}
        footer={
          <p style={{ fontSize: "0.78rem", color: "var(--muted2)", marginTop: "10px" }}>
            Ralph&apos;s team responds within 2 business days. For accounting services, you can
            also reach Saggio Management Group directly at{" "}
            <a href="https://saggioaccounting.com" target="_blank" rel="noopener" style={{ color: "var(--h)" }}>
              saggioaccounting.com
            </a>
            .
          </p>
        }
      >
        <input type="hidden" name="inquiry_type" id="inquiry-type-field" value={selected} />
        <div className="grid-2" style={{ gap: "16px" }}>
          <div className="form-group">
            <label htmlFor="contact-name">Your name</label>
            <input type="text" id="contact-name" name="name" placeholder="First and last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email address</label>
            <input type="email" id="contact-email" name="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contact-org">Organization (optional)</label>
          <input type="text" id="contact-org" name="org" placeholder="Company, church, podcast, or event name" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-subject">Subject</label>
          <input type="text" id="contact-subject" name="subject" placeholder={subjectPlaceholder} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell Ralph and his team what's on your mind. The more context, the better the response."
            required
            style={{ minHeight: "160px" }}
          ></textarea>
        </div>
      </ContactForm>
    </>
  );
}
