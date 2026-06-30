import type { Metadata } from "next";
import Image from "next/image";
import PressBios from "./PressBios";
import "./press.css";

export const metadata: Metadata = {
  title: "Media Kit & Press — Ralph Estep Jr.",
  description:
    "Media kit for Ralph Estep Jr. — speaker bios, high-res photos, interview angles, and press contact information for journalists, producers, and event organizers.",
};

const TALKING_POINTS = [
  {
    title: "Breaking the shame cycle around money",
    description: "Why financial shame keeps people stuck — and how empathy-first conversations create real change.",
  },
  {
    title: "Faith & money: a conversation the church avoids",
    description: "Biblical stewardship in modern financial terms — why faith and personal finance belong in the same conversation.",
  },
  {
    title: "The financial blind spots of content creators",
    description: "What podcasters and creators get wrong about taxes, structure, and revenue — and how to fix it.",
  },
  {
    title: "Building financial confidence vs. financial information",
    description: "Why the internet has too much financial advice and not enough financial action — and how to bridge that gap.",
  },
  {
    title: "Small business financial health in uncertain times",
    description: "Practical frameworks for small business owners navigating cash flow, taxes, and long-term planning.",
  },
  {
    title: "The arc from crisis to confidence",
    description: "Personal story: navigating financial pressure as a child, and how that shaped 30 years of work with clients in their own crises.",
  },
];

// Curated selection of podcast/media appearances. Full, continually-updated
// list lives at askralph.com/ralphs-appearances — linked below the list.
const APPEARANCES = [
  {
    icon: "🎤",
    show: "Bartelle's Money Talk",
    title: "Faith, Finances & Freedom: How to Get Your House in Order",
    url: "https://podcasts.apple.com/us/podcast/faith-finances-freedom-how-to-get-your-house-in-order/id1732123565?i=1000738663309",
    verb: "Listen",
  },
  {
    icon: "🎤",
    show: "New Media Show Audio",
    title: "Digital Creator 2026 Money Playbook",
    url: "https://podcasts.apple.com/us/podcast/digital-creator-2026-money-playbook-ralph-estep-jr/id392545649?i=1000746403885",
    verb: "Listen",
  },
  {
    icon: "🎤",
    show: "The Thrive Within Podcast",
    title: "Breaking the Silence of Financial Shame",
    url: "https://www.buzzsprout.com/2506417/episodes/18089210",
    verb: "Listen",
  },
  {
    icon: "🎤",
    show: "Pastors and Money",
    title: "Retire with Confidence: Expert Tips for Pastors' Retirement Planning",
    url: "https://pastorsandmoney.com/pastors-retirement-planning/",
    verb: "Listen",
  },
  {
    icon: "🎤",
    show: "Halfway to Sunday",
    title: "Scarcity Shouts. Gratitude Whispers. (Ep. 76)",
    url: "https://halfwaytosunday.simplecast.com/episodes/scarcity-shouts-gratitude-whispers-w-ralph-estep-jr-ep-76-5ta0mhFe",
    verb: "Listen",
  },
  {
    icon: "▶️",
    show: "Financial Freedom for Physicians",
    title: "Balancing Acts: Finance and Faith",
    url: "https://www.youtube.com/watch?v=mqKffc-MWhU",
    verb: "Watch",
  },
  {
    icon: "🎤",
    show: "Walk in Victory",
    title: "Break Free from Financial Stress with 7 Life-Changing Principles",
    url: "https://podcasts.apple.com/us/podcast/break-free-from-financial-stress-with-7-life-changing/id1459142845?i=1000678635401",
    verb: "Listen",
  },
  {
    icon: "🎤",
    show: "Building the Premier Accounting Firm",
    title: "Get Lifelong Accounting Clients: Relationship-Based Secrets",
    url: "https://podcasts.apple.com/us/podcast/get-lifelong-accounting-clients-relationship-based/id1506023469?i=1000699139789",
    verb: "Listen",
  },
];

export default function PressPage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="press-hero">
        <div className="press-hero-radial" aria-hidden="true" />
        <div className="press-hero-grid">
          <div className="press-hero-text">
            <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Media Kit &amp; Press</p>
            <h1 className="hero-in" style={{ animationDelay: "0.25s" }}>
              Everything you need to cover Ralph&apos;s story.
            </h1>
            <p className="hero-in" style={{ animationDelay: "0.38s" }}>
              Official bios, headshots, brand assets, talking points, and contact
              details — all in one place for journalists, producers, and podcast
              hosts.
            </p>
            <div className="hero-cta hero-in" style={{ animationDelay: "0.48s" }}>
              <a href="#assets" className="btn btn-navy">Download Assets</a>
              <a href="mailto:ralph@ralphestepjr.com" className="btn btn-ghost">Email Ralph&apos;s Team</a>
            </div>
          </div>

          <div className="facts-card rv d1">
            <div className="facts-card-circle" aria-hidden="true" />
            <p className="facts-card-label">At a Glance</p>
            <div className="facts-row">
              <span>Title</span>
              <span>Licensed Public Accountant (LPA)</span>
            </div>
            <div className="facts-row">
              <span>Location</span>
              <span>Middletown, Delaware</span>
            </div>
            <div className="facts-row">
              <span>Experience</span>
              <span>30+ Years in Practice</span>
            </div>
            <div className="facts-row">
              <span>YouTube</span>
              <span className="gold-value">540K+ Subscribers</span>
            </div>
            <div className="facts-row">
              <span>Active Shows</span>
              <span>4</span>
            </div>
            <div className="facts-row">
              <span>Media Contact</span>
              <a href="mailto:ralph@ralphestepjr.com">ralph@ralphestepjr.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* ── BIOS ── */}
      <section className="section-sm bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Official Bios</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>Ready to copy and use.</h2>
          <PressBios />
        </div>
      </section>

      {/* ── TALKING POINTS ── */}
      <section className="section">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Interview Topics</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>What Ralph loves to talk about.</h2>
          <div className="grid-3">
            {TALKING_POINTS.map((point, i) => (
              <div key={point.title} className={`card card-hover topic-num-card rv${i > 0 ? ` d${i % 4}` : ""}`}>
                <div className="topic-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS & APPEARANCES ── */}
      <section className="section bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Press &amp; Appearances</p>
          <h2 className="rv d1" style={{ marginBottom: "12px" }}>Recent media appearances.</h2>
          <p className="rv d2" style={{ marginBottom: "40px" }}>
            A selection of recent podcast and media appearances. See the full,
            continually-updated list on Ralph&apos;s site.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {APPEARANCES.map((item, i) => (
              <div key={item.url} className={`card appearance-row rv${i > 0 ? ` d${i % 4}` : ""}`}>
                <div className="appearance-icon" aria-hidden="true">{item.icon}</div>
                <div>
                  <strong>{item.show}</strong>
                  <p>
                    {item.title} ·{" "}
                    <a href={item.url} target="_blank" rel="noopener">
                      {item.verb} →
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rv">
            <a href="https://www.askralph.com/ralphs-appearances/" target="_blank" rel="noopener" className="btn btn-ghost">
              View All of Ralph&apos;s Appearances →
            </a>
          </div>
        </div>
      </section>

      {/* ── HEADSHOTS & ASSETS ── */}
      <section id="assets" className="section bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Brand Assets</p>
          <h2 className="rv d1" style={{ marginBottom: "12px" }}>Headshots &amp; Logos</h2>
          <p className="assets-note rv d2">
            For editorial and promotional use only. Please do not alter, crop, or
            recolor without written permission.
          </p>
          <div className="grid-3" style={{ marginBottom: "32px" }}>
            <div className="card card-hover asset-card rv">
              <div className="asset-thumb">
                <Image
                  src="/images/ralph-headshot.png"
                  alt="Ralph Estep Jr. headshot"
                  width={1122}
                  height={1402}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="asset-meta">
                <div>
                  <p>Headshot — Square</p>
                  <p>High resolution PNG</p>
                </div>
                <a href="/images/ralph-headshot.png" target="_blank" rel="noopener" className="asset-download">
                  Download
                </a>
              </div>
            </div>

            <div className="card card-hover asset-card rv d1">
              <div className="asset-thumb asset-thumb-dark">
                <div className="asset-logo-name" style={{ color: "var(--on-dark)" }}>Ralph Estep Jr.</div>
                <div className="asset-logo-rule" />
                <div className="asset-logo-tag">LPA · Author · Podcaster</div>
              </div>
              <div className="asset-meta">
                <div>
                  <p>Logo — Dark</p>
                  <p>PNG + SVG available</p>
                </div>
                <a href="mailto:ralph@ralphestepjr.com?subject=Logo%20Request" className="asset-download">
                  Download
                </a>
              </div>
            </div>

            <div className="card card-hover asset-card rv d2">
              <div className="asset-thumb asset-thumb-light">
                <div className="asset-logo-name" style={{ color: "var(--bg-navy)" }}>Ralph Estep Jr.</div>
                <div className="asset-logo-rule" />
                <div className="asset-logo-tag">LPA · Author · Podcaster</div>
              </div>
              <div className="asset-meta">
                <div>
                  <p>Logo — Light</p>
                  <p>PNG + SVG available</p>
                </div>
                <a href="mailto:ralph@ralphestepjr.com?subject=Logo%20Request" className="asset-download">
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="card kit-request rv d3">
            <div>
              <p>Need a full press kit?</p>
              <p>Email Ralph&apos;s team for a complete press kit including additional headshots, show artwork, and brand guidelines.</p>
            </div>
            <a href="mailto:ralph@ralphestepjr.com?subject=Press%20Kit%20Request" className="btn btn-navy">
              Request Full Kit →
            </a>
          </div>
        </div>
      </section>

      {/* ── MEDIA CONTACT ── */}
      <section className="section-sm bg-navy text-center" style={{ position: "relative", overflow: "hidden" }}>
        <div className="radial-soft radial-quiz" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "560px" }}>
          <h2 className="rv" style={{ marginBottom: "14px" }}>Get in touch with Ralph&apos;s team.</h2>
          <p className="rv d1" style={{ marginBottom: "28px" }}>
            For media inquiries, interview requests, and press opportunities — Ralph&apos;s
            team responds within two business days.
          </p>
          <div className="media-contact-cta rv d2">
            <a href="mailto:ralph@ralphestepjr.com?subject=Media%20Inquiry" className="btn btn-gold">
              ralph@ralphestepjr.com
            </a>
            <p>Saggio Management Group · 1100 Dutch Neck Road, Middletown, DE</p>
          </div>
        </div>
      </section>
    </>
  );
}
