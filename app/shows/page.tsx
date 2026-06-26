import type { Metadata } from "next";
import Image from "next/image";
import "./shows.css";

export const metadata: Metadata = {
  title: "Shows & Content — Ralph Estep Jr.",
  description:
    "Explore all four of Ralph Estep Jr.'s shows — Becoming Financially Confident, Financially Confident Christian, Truth Unveiled with Ralph, and The Content Creator's Accountant.",
};

export default function ShowsPage() {
  return (
    <>
      <header className="shows-hero" aria-labelledby="shows-heading">
        <div className="shows-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Shows &amp; Content</p>
          <h1 id="shows-heading" className="hero-in" style={{ animationDelay: "0.25s" }}>
            A show for where
            <br />
            <em>you are right now.</em>
          </h1>
          <p className="hero-in" style={{ animationDelay: "0.38s" }}>
            Whether you&apos;re building financial confidence, growing in faith, creating
            content, or just looking for inspiration — there&apos;s a show made for your
            moment.
          </p>
        </div>
      </header>

      {/* BFC */}
      <section id="bfc" className="show-feature">
        <div className="show-feature-grid">
          <div>
            <div className="live-badge rv">
              <span className="live-dot" aria-hidden="true" />
              <span>Launching September 2026</span>
            </div>
            <h2 className="rv d1">Becoming Financially Confident</h2>
            <p className="show-feature-desc rv d2">
              The daily show that gives you real tools and real confidence — not just
              information. Every episode is built around one practical takeaway you can
              apply the same day.
            </p>
            <ul className="arrow-list rv d3">
              <li>Daily episodes, Monday through Friday</li>
              <li>Practical finance tools for everyday people</li>
              <li>No shame, no jargon — real talk about real money</li>
            </ul>
            <a href="#bfc" className="btn btn-navy rv d4">Get Notified at Launch →</a>
          </div>
          <div className="show-cover rv">
            <div className="show-cover-placeholder">
              <div className="show-cover-placeholder-text">BFC</div>
              <p className="show-cover-placeholder-label">Becoming Financially Confident</p>
            </div>
            <div className="show-cover-banner">
              <span>Coming September 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* FCC */}
      <section id="fcc" className="show-feature bg-alt">
        <div className="show-feature-grid">
          <div className="show-cover rv">
            <Image
              src="/images/cover-fcc.png"
              alt="Financially Confident Christian podcast cover"
              width={1080}
              height={1080}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="plain-badge rv">
              <span>Podcast · Available Now</span>
            </div>
            <h2 className="rv d1">Financially Confident Christian</h2>
            <p className="show-feature-desc rv d2">
              Faith-based personal finance for Christians who want to steward their
              resources well. Money and faith aren&apos;t separate conversations — this show
              brings them together with integrity and practicality.
            </p>
            <ul className="arrow-list rv d3">
              <li>Biblical principles applied to modern finance</li>
              <li>Tithing, generosity, debt, and wealth building</li>
              <li>Welcoming to listeners of all backgrounds</li>
            </ul>
            <a
              href="https://www.financiallyconfidentchristian.com/"
              target="_blank"
              rel="noopener"
              className="btn btn-navy rv d4"
            >
              Listen Now →
            </a>
          </div>
        </div>
      </section>

      {/* TRUTH UNVEILED */}
      <section id="truth" className="show-feature">
        <div className="show-feature-grid">
          <div>
            <div className="live-badge rv" style={{ animationDelay: "0s" }}>
              <span>400K+ YouTube Subscribers</span>
            </div>
            <h2 className="rv d1">Truth Unveiled with Ralph</h2>
            <p className="show-feature-desc rv d2">
              Inspirational, practical content for everyday life. With over 400,000
              YouTube subscribers, Truth Unveiled has become one of Ralph&apos;s
              most-watched platforms — mixing financial wisdom with real-life
              perspective and encouragement.
            </p>
            <ul className="arrow-list rv d3">
              <li>YouTube-first video content</li>
              <li>Life, money, mindset, and purpose</li>
              <li>400,000+ subscribers and growing</li>
            </ul>
            <a
              href="https://www.truthunveiledwithralph.com/"
              target="_blank"
              rel="noopener"
              className="btn btn-navy rv d4"
            >
              Watch on YouTube →
            </a>
          </div>
          <div className="show-cover rv">
            <Image
              src="/images/cover-truth-unveiled.jpg"
              alt="Truth Unveiled with Ralph podcast cover"
              width={1080}
              height={1080}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* CONTENT CREATOR'S ACCOUNTANT */}
      <section id="content-creator" className="show-feature bg-alt">
        <div className="show-feature-grid">
          <div className="show-cover rv">
            <Image
              src="/images/cover-content-creator.jpg"
              alt="The Content Creator's Accountant podcast cover"
              width={1080}
              height={1080}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="plain-badge rv">
              <span>For Creators</span>
            </div>
            <h2 className="rv d1">The Content Creator&apos;s Accountant</h2>
            <p className="show-feature-desc rv d2">
              Financial education built specifically for podcasters and content
              creators. Taxes, LLCs, audience economics, revenue streams — the
              financial side of building a creator business, explained clearly.
            </p>
            <ul className="arrow-list rv d3">
              <li>Tax strategies for creators and podcasters</li>
              <li>Business structure, expenses, and revenue</li>
              <li>Free creator financial audit available</li>
            </ul>
            <a
              href="https://contentcreatorsaccountant.com/audit"
              target="_blank"
              rel="noopener"
              className="btn btn-navy rv d4"
            >
              Get Your Free Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
