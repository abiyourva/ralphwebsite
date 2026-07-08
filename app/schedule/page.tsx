import type { Metadata } from "next";
import Link from "next/link";
import "./schedule.css";

export const metadata: Metadata = {
  title: "Book an Appointment — Ralph Estep Jr., LPA",
  description:
    "Schedule a tax appointment, a free discovery call, or a monthly client check-in with Ralph Estep Jr., LPA — Saggio Management Group.",
};

const CATEGORIES = [
  {
    icon: "🧾",
    title: "Tax Appointments",
    description:
      "Filing, tax prep, and tax planning sessions for individuals and small businesses.",
    href: "/schedule/tax",
  },
  {
    icon: "💬",
    title: "Discovery & Consultations",
    description:
      "New to the firm? Start here with a free introductory call to see if we're a good fit.",
    href: "/schedule/discovery",
  },
  {
    icon: "📊",
    title: "Monthly Clients",
    description:
      "Already an ongoing bookkeeping or advisory client? Book your regular check-in here.",
    href: "/schedule/monthly",
  },
];

const STEPS = [
  {
    title: "Choose the right category",
    description: "Pick the option below that matches what you need — tax, a first conversation, or an ongoing check-in.",
  },
  {
    title: "Pick an open time",
    description: "You'll be taken to a simple scheduling page to grab whatever slot works for your calendar.",
  },
  {
    title: "Get confirmed",
    description: "You'll receive an email confirmation and calendar invite right away — no phone tag required.",
  },
];

export default function SchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="schedule-heading">
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Scheduling</p>
          <h1 id="schedule-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "24px" }}>
            Let&apos;s find a time.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s" }}>
            Whether you need a tax appointment, a first conversation about working
            together, or your regular monthly check-in — pick the category below and
            you&apos;ll land on the right scheduling page in a couple of clicks.
          </p>
        </div>
      </header>

      <section className="section-sm bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">How It Works</p>
          <h2 className="rv d1" style={{ marginBottom: "40px" }}>Three simple steps.</h2>
          <div className="schedule-steps" style={{ maxWidth: "640px" }}>
            {STEPS.map((step, i) => (
              <div key={step.title} className={`schedule-step rv${i > 0 ? ` d${i}` : ""}`}>
                <span className="num">{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Get Started</p>
          <h2 className="rv d1" style={{ marginBottom: "40px" }}>What are you scheduling?</h2>
          <div className="category-grid">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.title} className={`card card-pad card-hover category-card rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <Link href={cat.href} className="btn btn-navy">
                  Choose a Time →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
