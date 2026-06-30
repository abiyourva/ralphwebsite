import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import "./speaking.css";

export const metadata: Metadata = {
  title: "Book Ralph Estep Jr. to Speak — LPA, Financial Expert, Podcaster",
  description:
    "Book Ralph Estep Jr. for your event, conference, or podcast. Personal finance, creator economics, faith and money, and entrepreneurship — a speaker your audience will actually remember.",
};

const WHY_FEATURES = [
  {
    title: "Audience-first approach",
    description: "Every talk is tailored to your audience's specific financial reality — not a generic keynote.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "30+ years of credibility",
    description: "As a Licensed Public Accountant, Ralph speaks from decades of real-world practice — not just theory.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Available for podcast interviews",
    description: "Ralph is an experienced podcast guest — comfortable with long-form, conversational, and technical formats.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.95 3.38 2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const TOPICS = [
  {
    title: "Building Financial Confidence",
    description:
      "The flagship talk. Ralph walks audiences through a practical framework for moving from financial anxiety to genuine confidence — no shame, no jargon, just real steps.",
    tags: ["Personal Finance", "Keynote", "Workshop"],
  },
  {
    title: "Faith & Financial Stewardship",
    description:
      "For churches, faith-based organizations, and Christian conferences. Ralph integrates biblical principles of stewardship with practical, modern financial guidance.",
    tags: ["Faith-Based", "Church Events"],
  },
  {
    title: "The Business of Content Creation",
    description:
      "Designed for creator-focused events and podcasting conferences. Ralph covers the financial structures, tax strategies, and revenue models every creator needs to understand.",
    tags: ["Creator Economy", "Conference"],
  },
  {
    title: "Small Business Financial Health",
    description:
      "For chamber events, entrepreneurship programs, and small business associations. Ralph covers the financial fundamentals every small business owner must master to survive and grow.",
    tags: ["Small Business", "Workshop"],
  },
];

const FORMATS = [
  { icon: "🎤", title: "Keynote", description: "30–60 minute main-stage presentations for conferences, galas, and large group events." },
  { icon: "🏫", title: "Workshop", description: "Interactive 90-minute to half-day sessions with practical exercises and real-time Q&A." },
  { icon: "🎙", title: "Podcast Guest", description: "Long-form and conversational interview appearances on finance, faith, business, or creator podcasts." },
  { icon: "💻", title: "Virtual", description: "Online webinars, virtual summits, and remote workshop facilitation — available worldwide." },
];

const BOOKING_POINTS = [
  "Ralph's team reviews every inquiry personally",
  "Response within 2 business days",
  "In-person and virtual engagements available",
];

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function SpeakingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="speaking-hero">
        <div className="speaking-hero-radial" aria-hidden="true" />
        <div className="speaking-hero-quote" aria-hidden="true">&quot;</div>
        <div className="speaking-hero-inner">
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Speaking &amp; Events</p>
          <h1 className="hero-in" style={{ animationDelay: "0.25s" }}>
            Ralph brings financial clarity to any room — with warmth, wit, and 30 years
            of real experience.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: "36px" }}>
            Whether it&apos;s a corporate conference, a church financial series, a podcast
            interview, or a community event — Ralph meets audiences where they are and
            leaves them equipped to move forward.
          </p>
          <div className="hero-cta hero-in" style={{ animationDelay: "0.48s" }}>
            <a href="#book" className="btn btn-gold">Book Ralph to Speak</a>
            <a href="#topics" className="btn btn-ghost-dark">View Topics →</a>
          </div>
        </div>
      </header>

      {/* ── WHY RALPH ── */}
      <section className="section-sm">
        <div className="container why-grid">
          <div>
            <span className="gold-rule-left gold-rule rv" />
            <p className="eyebrow rv">Why Ralph</p>
            <h2 className="rv d1" style={{ marginBottom: "24px" }}>Not just a speaker. A trusted guide.</h2>
            <p className="rv d2" style={{ marginBottom: "20px" }}>
              Ralph&apos;s speaking is grounded in 30 years of real-world accounting and
              coaching — not theory. He translates complex financial concepts into
              language anyone can understand, and does it with genuine empathy for
              where audiences actually are.
            </p>
            <p className="rv d3">
              Audiences don&apos;t leave with more anxiety — they leave with clarity, a plan,
              and the belief that <em style={{ color: "var(--h)" }}>it&apos;s going to be okay.</em>
            </p>
          </div>
          <div className="why-feature-list">
            {WHY_FEATURES.map((f, i) => (
              <div key={f.title} className={`card card-hover why-feature-card rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="why-feature-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE TOPICS ── */}
      <section id="topics" className="section bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Signature Topics</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>What Ralph speaks about.</h2>
          <div className="grid-2">
            {TOPICS.map((topic, i) => (
              <div key={topic.title} className={`card card-hover topic-card rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="topic-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="topic-tags">
                  {topic.tags.map((tag) => (
                    <span key={tag} className="topic-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="section-sm bg-navy">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Event Formats</p>
          <h2 className="rv d1" style={{ color: "var(--on-dark)", marginBottom: "48px" }}>
            Ralph speaks in any format.
          </h2>
          <div className="format-grid">
            {FORMATS.map((format, i) => (
              <div key={format.title} className={`format-card rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="format-icon">{format.icon}</div>
                <h3>{format.title}</h3>
                <p>{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="book" className="section">
        <div className="container booking-grid">
          <div>
            <span className="gold-rule-left gold-rule rv" />
            <p className="eyebrow rv">Book Ralph</p>
            <h2 className="rv d1" style={{ marginBottom: "20px" }}>Let&apos;s bring this to your audience.</h2>
            <p className="rv d2" style={{ marginBottom: "28px" }}>
              Tell Ralph about your event and your audience. His team will follow up
              within two business days to discuss fit, availability, and logistics.
            </p>
            <div className="booking-points rv d3">
              {BOOKING_POINTS.map((point) => (
                <div key={point} className="booking-point">
                  <div className="booking-point-check">
                    <CheckIcon />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <div className="media-contact-box rv d4">
              <p>Media inquiries</p>
              <a href="mailto:ralph@ralphestepjr.com">ralph@ralphestepjr.com</a>
            </div>
          </div>

          <div className="rv d1">
            <ContactForm
              ariaLabel="Speaking inquiry form"
              submitLabel="Submit Inquiry →"
              className="booking-form speaking-form"
              inquiryType="speaking"
              footer={
                <p style={{ fontSize: "12px", color: "var(--muted2)" }}>
                  Your information is never shared or sold.
                </p>
              }
            >
              <div className="booking-form-row">
                <input type="text" name="first_name" placeholder="First name" required />
                <input type="text" name="last_name" placeholder="Last name" required />
              </div>
              <input type="email" name="email" placeholder="Email address" required />
              <input type="text" name="org" placeholder="Organization / Event name" required />
              <select name="format" defaultValue="">
                <option value="" disabled>Event format</option>
                <option>Keynote</option>
                <option>Workshop / Breakout</option>
                <option>Podcast Interview</option>
                <option>Virtual Event</option>
                <option>Other</option>
              </select>
              <textarea name="message" placeholder="Tell Ralph about your event, audience, and date…" rows={4} />
            </ContactForm>
          </div>
        </div>
      </section>
    </>
  );
}
