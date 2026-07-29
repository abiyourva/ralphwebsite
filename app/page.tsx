import Link from "next/link";
import Image from "next/image";
import CountUpStat from "@/components/CountUpStat";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import HeroParallax from "@/components/HeroParallax";
import LaunchCountdown from "@/components/LaunchCountdown";
import PressCarousel, { type PressCarouselItem } from "@/components/PressCarousel";
import Testimonials from "@/components/Testimonials";
import { APPEARANCES } from "@/lib/appearances";
import { TESTIMONIALS } from "@/lib/testimonials";
import { reviewJsonLd } from "@/lib/seo";
import { DollarSign, Handshake, Mic, Mic2, Calendar, Cross, PlayCircle } from "lucide-react";
import "./home.css";

// Home page metadata uses the site default from layout.tsx.

const VERB_BY_TYPE = {
  article: "Read the article",
  podcast: "Listen to the episode",
  video: "Watch the episode",
} as const;

const PRESS_MENTIONS: PressCarouselItem[] = [...APPEARANCES]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 12)
  .map((item) => ({
    icon: item.type,
    outlet: item.outlet,
    title: item.title,
    url: item.url,
    verb: VERB_BY_TYPE[item.type],
  }));

const REVIEW_JSON_LD = reviewJsonLd(
  TESTIMONIALS.map((t) => ({ name: t.name, quote: t.quote, date: t.date }))
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEW_JSON_LD) }}
      />
      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="home-announce-bar">
        <Link href="/cohost" className="hero-announce">
          <Mic2 size={15} strokeWidth={2} aria-hidden="true" /> Now hiring a podcast co-host <span>Apply →</span>
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-radial" aria-hidden="true" />
        <div className="hero-bottom-line" aria-hidden="true" />
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow hero-in" style={{ animationDelay: "0.1s" }}>
              Ralph Estep Jr. — LPA · Author · Podcaster · Business Coach
            </p>
            <h1 id="hero-heading" className="hero-in" style={{ animationDelay: "0.25s" }}>
              <span className="sr-only">Ralph Estep Jr., </span>
              The person who says
              <br />
              <em>
                &quot;It&apos;s going to
                <br />
                be okay&quot;
              </em>
            </h1>
            <p className="hero-sub hero-in" style={{ animationDelay: "0.38s" }}>
              For over 30 years, I&apos;ve helped people who feel
              overwhelmed, ashamed, or just plain stuck about money. My job is to put
              an arm around you — and then give you the real tools to change your
              situation.
            </p>
            <p className="hero-tagline hero-in" style={{ animationDelay: "0.44s" }}>
              Not just informed. Equipped.
            </p>
            <div className="hero-cta hero-in" style={{ animationDelay: "0.54s" }}>
              <Link href="/money-archetype" className="btn btn-navy">
                Take the Free Quiz →
              </Link>
              <Link href="#about" className="btn btn-ghost">
                Meet Ralph
              </Link>
            </div>
            <p className="hero-proof hero-in" style={{ animationDelay: "0.6s" }}>
              Trusted by 770K+ YouTube subscribers · 30+ years in practice
            </p>
          </div>

          <div className="hero-photo-col scale-in" style={{ animationDelay: "0.35s" }}>
            <div className="hero-photo-frame" aria-hidden="true" />
            <HeroParallax>
              <Image
                src="/images/ralph-headshot.png"
                alt="Ralph Estep Jr., LPA"
                width={1122}
                height={1402}
                priority
                sizes="(max-width: 480px) 260px, (max-width: 860px) 320px, 38vw"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </HeroParallax>
            <div className="hero-photo-tag">
              <p>Ralph Estep Jr., LPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reserves the scroll distance GSAP's pinned-hero effect will need,
          so inserting the real pin-spacer on load doesn't shift the page
          (see HomeScrollFX). Matched to the same viewport/pointer/motion
          conditions HomeScrollFX uses to decide whether to pin at all. */}
      <div id="hero-pin-reserve" aria-hidden="true" />

      {/* ── STATS ── */}
      <section className="stats-bar" aria-label="By the numbers">
        <div className="stats-grid">
          <div className="stat-item rv">
            <div className="stat-number"><CountUpStat value={30} suffix="+" /></div>
            <div className="stat-label">Years in Practice</div>
          </div>
          <div className="stat-item rv d1">
            <div className="stat-number"><CountUpStat value={770} suffix="K+" /></div>
            <div className="stat-label">YouTube Subscribers</div>
          </div>
          <div className="stat-item rv d2">
            <div className="stat-number"><CountUpStat value={4} durationMs={900} /></div>
            <div className="stat-label">Active Shows</div>
          </div>
          <div className="stat-item rv d3">
            <div className="stat-number">LPA</div>
            <div className="stat-label">Licensed Public Accountant</div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRESS ── */}
      <section className="section">
        <div className="container story-grid">
          <div className="story-photo rv">
            <div className="story-photo-img featured-press-img">
              <Image
                src="/images/appearances/marketing-against-the-grain.webp"
                alt="Ralph Estep Jr. featured in Marketing Against the Grain, HubSpot Media's marketing publication"
                width={600}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="story-photo-frame" aria-hidden="true" />
          </div>
          <div>
            <span className="gold-rule-left gold-rule rv" />
            <p className="eyebrow rv">Featured In</p>
            <h2 className="rv d1" style={{ marginBottom: "20px" }}>
              Your Content Strategy Might Be Building the Wrong Thing
            </h2>
            <p className="rv d2" style={{ marginBottom: "34px" }}>
              Ralph sat down with Marketing Against the Grain — HubSpot Media&apos;s
              marketing publication — to talk about the difference between content
              that performs and content that actually builds something worth having.
            </p>
            <a
              href="https://marketingagainstthegrain.com/articles/your-content-strategy-might-be-building-the-wrong-thing"
              target="_blank"
              rel="noopener"
              className="btn btn-gold rv d3"
            >
              Read the Feature →
            </a>
          </div>
        </div>
      </section>

      {/* ── QUIZ CTA ── */}
      <section className="section bg-alt text-center" style={{ position: "relative", overflow: "hidden" }}>
        <div className="radial-soft radial-quiz" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "640px" }}>
          <p className="eyebrow rv">Free Quiz</p>
          <h2 className="rv d1">What&apos;s your Money Archetype?</h2>
          <p className="rv d2" style={{ marginBottom: "34px" }}>
            Take the free 2-minute quiz to discover how you&apos;re wired to relate to
            wealth, work, and legacy — plus get a personalized 7-day email sequence.
          </p>
          <Link href="/money-archetype" className="btn btn-gold rv d3">
            Take the Free Quiz →
          </Link>
        </div>
      </section>

      {/* ── WHAT BRINGS YOU HERE ── */}
      <section id="coaching" className="section">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Find Your Path</p>
          <h2 className="rv d1" style={{ marginBottom: "48px" }}>What brings you here today?</h2>
          <div className="path-panels-viewport">
            <div className="grid-2 path-panels-track">
              <Link href="/shows#bfc" className="card card-hover path-card rv">
                <span className="path-card-num">01</span>
                <div className="path-card-icon"><DollarSign size={26} strokeWidth={1.75} /></div>
                <h3>I want financial confidence</h3>
                <p>Practical tools, real strategies, and the reassurance that it&apos;s going to be okay.</p>
                <span className="path-card-link">Explore →</span>
              </Link>
              <Link href="/coaching" className="card card-hover path-card rv d1">
                <span className="path-card-num">02</span>
                <div className="path-card-icon"><Handshake size={26} strokeWidth={1.75} /></div>
                <h3>I want to work with Ralph directly</h3>
                <p>One-on-one coaching to get clarity, a plan, and the confidence to follow through.</p>
                <span className="path-card-link">Learn More →</span>
              </Link>
              <Link href="/speaking" className="card card-hover path-card rv d2">
                <span className="path-card-num">03</span>
                <div className="path-card-icon"><Mic size={26} strokeWidth={1.75} /></div>
                <h3>I want to book Ralph to speak</h3>
                <p>Events, conferences, and podcast guest appearances on personal finance and creator economics.</p>
                <span className="path-card-link">Book Ralph →</span>
              </Link>
              <a
                href="https://contentcreatorsaccountant.com/audit"
                target="_blank"
                rel="noopener"
                className="card card-hover path-card rv d3"
              >
                <span className="path-card-num">04</span>
                <div className="path-card-icon"><Mic2 size={26} strokeWidth={1.75} /></div>
                <h3>I&apos;m a content creator</h3>
                <p>The financial side of running a podcast or creator business — taxes, audience economics, and more.</p>
                <span className="path-card-link">Free Audit →</span>
              </a>
              <Link href="/schedule" className="card card-hover path-card path-card-gold rv d4">
                <div className="path-card-icon"><Calendar size={26} strokeWidth={1.75} /></div>
                <div className="path-card-gold-body">
                  <span className="path-card-num">05</span>
                  <h3>I need to book an appointment</h3>
                  <p>Tax appointments, discovery calls, or your monthly check-in — pick a time that works for you.</p>
                </div>
                <span className="path-card-link">Book Now →</span>
              </Link>
            </div>
          </div>
          <p className="rv mt-3 text-center" style={{ fontSize: "14px", color: "var(--muted2)" }}>
            Looking for accounting services?{" "}
            <a href="https://saggioaccounting.com" target="_blank" rel="noopener" style={{ color: "var(--gold)", textDecoration: "underline" }}>
              Visit Saggio Management Group →
            </a>
          </p>
        </div>
      </section>

      {/* ── SHOWS ── */}
      <section id="shows" className="section bg-alt">
        <div className="container">
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">Tune In</p>
          <div className="section-heading-row">
            <h2 className="rv d1">Shows &amp; Brands</h2>
            <p className="rv d2">
              From daily personal finance to faith-based content to creator business —
              there&apos;s a show for where you are.
            </p>
          </div>
          <div className="grid-2">
            <Link href="/shows#bfc" className="card card-hover show-card rv">
              <span className="badge badge-gold">Launching Sept 2026</span>
              <h3 style={{ marginRight: "140px" }}>Becoming Financially Confident</h3>
              <p>The daily show that gives you real tools and real confidence — not just information.</p>
              <span className="show-card-link">Learn More →</span>
            </Link>
            <Link href="/shows#fcc" className="card card-hover show-card rv d1">
              <span className="badge">Podcast</span>
              <h3 style={{ marginRight: "80px" }}>Financially Confident Christian</h3>
              <p>Faith-based personal finance for Christians who want to steward their resources well.</p>
              <span className="show-card-link">Listen →</span>
            </Link>
            <Link href="/shows#truth" className="card card-hover show-card rv d2">
              <span className="badge">400K+ Subscribers</span>
              <h3 style={{ marginRight: "150px" }}>Truth Unveiled with Ralph</h3>
              <p>Inspirational, practical content for everyday life — with over 400,000 YouTube subscribers.</p>
              <span className="show-card-link">Watch →</span>
            </Link>
            <a
              href="https://contentcreatorsaccountant.com/audit"
              target="_blank"
              rel="noopener"
              className="card card-hover show-card rv d3"
            >
              <span className="badge">For Creators</span>
              <h3 style={{ marginRight: "100px" }}>The Content Creator&apos;s Accountant</h3>
              <p>Financial education built specifically for podcasters and content creators.</p>
              <span className="show-card-link">Free Audit →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="about" className="section">
        <div className="container story-grid">
          <div className="story-photo rv">
            <div className="story-photo-img">
              <Image
                src="/images/ralph-inthestudio.jpg"
                alt="Ralph Estep Jr. in the studio"
                width={1600}
                height={2000}
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% center" }}
              />
            </div>
            <div className="story-photo-frame" aria-hidden="true" />
          </div>
          <div>
            <span className="gold-rule-left gold-rule rv" />
            <p className="eyebrow rv">The Story Behind the Mission</p>
            <h2 className="rv d1" style={{ marginBottom: "24px" }}>It started when I was eight years old.</h2>
            <p className="rv d2" style={{ marginBottom: "18px" }}>
              When family circumstances shifted, I found myself responsible for things
              most kids never think about. That early experience — learning to navigate
              financial pressure before I was old enough to drive — became the
              foundation for everything I do today.
            </p>
            <p className="rv d3" style={{ marginBottom: "34px" }}>
              I&apos;m not here to lecture you or make you feel ashamed. I&apos;m here to put an
              arm around you and say: <em style={{ color: "var(--h)" }}>&quot;It&apos;s going to be okay — and here&apos;s how we&apos;re going to get there.&quot;</em>
            </p>
            <Link href="/about" className="btn btn-ghost rv d4">
              Read Ralph&apos;s Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-alt" aria-labelledby="testimonials-heading">
        <div className="container-narrow" style={{ maxWidth: "980px" }}>
          <span className="gold-rule-left gold-rule rv" />
          <p className="eyebrow rv">The Proof</p>
          <h2 id="testimonials-heading" className="rv d1" style={{ marginBottom: "48px" }}>
            It&rsquo;s going to be okay. Just ask them.
          </h2>
          <div className="rv d2">
            <Testimonials items={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* ── EMAIL CTA ── */}
      <section className="section bg-navy text-center" style={{ position: "relative", overflow: "hidden" }}>
        <div className="radial-soft radial-email" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "560px" }}>
          <p className="eyebrow rv">Stay Equipped</p>
          <h2 className="rv d1" style={{ marginBottom: "16px" }}>Get real financial tools — delivered free.</h2>
          <p className="rv d2" style={{ marginBottom: "32px" }}>
            Join the Becoming Financially Confident community. No fluff, no shame — just
            practical steps you can use today.
          </p>
          <div className="rv d3">
            <EmailCaptureForm placeholder="Your email address" buttonLabel="I'm In" location="Homepage" />
          </div>
          <p className="rv d4" style={{ fontSize: "12px", color: "var(--on-dark-d)", marginTop: "16px" }}>
            No spam. Unsubscribe anytime. Your information is never sold or shared.
          </p>
        </div>
      </section>

      {/* ── LATEST CONTENT ── */}
      <section className="section">
        <div className="container">
          <div className="flex-between mb-4" style={{ alignItems: "baseline", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="gold-rule-left gold-rule rv" />
              <p className="eyebrow rv">Fresh Content</p>
              <h2 className="rv d1">Latest from Ralph</h2>
            </div>
            <Link href="/shows" className="btn btn-ghost rv">
              All Shows →
            </Link>
          </div>
          <div className="grid-3">
            <Link href="/becoming-financially-confident" className="card card-hover episode-card rv">
              <div className="episode-card-icon"><Mic2 size={22} strokeWidth={1.75} /></div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Becoming Financially Confident</p>
              <h3>Coming Soon</h3>
              <div className="home-countdown-compact">
                <LaunchCountdown label="Launching in" />
              </div>
            </Link>
            <a
              href="https://www.truthunveiledwithralph.com/"
              target="_blank"
              rel="noopener"
              className="card card-hover episode-card rv d1"
            >
              <div className="episode-card-icon"><PlayCircle size={22} strokeWidth={1.75} /></div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Truth Unveiled with Ralph</p>
              <h3>Watch on YouTube</h3>
              <p>Inspirational, practical content for everyday life — over 400,000 subscribers.</p>
            </a>
            <a
              href="https://www.financiallyconfidentchristian.com/"
              target="_blank"
              rel="noopener"
              className="card card-hover episode-card rv d2"
            >
              <div className="episode-card-icon"><Cross size={22} strokeWidth={1.75} /></div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Financially Confident Christian</p>
              <h3>Listen Now</h3>
              <p>Faith-based personal finance for Christians who want to steward their resources well.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── IN THE PRESS ── */}
      <section className="section bg-alt">
        <div className="container">
          <div className="flex-between mb-4" style={{ alignItems: "baseline", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="gold-rule-left gold-rule rv" />
              <p className="eyebrow rv">In the Press</p>
              <h2 className="rv d1">Recent media appearances</h2>
            </div>
            <Link href="/appearances" className="btn btn-ghost rv">
              All Appearances →
            </Link>
          </div>
          <div className="rv d1">
            <PressCarousel items={PRESS_MENTIONS} />
          </div>
        </div>
      </section>
    </>
  );
}
