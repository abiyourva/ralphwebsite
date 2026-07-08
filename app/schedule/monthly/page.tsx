import type { Metadata } from "next";
import Link from "next/link";
import { RALPH_BOOKING_URL } from "../booking-links";
import "../schedule.css";

export const metadata: Metadata = {
  title: "Book a Monthly Client Check-In — Ralph Estep Jr., LPA",
  description:
    "Existing bookkeeping and advisory clients can schedule their regular monthly check-in with Ralph Estep Jr., LPA here.",
};

const WHAT_TO_EXPECT = [
  {
    title: "Your numbers, reviewed",
    description: "We'll walk through your latest books, cash flow, and anything that needs attention.",
  },
  {
    title: "Open questions, answered",
    description: "Bring anything that's come up since your last check-in — no question is too small.",
  },
  {
    title: "A clear plan for next month",
    description: "You'll leave knowing exactly what to expect before we meet again.",
  },
];

export default function MonthlySchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="monthly-heading">
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <Link href="/schedule" className="schedule-back rv">← All Scheduling Options</Link>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Monthly Clients</p>
          <h1 id="monthly-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "24px" }}>
            Book your monthly check-in.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s" }}>
            For clients already on an ongoing bookkeeping or advisory plan — use this
            page to grab your regular monthly appointment.
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
            <span className="eyebrow">Monthly Clients</span>
            <h2>Ready to schedule?</h2>
            <p>Choose a time that works for you — you&apos;ll get an email confirmation and calendar invite right away.</p>
            <a className="btn btn-gold" href={RALPH_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book My Check-In →
            </a>
            <div className="fine">Secure scheduling powered by Google Calendar.</div>
          </div>
        </div>
      </section>
    </>
  );
}
