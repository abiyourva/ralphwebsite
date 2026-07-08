import type { Metadata } from "next";
import Link from "next/link";
import { RALPH_BOOKING_URL } from "../booking-links";
import "../schedule.css";

export const metadata: Metadata = {
  title: "Book a Tax Appointment — Ralph Estep Jr., LPA",
  description:
    "Schedule your tax preparation or tax planning appointment with Ralph Estep Jr., LPA.",
};

const WHAT_TO_BRING = [
  {
    title: "Prior year return",
    description: "A copy of last year's filed return, if you have one.",
  },
  {
    title: "Income documents",
    description: "W-2s, 1099s, or business income and expense records for the year.",
  },
  {
    title: "Questions or changes",
    description: "Any life or business changes — new income, a new entity, a big purchase — worth discussing.",
  },
];

export default function TaxSchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="tax-heading">
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <Link href="/schedule" className="schedule-back rv">← All Scheduling Options</Link>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Tax Appointments</p>
          <h1 id="tax-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "24px" }}>
            Book your tax appointment.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s" }}>
            For tax preparation, filing, and planning sessions — for individuals and
            small businesses. Pick an open slot below and you&apos;re set.
          </p>
        </div>
      </header>

      <section className="section-sm bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Before You Book</p>
          <h2 className="rv d1" style={{ marginBottom: "40px" }}>What to have ready.</h2>
          <div className="schedule-steps" style={{ maxWidth: "640px" }}>
            {WHAT_TO_BRING.map((item, i) => (
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
            <span className="eyebrow">Tax Appointments</span>
            <h2>Ready to schedule?</h2>
            <p>Choose a time that works for you — you&apos;ll get an email confirmation and calendar invite right away.</p>
            <a className="btn btn-gold" href={RALPH_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book My Tax Appointment →
            </a>
            <div className="fine">Secure scheduling powered by Google Calendar.</div>
          </div>
        </div>
      </section>
    </>
  );
}
