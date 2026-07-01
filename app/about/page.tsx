import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HobbyPhotos from "@/components/HobbyPhotos";
import "./about.css";

export const metadata: Metadata = {
  title: "About Ralph Estep Jr. — LPA, Podcaster, Business Coach",
  description:
    "Meet Ralph Estep Jr. — a Licensed Public Accountant with 30+ years of experience whose childhood shaped a lifelong mission to help everyday people build real financial confidence.",
};

const CREDENTIALS = [
  {
    title: "Licensed Public Accountant",
    description:
      "Delaware-based LPA with 30+ years of hands-on accounting, tax, and financial planning experience for individuals and businesses.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Business Coach",
    description:
      "Helping entrepreneurs and everyday people build real financial confidence — with accountability, clarity, and a plan that actually works.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Author & Podcaster",
    description:
      "Host of 4 active shows and author of multiple titles on personal finance, faith, and creator economics — reaching hundreds of thousands of listeners.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

const VALUES = [
  {
    title: "Empathy before everything",
    description:
      "You can't teach someone who feels ashamed or judged. Every conversation starts with meeting you where you are — not where you \"should\" be.",
  },
  {
    title: "Real tools, not just information",
    description:
      "The internet is full of financial information. What's missing is the translation — turning knowledge into action. That's what I focus on.",
  },
  {
    title: "Faith-informed, not faith-exclusive",
    description:
      "My faith informs how I approach stewardship and purpose. Whether or not you share that foundation, you're welcome at this table.",
  },
  {
    title: "Long-term thinking",
    description:
      "Quick fixes create fragile situations. Everything I teach is built for durability — decisions and habits that compound over years, not just weeks.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="page-hero-radial" aria-hidden="true" />
        <div className="about-hero-grid">
          <div>
            <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>About Ralph</p>
            <h1 id="about-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "24px" }}>
              Thirty years of helping people.
            </h1>
            <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: "32px" }}>
              I&apos;m Ralph Estep Jr. — Licensed Public Accountant, business coach, author,
              and podcaster. But more than any title, I&apos;m the person who puts an arm
              around you and says: <em style={{ color: "var(--h)" }}>&quot;It&apos;s going to be okay.&quot;</em>
            </p>
            <div className="hero-cta hero-in" style={{ animationDelay: "0.48s" }}>
              <Link href="/shows" className="btn btn-navy">Explore Shows</Link>
              <Link href="/coaching" className="btn btn-ghost">Work Together</Link>
            </div>
          </div>
          <div className="about-hero-photo">
            <div className="about-hero-frame" aria-hidden="true" />
            <div className="about-hero-photo-img">
              <Image
                src="/images/ralph-headshot.png"
                alt="Ralph Estep Jr., LPA"
                width={1122}
                height={1402}
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar" aria-label="By the numbers">
        <div className="stats-grid">
          <div className="stat-item rv">
            <div className="stat-number">30+</div>
            <div className="stat-label">Years in Practice</div>
          </div>
          <div className="stat-item rv d1">
            <div className="stat-number">540K+</div>
            <div className="stat-label">YouTube Subscribers</div>
          </div>
          <div className="stat-item rv d2">
            <div className="stat-number">4</div>
            <div className="stat-label">Active Shows</div>
          </div>
          <div className="stat-item rv d3">
            <div className="stat-number">LPA</div>
            <div className="stat-label">Licensed Public Accountant</div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section">
        <div className="container-narrow">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">The Origin Story</p>
          <h2 className="rv d1" style={{ marginBottom: "32px" }}>It started when I was eight years old.</h2>
          <div className="story-prose">
            <p className="rv d1">
              When family circumstances shifted unexpectedly, I found myself navigating
              financial responsibilities that most kids never encounter. Before I could
              drive, I was learning what it meant to stretch a dollar, to make hard
              choices, and to carry the weight of money stress.
            </p>
            <p className="rv d2">
              That experience never left me. It became the reason I pursued accounting,
              the reason I started coaching, and the reason every piece of content I
              create is rooted in empathy first — not judgment.
            </p>
            <p className="rv d3">
              Over the last 30 years, I&apos;ve helped business owners,
              families, and individuals at every financial stage — from
              first-generation wealth builders to people in crisis. The thread running
              through every conversation is the same:{" "}
              <em>people need to feel seen before they can be helped.</em>
            </p>
            <p className="rv d4">
              I&apos;m not here to lecture. I&apos;m here to put an arm around you and say:{" "}
              <em>&quot;It&apos;s going to be okay — and here&apos;s how we&apos;re going to get there.&quot;</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="section-sm bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Expertise &amp; Credentials</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>What Ralph brings to the table</h2>
          <div className="grid-3">
            {CREDENTIALS.map((c, i) => (
              <div key={c.title} className={`card card-pad card-hover rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="card-icon">{c.icon}</div>
                <h3 style={{ marginBottom: "10px" }}>{c.title}</h3>
                <p style={{ fontSize: "14px" }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section">
        <div className="container-narrow">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">How I Work</p>
          <h2 className="rv d1" style={{ marginBottom: "44px" }}>The principles behind everything.</h2>
          <div className="numbered-list">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`numbered-item rv${i > 0 ? ` d${i}` : ""}`}>
                <div className="numbered-index">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 style={{ marginBottom: "8px" }}>{v.title}</h3>
                  <p style={{ fontSize: "15px" }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOBBIES ── */}
      <section className="section bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Beyond the Numbers</p>
          <h2 className="rv d1" style={{ marginBottom: "12px" }}>The man off the clock.</h2>
          <p className="rv d2" style={{ maxWidth: "560px", marginBottom: "48px" }}>
            When Ralph isn&apos;t coaching clients or recording, you&apos;ll find him out on the
            open road or on the softball field — where the same discipline and love of
            community show up in a different uniform.
          </p>
          <HobbyPhotos />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm bg-navy text-center" style={{ position: "relative", overflow: "hidden" }}>
        <div className="radial-soft radial-quiz" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "560px" }}>
          <h2 className="rv" style={{ marginBottom: "16px" }}>Ready to take the next step?</h2>
          <p className="rv d1" style={{ marginBottom: "32px" }}>
            Explore the shows, book Ralph to speak, or start a coaching conversation.
            Whatever brings you here — there&apos;s a path forward.
          </p>
          <div className="rv d2" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/coaching" className="btn btn-gold">Start Coaching</Link>
            <Link href="/shows" className="btn btn-ghost-dark">Explore Shows</Link>
          </div>
        </div>
      </section>
    </>
  );
}
