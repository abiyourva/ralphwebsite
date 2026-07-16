import Image from "next/image";
import Link from "next/link";
import PressBios from "./PressBios";
import { pageMetadata } from "@/lib/seo";
import "./press.css";

export const metadata = pageMetadata({
  title: "Media Kit & Press — Ralph Estep Jr., Financial Speaker",
  description:
    "Media kit for Ralph Estep Jr. — speaker bios, high-res photos, interview angles, and press contact information for journalists, producers, and event organizers.",
  path: "/press",
});

const TALKING_POINTS: {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}[] = [
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
    link: "/articles/do-content-creators-need-an-llc",
    linkLabel: "Read the article",
  },
  {
    title: "Building financial confidence vs. financial information",
    description: "Why the internet has too much financial advice and not enough financial action — and how to bridge that gap.",
    link: "/becoming-financially-confident",
    linkLabel: "See the program",
  },
  {
    title: "Small business financial health in uncertain times",
    description: "Practical frameworks for small business owners navigating cash flow, taxes, and long-term planning.",
    link: "/coaching",
    linkLabel: "Explore coaching",
  },
  {
    title: "The arc from crisis to confidence",
    description: "Personal story: navigating financial pressure as a child, and how that shaped 30 years of work with clients in their own crises.",
    link: "/about",
    linkLabel: "Ralph's full story",
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
              <span className="gold-value">770K+ Subscribers</span>
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

      {/* ── AS SEEN ON ── */}
      <section className="section-sm">
        <div className="container">
          <div className="press-badge-card rv">
            <Image
              src="/images/press/as-seen-on-networks.png"
              alt="Ralph Estep Jr. as seen on ABC, FOX News, NBC, CBS, AP, Sports Illustrated, International Business Times, and Morning News — syndicated to over 450 news sites"
              width={2000}
              height={1000}
              sizes="(max-width: 700px) 92vw, 860px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div className="press-memberships rv d1">
            <div className="press-membership-badge">
              <Image
                src="/images/press/podcast-professionals-association.png"
                alt="Member of the Podcast Professionals Association"
                width={500}
                height={500}
                sizes="120px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div className="press-membership-badge press-membership-badge-wide">
              <Image
                src="/images/press/the-podcast-academy.jpg"
                alt="Proud member of The Podcast Academy (TPA)"
                width={1024}
                height={512}
                sizes="220px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

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
                {point.link && (
                  <Link href={point.link} style={{ color: "var(--h)" }}>
                    {point.linkLabel} →
                  </Link>
                )}
              </div>
            ))}
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
                  sizes="(max-width: 700px) 100vw, (max-width: 860px) 50vw, 33vw"
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
          <p className="rv d3" style={{ marginTop: "24px" }}>
            Not press — just looking for financial guidance?{" "}
            <Link href="/schedule/discovery" style={{ color: "var(--on-dark)", textDecoration: "underline" }}>
              Book a free discovery call
            </Link>{" "}
            or browse{" "}
            <Link href="/articles" style={{ color: "var(--on-dark)", textDecoration: "underline" }}>
              Ralph&apos;s articles
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
