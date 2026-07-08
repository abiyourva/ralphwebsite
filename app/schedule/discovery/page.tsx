import type { Metadata } from "next";
import Link from "next/link";
import { RENEE_BOOKING_URL } from "../booking-links";
import "../schedule.css";

export const metadata: Metadata = {
  title: "Book a Discovery Call — Ralph Estep Jr., LPA",
  description:
    "Schedule a free discovery call or consultation to see if working with Ralph Estep Jr., LPA and Saggio Management Group is the right fit.",
};

const WHAT_TO_EXPECT = [
  {
    title: "A real conversation",
    description: "No pitch — just a chance to talk through where you are and what you need.",
  },
  {
    title: "Straight answers",
    description: "We'll tell you honestly whether we're the right fit for your situation.",
  },
  {
    title: "Next steps, if it's a match",
    description: "If it makes sense to move forward, we'll walk you through exactly what that looks like.",
  },
];

export default function DiscoverySchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="discovery-heading">
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <Link href="/schedule" className="schedule-back rv">← All Scheduling Options</Link>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Discovery &amp; Consultations</p>
          <h1 id="discovery-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "24px" }}>
            Let&apos;s start with a conversation.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s" }}>
            New to the firm? This free discovery call is the first step — a no-pressure
            conversation about where you are and whether we&apos;re the right fit.
          </p>
        </div>
      </header>

      <section className="section-sm bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">What to Expect</p>
          <h2 className="rv d1" style={{ marginBottom: "40px" }}>On the call.</h2>
          <div className="schedule-steps" style={{ maxWidth: "640px" }}>
            {WHAT_TO_EXPECT.map((item, i) => (
              <div key={item.title} className={`schedule-step rv${i > 0 ? ` d${i}` : ""}`}>
                <span className="num">{i + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container-narrow" style={{ maxWidth: "640px" }}>
          <div className="booking-card rv">
            <span className="eyebrow">Discovery &amp; Consultations</span>
            <h2>Ready to talk?</h2>
            <p>Choose a time that works for you — you&apos;ll get an email confirmation and calendar invite right away.</p>
            <a className="btn btn-gold" href={RENEE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book My Discovery Call →
            </a>
            <div className="fine">Secure scheduling powered by Google Calendar.</div>
          </div>
        </div>
      </section>
    </>
  );
}
