import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import "./coaching.css";

export const metadata: Metadata = {
  title: "Coaching with Ralph Estep Jr. — Build Real Financial Confidence",
  description:
    "Work directly with Ralph Estep Jr., LPA, to build real financial clarity and confidence. One-on-one coaching for individuals and content creators ready to make real change.",
};

const WHO_ITS_FOR = [
  {
    icon: "😓",
    title: "You feel stuck or overwhelmed",
    description:
      "You know something needs to change with your finances, but you don't know where to start — or you've started and stalled.",
  },
  {
    icon: "📊",
    title: "You're building a business",
    description:
      "You're an entrepreneur or creator who needs to separate personal and business finances, reduce taxes, and plan for growth.",
  },
  {
    icon: "🎯",
    title: "You want accountability",
    description:
      "You've read the books. You know what you should do. What you need is someone to walk alongside you and keep you honest.",
  },
];

const PROCESS = [
  {
    title: "Discovery Call",
    description:
      "We start with a free 20-minute call. No pitch — just a real conversation about where you are and where you want to be.",
  },
  {
    title: "Full Assessment",
    description:
      "Ralph reviews your full financial picture — income, debt, spending, goals — and identifies exactly where the gaps are.",
  },
  {
    title: "Your Plan",
    description:
      "A personalized, step-by-step action plan built around your life — not a template. Specific, achievable, and built to last.",
  },
  {
    title: "Ongoing Support",
    description:
      "Regular check-ins, accountability, and adjustments as your situation evolves. You're not doing this alone.",
  },
];

const INCLUDED = [
  {
    title: "1-on-1 coaching sessions",
    description: "Private, focused calls — 60 minutes each — scheduled at your pace.",
  },
  {
    title: "Custom financial plan",
    description: "Written action plan tailored to your specific numbers, goals, and timeline.",
  },
  {
    title: "Direct access between sessions",
    description: "Email access to Ralph for quick questions, updates, and accountability between sessions.",
  },
  {
    title: "Resource library access",
    description: "Tools, worksheets, and templates from 30 years of real client work.",
  },
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function CoachingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="coaching-hero" aria-labelledby="coaching-heading">
        <div className="coaching-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>One-on-One Coaching</p>
          <h1 id="coaching-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "24px" }}>
            Clarity. A plan.
            <br />
            <em>The confidence to act on it.</em>
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: "36px" }}>
            Coaching with Ralph isn&apos;t about generic advice. It&apos;s a real conversation
            about your situation, your goals, and what&apos;s actually holding you back —
            followed by a plan you can execute.
          </p>
          <a href="#book" className="btn btn-navy hero-in" style={{ animationDelay: "0.48s" }}>
            Start the Conversation →
          </a>
        </div>
      </header>

      {/* ── WHO IT'S FOR ── */}
      <section className="section-sm bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Who It&apos;s For</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>You might be ready if…</h2>
          <div className="who-grid">
            {WHO_ITS_FOR.map((item, i) => (
              <div key={item.title} className={`card card-pad card-hover rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="who-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">How It Works</p>
          <h2 className="rv d1" style={{ marginBottom: "56px" }}>A simple, clear process.</h2>
          <div className="process-grid">
            <div className="process-connector" aria-hidden="true" />
            {PROCESS.map((step, i) => (
              <div key={step.title} className={`process-step rv${i > 0 ? ` d${i}` : ""}`}>
                <div className={`process-circle${i === 3 ? " gold" : ""}`}>
                  <span>{i + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section-sm bg-alt">
        <div className="container included-grid">
          <div>
            <span className="gold-rule-left gold-rule rv" />
            <p className="eyebrow rv">What&apos;s Included</p>
            <h2 className="rv d1" style={{ marginBottom: "32px" }}>
              Everything you need to move forward with confidence.
            </h2>
            <div className="included-list">
              {INCLUDED.map((item, i) => (
                <div key={item.title} className={`included-item rv${i > 0 ? ` d${i}` : ""}`}>
                  <div className="included-check">
                    <CheckIcon />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quote-card rv d1">
            <span className="gold-rule-left gold-rule" style={{ margin: "0 0 24px" }} />
            <blockquote>
              &quot;I don&apos;t just hand you information. I sit with you and help you figure
              out what to do with it.&quot;
            </blockquote>
            <p className="quote-card-author">— Ralph Estep Jr., LPA</p>
            <div className="quote-card-footer">
              <p>Ready to take the first step? The discovery call is free — no pressure, no pitch.</p>
              <a href="#book" className="btn btn-gold">Book a Free Call →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="book" className="section text-center">
        <div className="container-narrow" style={{ maxWidth: "640px" }}>
          <span className="gold-rule rv" />
          <p className="eyebrow rv">Get Started</p>
          <h2 className="rv d1" style={{ marginBottom: "16px" }}>Let&apos;s have a real conversation.</h2>
          <p className="rv d2" style={{ marginBottom: "36px" }}>
            Fill out the form below and Ralph&apos;s team will follow up within one
            business day to schedule your free discovery call.
          </p>
          <div className="rv d3">
            <ContactForm
              ariaLabel="Coaching inquiry form"
              submitLabel="Send Message →"
              className="booking-form"
              inquiryType="coaching"
            >
              <div className="booking-form-row">
                <input type="text" name="first_name" placeholder="First name" required />
                <input type="text" name="last_name" placeholder="Last name" required />
              </div>
              <input type="email" name="email" placeholder="Email address" required />
              <textarea name="message" placeholder="Tell Ralph briefly what you're working through…" rows={4} />
            </ContactForm>
          </div>
          <p className="rv d4" style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "14px" }}>
            No commitment required. Your information is never shared.
          </p>
        </div>
      </section>
    </>
  );
}
