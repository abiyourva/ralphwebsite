import type { Metadata } from "next";
import Link from "next/link";
import ContactInquiry from "./ContactInquiry";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Ralph Estep Jr.",
  description:
    "Get in touch with Ralph Estep Jr. for coaching, speaking, accounting, or general inquiries. Ralph and his team respond within 2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <span className="eyebrow">Get in Touch</span>
          <h1>Let&apos;s start a conversation.</h1>
          <span className="gold-rule"></span>
          <p>
            Whether you&apos;re interested in coaching, speaking, accounting services, or just
            have a question — Ralph and his team respond within 2 business days.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div>
              <span className="eyebrow">What Can We Help With?</span>
              <h2>Tell us what you&apos;re looking for.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2 mb-4">
                Select the type of inquiry below and the form will adjust accordingly.
              </p>

              <ContactInquiry />
            </div>

            <div>
              <div className="info-card">
                <h4>Contact Information</h4>
                <div className="info-row">
                  <span className="info-icon" aria-hidden="true">📧</span>
                  <div>
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:ralph@askralph.com" style={{ color: "var(--h)" }}>ralph@askralph.com</a>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon" aria-hidden="true">📍</span>
                  <div>
                    <strong>Office</strong>
                    <br />
                    Saggio Management Group
                    <br />
                    1100 Dutch Neck Road
                    <br />
                    Middletown, Delaware
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon" aria-hidden="true">🌐</span>
                  <div>
                    <strong>Accounting Practice</strong>
                    <br />
                    <a href="https://saggioaccounting.com" target="_blank" rel="noopener" style={{ color: "var(--h)" }}>
                      saggioaccounting.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h4>Quicker paths</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                  <Link href="/coaching" className="btn btn-ghost" style={{ justifyContent: "center", fontSize: "0.85rem" }}>
                    Coaching inquiry →
                  </Link>
                  <Link href="/speaking#book" className="btn btn-ghost" style={{ justifyContent: "center", fontSize: "0.85rem" }}>
                    Speaking / booking form →
                  </Link>
                  <Link href="/press" className="btn btn-ghost" style={{ justifyContent: "center", fontSize: "0.85rem" }}>
                    Press &amp; media kit →
                  </Link>
                  <a
                    href="https://saggioaccounting.com"
                    className="btn btn-ghost"
                    style={{ justifyContent: "center", fontSize: "0.85rem" }}
                    target="_blank"
                    rel="noopener"
                  >
                    Accounting services ↗
                  </a>
                </div>
              </div>

              <div className="card card-pad">
                <h4 style={{ color: "var(--h)", marginBottom: "8px" }}>Response time</h4>
                <p style={{ fontSize: "0.85rem" }}>
                  Ralph and his team typically respond within <strong style={{ color: "var(--h)" }}>2 business days</strong>.
                  For speaking inquiries with upcoming dates, please note your event date
                  in the message so the team can prioritize accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
