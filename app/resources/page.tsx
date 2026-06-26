import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import "./resources.css";

export const metadata: Metadata = {
  title: "Books & Resources — Ralph Estep Jr.",
  description:
    "Books, courses, and free financial tools from Ralph Estep Jr. — including the upcoming budgeting book and the free Money Archetype Quiz.",
};

const TOOLS = [
  {
    icon: "📊",
    title: "Monthly Budget Template",
    description:
      "A simple, no-frills spreadsheet for tracking income, expenses, and savings goals — used by Ralph's coaching clients.",
    linkLabel: "Free Download →",
    href: "#",
    internal: false,
  },
  {
    icon: "🧾",
    title: "Debt Payoff Tracker",
    description: "Visualize your debt payoff progress and stay motivated with this straightforward tracking tool.",
    linkLabel: "Free Download →",
    href: "#",
    internal: false,
  },
  {
    icon: "🎙",
    title: "Free Creator Financial Audit",
    description:
      "Get a personalized review of your creator business finances — where you're leaving money on the table and how to fix it.",
    linkLabel: "Get Free Audit →",
    href: "https://contentcreatorsaccountant.com/audit",
    internal: false,
  },
  {
    icon: "🧠",
    title: "Money Archetype Quiz",
    description: "2 minutes. Discover how you're wired around money — and get a 7-day personalized email series.",
    linkLabel: "Take the Quiz →",
    href: "/money-archetype",
    internal: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="resources-hero">
        <div className="resources-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Books &amp; Resources</p>
          <h1 className="hero-in" style={{ animationDelay: "0.25s" }}>
            Tools that go beyond
            <br />
            <em>just information.</em>
          </h1>
          <p className="hero-in" style={{ animationDelay: "0.38s" }}>
            Books, free downloads, quizzes, and practical tools — everything Ralph has
            built to help you move from knowing to doing.
          </p>
        </div>
      </header>

      {/* ── FREE QUIZ PROMO ── */}
      <section className="section-sm bg-alt" style={{ position: "relative", overflow: "hidden" }}>
        <div className="radial-soft radial-quiz" aria-hidden="true" />
        <div className="container quiz-promo-grid" style={{ position: "relative" }}>
          <div>
            <div className="quiz-promo-badge rv">
              <span>Free · 2 Minutes</span>
            </div>
            <h2 className="rv d1" style={{ marginBottom: "16px" }}>What&apos;s your Money Archetype?</h2>
            <p className="rv d2" style={{ marginBottom: "28px" }}>
              Discover how you&apos;re wired to relate to wealth, work, and legacy — then
              get a personalized 7-day email sequence built around your archetype.
            </p>
            <ul className="arrow-list-simple rv d3" style={{ marginBottom: "32px" }}>
              <li>Takes about 2 minutes</li>
              <li>Completely free, no credit card</li>
              <li>Personalized 7-day follow-up sequence</li>
            </ul>
            <Link href="/money-archetype" className="btn btn-gold rv d4">Take the Free Quiz →</Link>
          </div>
          <div className="card quiz-promo-card rv d1">
            <div className="quiz-promo-card-circle" aria-hidden="true" />
            <div className="quiz-promo-card-emoji">🧠</div>
            <h3>Know your Money Archetype</h3>
            <p>Understanding how you relate to money is the first step toward changing your relationship with it.</p>
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section className="section">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Books</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>Written by Ralph.</h2>
          <div className="book-cover-grid">
            <div className="card card-hover book-card rv">
              <span className="book-badge">Coming Soon 2027</span>
              <div className="book-cover book-cover-bfc">
                <div className="book-cover-title">Becoming<br />Financially<br />Confident</div>
                <div className="book-cover-rule" />
                <div className="book-cover-author">Ralph Estep Jr.</div>
              </div>
              <div className="book-card-body">
                <h3>Becoming Financially Confident</h3>
                <p>
                  The companion book to the show — practical steps to build lasting
                  financial confidence, from someone who&apos;s spent 30 years helping real
                  people with real money problems. Coming 2027.
                </p>
                <span className="book-card-notify">Notify Me When Available</span>
              </div>
            </div>

            <div className="card card-hover book-card rv d1">
              <span className="book-badge">Coming Soon 2027</span>
              <div className="book-cover book-cover-cca">
                <div style={{ fontSize: "36px", lineHeight: 1, marginBottom: "4px" }}>🎙</div>
                <div className="book-cover-title">The Content<br />Creator&apos;s<br />Accountant</div>
                <div className="book-cover-author">Ralph Estep Jr.</div>
              </div>
              <div className="book-card-body">
                <h3>The Content Creator&apos;s Accountant</h3>
                <p>
                  Everything podcasters and content creators need to know about
                  running a financially healthy creative business — taxes, structure,
                  revenue, and more. Coming 2027.
                </p>
                <span className="book-card-notify">Notify Me When Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TOOLS ── */}
      <section className="section bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Free Downloads &amp; Tools</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>Practical tools, no cost.</h2>
          <div className="grid-2">
            {TOOLS.map((tool, i) =>
              tool.internal ? (
                <Link key={tool.title} href={tool.href} className={`card card-hover tool-card rv${i > 0 ? ` d${i}` : ""}`}>
                  <div className="tool-card-icon">{tool.icon}</div>
                  <div>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <span className="tool-card-link">{tool.linkLabel}</span>
                  </div>
                </Link>
              ) : (
                <a
                  key={tool.title}
                  href={tool.href}
                  target={tool.href.startsWith("http") ? "_blank" : undefined}
                  rel={tool.href.startsWith("http") ? "noopener" : undefined}
                  className={`card card-hover tool-card rv${i > 0 ? ` d${i}` : ""}`}
                >
                  <div className="tool-card-icon">{tool.icon}</div>
                  <div>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <span className="tool-card-link">{tool.linkLabel}</span>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── EMAIL CTA ── */}
      <section className="section-sm bg-navy text-center" style={{ position: "relative", overflow: "hidden" }}>
        <div className="radial-soft radial-quiz" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "520px" }}>
          <h2 className="rv" style={{ marginBottom: "14px" }}>Get new resources delivered free.</h2>
          <p className="rv d1" style={{ marginBottom: "28px" }}>
            Join the Becoming Financially Confident community and be first to get new
            tools, templates, and episodes.
          </p>
          <div className="rv d2">
            <EmailCaptureForm placeholder="Your email address" buttonLabel="Join Free" />
          </div>
        </div>
      </section>
    </>
  );
}
