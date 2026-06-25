import Link from "next/link";
import Image from "next/image";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import "./home.css";

// Home page metadata uses the site default from layout.tsx (the index <title>
// and description), so no per-page metadata export is needed here.

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-eyebrow">LPA · Author · Podcaster · Business Coach</span>
              <h1 id="hero-heading">
                The person who says
                <br />
                <em>&quot;It&apos;s going to<br />be okay&quot;</em>
              </h1>
              <p className="hero-sub">
                For over 30 years, I&apos;ve sat across the table from people who feel
                overwhelmed, ashamed, or just plain stuck about money. My job is to put
                an arm around you — and then give you the real tools to change your
                situation.
              </p>
              <p
                className="hero-sub"
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "rgba(200,146,58,0.9)",
                  marginTop: "-16px",
                }}
              >
                Not just informed. Equipped.
              </p>
              <div className="hero-cta">
                <Link href="/shows#bfc" className="btn btn-primary">
                  Discover Becoming Financially Confident
                </Link>
                <Link href="/about" className="btn btn-outline">
                  Meet Ralph
                </Link>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <Image
                  src="/images/ralph-headshot.png"
                  alt="Ralph Estep Jr., LPA"
                  width={1122}
                  height={1402}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span className="hero-photo-tag">Ralph Estep Jr., LPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar" aria-label="By the numbers">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span className="trust-number">30+</span>
            <span className="trust-label">Years in Practice</span>
          </div>
          <div className="trust-divider" aria-hidden="true"></div>
          <div className="trust-item">
            <span className="trust-number">400K+</span>
            <span className="trust-label">YouTube Subscribers</span>
          </div>
          <div className="trust-divider" aria-hidden="true"></div>
          <div className="trust-item">
            <span className="trust-number">4</span>
            <span className="trust-label">Active Shows</span>
          </div>
          <div className="trust-divider" aria-hidden="true"></div>
          <div className="trust-item">
            <span className="trust-number">LPA</span>
            <span className="trust-label">Licensed Public Accountant</span>
          </div>
        </div>
      </div>

      {/* ── AUDIENCE SELF-SELECT ── */}
      <section className="section bg-cream" aria-labelledby="audience-heading">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">Find Your Path</span>
            <h2 id="audience-heading">What brings you here today?</h2>
            <span className="gold-rule"></span>
          </div>
          <div className="grid-4">
            <Link href="/shows#bfc" className="audience-tile">
              <div className="tile-icon" aria-hidden="true">💰</div>
              <h3>I want financial confidence</h3>
              <p>Practical tools, real strategies, and the reassurance that it&apos;s going to be okay.</p>
              <span className="tile-arrow">→</span>
            </Link>
            <Link href="/coaching" className="audience-tile">
              <div className="tile-icon" aria-hidden="true">🤝</div>
              <h3>I want to work with Ralph directly</h3>
              <p>One-on-one coaching to get clarity, a plan, and the confidence to follow through.</p>
              <span className="tile-arrow">→</span>
            </Link>
            <Link href="/speaking" className="audience-tile">
              <div className="tile-icon" aria-hidden="true">🎤</div>
              <h3>I want to book Ralph to speak</h3>
              <p>Events, conferences, and podcast guest appearances on personal finance and creator economics.</p>
              <span className="tile-arrow">→</span>
            </Link>
            <Link href="/shows#content-creator" className="audience-tile">
              <div className="tile-icon" aria-hidden="true">🎙</div>
              <h3>I&apos;m a content creator</h3>
              <p>The financial side of running a podcast or creator business — audience economics, taxes, and more.</p>
              <span className="tile-arrow">→</span>
            </Link>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://saggioaccounting.com"
              className="btn btn-outline-navy"
              target="_blank"
              rel="noopener"
            >
              Looking for accounting services? Visit Saggio Management Group →
            </a>
          </div>
        </div>
      </section>

      {/* ── SHOWS STRIP ── */}
      <section className="section" aria-labelledby="shows-heading">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">Tune In</span>
            <h2 id="shows-heading">Shows &amp; Brands</h2>
            <span className="gold-rule"></span>
            <p style={{ maxWidth: "560px", margin: "0 auto" }}>
              From daily personal finance to faith-based content to creator business —
              there&apos;s a show for where you are.
            </p>
          </div>
          <div className="grid-4">
            <div className="show-card">
              <div className="show-card-header" style={{ background: "var(--navy)" }}></div>
              <div className="show-card-body">
                <span className="show-badge">Launching Sept 2026</span>
                <h3>Becoming Financially Confident</h3>
                <p>The daily show that gives you real tools and real confidence — not just information.</p>
              </div>
              <div className="show-card-footer">
                <Link href="/shows#bfc" className="btn btn-outline-navy" style={{ fontSize: "0.78rem", padding: "8px 16px" }}>
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="show-card">
              <div className="show-card-header"></div>
              <div className="show-card-body">
                <span className="show-badge">Podcast</span>
                <h3>Financially Confident Christian</h3>
                <p>Faith-based personal finance for Christians who want to steward their resources well.</p>
              </div>
              <div className="show-card-footer">
                <Link href="/shows#fcc" className="btn btn-outline-navy" style={{ fontSize: "0.78rem", padding: "8px 16px" }}>
                  Listen →
                </Link>
              </div>
            </div>
            <div className="show-card">
              <div className="show-card-header" style={{ background: "#C0392B" }}></div>
              <div className="show-card-body">
                <span className="show-badge">400K+ Subscribers</span>
                <h3>Truth Unveiled with Ralph</h3>
                <p>Inspirational, practical content for everyday life — with over 400,000 YouTube subscribers.</p>
              </div>
              <div className="show-card-footer">
                <Link href="/shows#truth" className="btn btn-outline-navy" style={{ fontSize: "0.78rem", padding: "8px 16px" }}>
                  Watch →
                </Link>
              </div>
            </div>
            <div className="show-card">
              <div className="show-card-header" style={{ background: "#2A4A7F" }}></div>
              <div className="show-card-body">
                <span className="show-badge">For Creators</span>
                <h3>The Content Creator&apos;s Accountant</h3>
                <p>Financial education built specifically for podcasters and content creators.</p>
              </div>
              <div className="show-card-footer">
                <a
                  href="https://contentcreatorsaccountant.com/audit"
                  className="btn btn-outline-navy"
                  style={{ fontSize: "0.78rem", padding: "8px 16px" }}
                  target="_blank"
                  rel="noopener"
                >
                  Free Audit →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY SNIPPET ── */}
      <section className="section bg-cream" aria-labelledby="story-heading">
        <div className="container">
          <div className="origin-section">
            <div className="origin-photo" aria-hidden="true">
              <div className="photo-placeholder" style={{ height: "100%", borderRadius: "var(--radius-lg)" }}>
                <span className="photo-placeholder-icon">📷</span>
                Replace with lifestyle photo
                <br />
                <small>Ralph at the compound or studio</small>
              </div>
            </div>
            <div>
              <span className="eyebrow">The Story Behind the Mission</span>
              <h2 id="story-heading">It started when I was eight years old.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                When family circumstances shifted, I found myself responsible for things
                most kids never think about. That early experience — learning to navigate
                financial pressure before I was old enough to drive — became the
                foundation for everything I do today.
              </p>
              <p className="mt-3">
                I&apos;m not here to lecture you or make you feel ashamed about where you are.
                I&apos;m here to be the person who puts an arm around you and says:{" "}
                <em style={{ color: "var(--navy)", fontFamily: "var(--font-lora), serif" }}>
                  &quot;It&apos;s going to be okay — and here&apos;s how we&apos;re going to get there.&quot;
                </em>
              </p>
              <div className="mt-4">
                <Link href="/about" className="btn btn-primary">
                  Read Ralph&apos;s Full Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ── */}
      <section className="email-section" aria-labelledby="email-heading">
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>
            Stay Equipped
          </span>
          <h2 id="email-heading">Get real financial tools — delivered free.</h2>
          <p>
            Join the Becoming Financially Confident community. No fluff, no shame — just
            practical steps you can use today.
          </p>
          <EmailCaptureForm placeholder="Your email address" buttonLabel="I'm In" />
          <p className="email-disclaimer">
            No spam. Unsubscribe anytime. Your information is never sold or shared.
          </p>
        </div>
      </section>

      {/* ── LATEST FROM RALPH ── */}
      <section className="section" aria-labelledby="latest-heading">
        <div className="container">
          <div className="flex-between mb-4" style={{ flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="eyebrow">Fresh Content</span>
              <h2 id="latest-heading">Latest from Ralph</h2>
            </div>
            <Link href="/shows" className="btn btn-outline-navy">
              All Shows →
            </Link>
          </div>
          <div className="grid-3">
            {/* These are placeholder cards — replace with dynamic content or update manually */}
            <Link href="/shows#bfc" className="episode-card" style={{ textDecoration: "none" }}>
              <div className="episode-thumb" aria-hidden="true">🎙</div>
              <div className="episode-meta">
                <div className="episode-show">Becoming Financially Confident</div>
                <div className="episode-title">[Replace with latest episode title]</div>
                <div className="episode-desc">
                  Update this with your most recent episode description when the show
                  launches in September 2026.
                </div>
              </div>
            </Link>
            <Link href="/shows#truth" className="episode-card" style={{ textDecoration: "none" }}>
              <div className="episode-thumb" aria-hidden="true">▶️</div>
              <div className="episode-meta">
                <div className="episode-show">Truth Unveiled with Ralph</div>
                <div className="episode-title">[Replace with latest episode title]</div>
                <div className="episode-desc">
                  Link to your most recent Truth Unveiled video from your YouTube channel.
                </div>
              </div>
            </Link>
            <Link href="/shows#fcc" className="episode-card" style={{ textDecoration: "none" }}>
              <div className="episode-thumb" aria-hidden="true">✝️</div>
              <div className="episode-meta">
                <div className="episode-show">Financially Confident Christian</div>
                <div className="episode-title">[Replace with latest episode title]</div>
                <div className="episode-desc">Your most recent faith-based financial episode.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
