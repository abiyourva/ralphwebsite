import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import "./speaking.css";

export const metadata: Metadata = {
  title: "Book Ralph Estep Jr. to Speak — LPA, Financial Expert, Podcaster",
  description:
    "Book Ralph Estep Jr. for your event, conference, or podcast. Personal finance, creator economics, faith and money, and entrepreneurship — a speaker your audience will actually remember.",
};

export default function SpeakingPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container-narrow">
          <span className="eyebrow">Book Ralph to Speak</span>
          <h1>A speaker your audience will actually leave differently.</h1>
          <span className="gold-rule"></span>
          <p>
            Real stories. Practical tools. The kind of talk that changes how people think
            about money — and themselves.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "28px" }}>
            <a href="#booking-form" className="btn btn-primary">Check Availability</a>
            <Link href="/press" className="btn btn-outline">Download Speaker One-Sheet</Link>
          </div>
        </div>
      </header>

      <section className="section-lg">
        <div className="container">
          <div className="speaking-grid">
            <div>
              <span className="eyebrow">Speaker Bio</span>
              <h2>Why Ralph?</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                Ralph Estep Jr. is a Licensed Public Accountant (LPA) with over 30 years of
                experience, the host of four active podcasts reaching hundreds of thousands
                of listeners, and one of the most approachable voices in personal finance
                today.
              </p>
              <p className="mt-3">
                His speaking style is warm, direct, and built around a simple conviction:
                people don&apos;t need more shame about money — they need real tools and the
                genuine belief that it&apos;s going to be okay. Whether he&apos;s on a conference
                stage or a podcast microphone, Ralph&apos;s audiences leave with something they
                can actually use.
              </p>
              <p className="mt-3">
                His origin story — managing his family&apos;s finances at age 8 — gives every
                talk an emotional depth that most financial speakers simply can&apos;t match. He
                doesn&apos;t just know the information; he&apos;s lived the difficulty of it.
              </p>

              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>Speaking Topics</span>
              <h2>What Ralph speaks on.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <div className="topic-cards">
                <div className="topic-card">
                  <span className="topic-card-icon" aria-hidden="true">💰</span>
                  <h4>Personal Financial Confidence</h4>
                  <p>
                    Breaking the shame cycle around money, building a plan that works, and
                    the mindset shift that makes it all stick. Perfect for general
                    audiences, church groups, and corporate employee wellness events.
                  </p>
                </div>
                <div className="topic-card">
                  <span className="topic-card-icon" aria-hidden="true">🎙</span>
                  <h4>The Business of Content Creation</h4>
                  <p>
                    The financial reality behind building a creator business — audience
                    economics, revenue diversification, tax strategy, and the numbers
                    creators need to actually understand. Built for podcaster and creator
                    conferences.
                  </p>
                </div>
                <div className="topic-card">
                  <span className="topic-card-icon" aria-hidden="true">✝️</span>
                  <h4>Faith &amp; Financial Stewardship</h4>
                  <p>
                    How biblical principles align with practical financial wisdom — a talk
                    designed for churches, faith communities, and Christian conferences
                    without being preachy or disconnected from real life.
                  </p>
                </div>
                <div className="topic-card">
                  <span className="topic-card-icon" aria-hidden="true">🚀</span>
                  <h4>From Accountant to Entrepreneur</h4>
                  <p>
                    The journey from 30+ years in accounting to building a media and
                    coaching business — lessons for small business owners, entrepreneurs,
                    and anyone looking to build multiple income streams.
                  </p>
                </div>
              </div>

              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>Appearances &amp; Events</span>
              <h2>Where Ralph has spoken.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2 mb-4">
                Add logos or event names here as Ralph&apos;s speaking portfolio grows. The list
                below is a placeholder template.
              </p>
              <div className="appearance-list">
                <div className="appearance-item">
                  <div className="appearance-icon" aria-hidden="true">🎤</div>
                  <div>
                    <strong>[Event Name — e.g. Empowered Podcasting Conference]</strong>
                    <p>Replace with real event name, location, and year. Add a one-line note on Ralph&apos;s role if relevant.</p>
                  </div>
                </div>
                <div className="appearance-item">
                  <div className="appearance-icon" aria-hidden="true">🎤</div>
                  <div>
                    <strong>[Podcast Guest Appearance — e.g. Show Name]</strong>
                    <p>Replace with real podcast name and episode topic. Add link to episode if available.</p>
                  </div>
                </div>
                <div className="appearance-item">
                  <div className="appearance-icon" aria-hidden="true">🎤</div>
                  <div>
                    <strong>[Media Appearance — e.g. News Outlet or Publication]</strong>
                    <p>Replace with real media appearance. Link to article or segment if available.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "32px" }}>
                <Link href="/press" className="btn btn-outline-navy">View Full Media Kit &amp; Press Page →</Link>
              </div>
            </div>

            <div className="speaking-sidebar">
              <div className="inquiry-card" id="booking-form" style={{ background: "var(--white)", border: "1.5px solid var(--gray-mid)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ color: "var(--navy)", marginBottom: "8px" }}>Book Ralph for your event.</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", marginBottom: "24px" }}>
                  Fill out the form and Ralph&apos;s team will be in touch within 3 business days
                  to discuss availability and details.
                </p>
                <ContactForm
                  ariaLabel="Speaking inquiry form"
                  submitLabel="Submit Booking Inquiry"
                  submitStyle={{ width: "100%", justifyContent: "center" }}
                  footer={
                    <p style={{ fontSize: "0.75rem", color: "var(--text-light)", textAlign: "center", marginTop: "12px" }}>
                      For press inquiries, contact Ralph&apos;s publicist via the{" "}
                      <Link href="/press" style={{ color: "var(--navy)" }}>Press page</Link>.
                    </p>
                  }
                >
                  <div className="form-group">
                    <label htmlFor="speak-name">Your name</label>
                    <input type="text" id="speak-name" name="name" placeholder="First and last name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="speak-org">Organization / Event</label>
                    <input type="text" id="speak-org" name="org" placeholder="Conference name, company, or church" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="speak-email">Email address</label>
                    <input type="email" id="speak-email" name="email" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="speak-date">Event date (approximate)</label>
                    <input type="text" id="speak-date" name="date" placeholder="Month and year, or TBD" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="speak-audience">Audience size</label>
                    <select id="speak-audience" name="audience">
                      <option value="">Select range</option>
                      <option>Under 50</option>
                      <option>50–200</option>
                      <option>200–500</option>
                      <option>500–1,000</option>
                      <option>1,000+</option>
                      <option>Virtual / podcast interview</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="speak-topic">Topic interest</label>
                    <select id="speak-topic" name="topic">
                      <option value="">Select a topic</option>
                      <option>Personal financial confidence</option>
                      <option>The business of content creation</option>
                      <option>Faith and financial stewardship</option>
                      <option>From accountant to entrepreneur</option>
                      <option>Open — let Ralph suggest the right fit</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="speak-message">Anything else?</label>
                    <textarea
                      id="speak-message"
                      name="message"
                      placeholder="Event format, budget range, anything else that would help Ralph's team respond quickly."
                    ></textarea>
                  </div>
                </ContactForm>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream text-center">
        <div className="container-narrow">
          <span className="eyebrow">One More Thing</span>
          <h2>Need the one-sheet for your event committee?</h2>
          <span className="gold-rule"></span>
          <p className="mt-3">
            Ralph&apos;s speaker one-sheet has everything your committee needs — bio, topics,
            headshot, and contact info — in a single printable page.
          </p>
          <Link href="/press#onesheet" className="btn btn-primary mt-4" style={{ marginTop: "28px" }}>
            Download Speaker One-Sheet →
          </Link>
        </div>
      </section>
    </>
  );
}
