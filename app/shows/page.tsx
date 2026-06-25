import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import "./shows.css";

export const metadata: Metadata = {
  title: "Shows & Content — Ralph Estep Jr.",
  description:
    "Explore all four of Ralph Estep Jr.'s shows — Becoming Financially Confident, Financially Confident Christian, Truth Unveiled with Ralph, and The Content Creator's Accountant.",
};

export default function ShowsPage() {
  return (
    <>
      <header className="page-hero" aria-labelledby="shows-heading">
        <div className="container-narrow">
          <span className="eyebrow">Tune In</span>
          <h1 id="shows-heading">Shows &amp; Content</h1>
          <span className="gold-rule"></span>
          <p>
            Four shows. One mission. Find the right show for where you are — and the tools
            to get where you want to be.
          </p>
        </div>
      </header>

      <section className="section-lg">
        <div className="container">
          {/* BFC */}
          <div className="show-feature" id="bfc">
            <div>
              <div className="notice-banner">
                <strong>Launching September 2026</strong> — Becoming Financially Confident
                is Ralph&apos;s flagship daily show. Sign up below to be notified the moment it
                drops.
              </div>
              <span className="eyebrow">Daily Show · Launching Sept 2026</span>
              <h2>Becoming Financially Confident</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                This is the show that changes how you think about — and act on — your
                money. Every episode gives you real tools, real strategies, and the
                reassurance that no matter where you&apos;re starting from, you can build
                genuine financial confidence.
              </p>
              <p className="mt-3" style={{ fontFamily: "var(--font-lora), serif", fontStyle: "italic", color: "var(--navy)" }}>
                &quot;Real tools. Real confidence. Real change.&quot;
              </p>
              <p className="mt-3">
                Not just information — the practical steps and the mindset shifts that turn
                knowledge into action. Available daily across all major podcast platforms
                starting September 2026.
              </p>
              <div className="show-links mt-4">
                <a href="#" className="platform-link">🔔 Get Launch Notification</a>
                <a href="https://saggioaccounting.com" className="platform-link" target="_blank" rel="noopener">
                  🌐 Visit Main Site
                </a>
              </div>
              <EmailCaptureForm
                className="email-form-left email-capture-form mt-4"
                formStyle={{ maxWidth: "460px" }}
                formAriaLabel="BFC launch notification signup"
                placeholder="Your email — notify me at launch"
                buttonLabel="Notify Me"
              />
            </div>
            <div className="show-visual" style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%)", color: "var(--gold)" }}>
              🎙
            </div>
          </div>

          {/* FCC */}
          <div className="show-feature" id="fcc">
            <div className="show-visual" style={{ background: "linear-gradient(135deg, #1A3A2A 0%, #2A5A40 100%)", color: "#7EC8A0" }}>
              ✝️
            </div>
            <div>
              <span className="eyebrow">Podcast · Faith &amp; Finance</span>
              <h2>Financially Confident Christian</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                Managing money well and living out your faith aren&apos;t separate things —
                they&apos;re deeply connected. Financially Confident Christian explores the
                intersection of biblical wisdom and practical financial tools for
                Christians who want to steward what God has given them.
              </p>
              <p className="mt-3">
                Every episode combines scripture with actionable steps you can take this
                week. Whether you&apos;re getting out of debt, building savings, or learning to
                give generously, there&apos;s an episode for where you are.
              </p>
              <div className="show-links mt-4">
                <a href="#" className="platform-link">🍎 Apple Podcasts</a>
                <a href="#" className="platform-link">🟢 Spotify</a>
                <a href="#" className="platform-link">🌐 All Platforms</a>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)", marginTop: "12px" }}>
                Replace # links above with your actual podcast URLs.
              </p>
            </div>
          </div>

          {/* TRUTH UNVEILED */}
          <div className="show-feature" id="truth">
            <div>
              <span className="eyebrow">YouTube · 400K+ Subscribers</span>
              <h2>Truth Unveiled with Ralph</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                With over 400,000 YouTube subscribers, Truth Unveiled with Ralph is one of
                the most-watched inspirational shows in its category. Each episode
                approaches everyday challenges — relationships, purpose, finances, and
                faith — with honesty, depth, and practical wisdom.
              </p>
              <p className="mt-3">
                Ralph&apos;s approach is accessible without being shallow, and grounded without
                being preachy. If you&apos;re looking for content that meets you where you are
                and helps you think more clearly about your life, this is the show.
              </p>
              <div className="show-links mt-4">
                <a href="#" className="platform-link">▶️ Watch on YouTube</a>
                <a href="#" className="platform-link">🍎 Apple Podcasts</a>
                <a href="#" className="platform-link">🟢 Spotify</a>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)", marginTop: "12px" }}>
                Replace # links above with your actual channel/podcast URLs.
              </p>
            </div>
            <div className="show-visual" style={{ background: "linear-gradient(135deg, #5A1A1A 0%, #C0392B 100%)", color: "#FFAAAA" }}>
              ▶️
            </div>
          </div>

          {/* CONTENT CREATOR'S ACCOUNTANT */}
          <div className="show-feature" id="content-creator">
            <div className="show-visual" style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-mid) 100%)", color: "#A0C0F0" }}>
              🎧
            </div>
            <div>
              <span className="eyebrow">Podcast · Creator Business</span>
              <h2>The Content Creator&apos;s Accountant</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                You built an audience. Now you need to understand the business side. The
                Content Creator&apos;s Accountant is built specifically for podcasters and
                content creators who are generating revenue and need to manage it smarter.
              </p>
              <p className="mt-3">
                Ralph brings his 30+ years of accounting experience to the unique financial
                world of creator businesses — sponsorships, royalties, self-employment
                taxes, equipment deductions, LLC structure, and the Audience Economics
                framework for understanding what your audience is actually worth.
              </p>
              <div className="show-links mt-4">
                <a
                  href="https://contentcreatorsaccountant.com/audit"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener"
                  style={{ padding: "10px 20px", fontSize: "0.85rem" }}
                >
                  Get Your Free Creator Audit →
                </a>
                <a href="#" className="platform-link">🍎 Apple Podcasts</a>
                <a href="#" className="platform-link">🟢 Spotify</a>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)", marginTop: "12px" }}>
                Replace # links above with your actual podcast URLs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream text-center">
        <div className="container-narrow">
          <span className="eyebrow">Go Deeper</span>
          <h2>Want more than just a podcast?</h2>
          <span className="gold-rule"></span>
          <p className="mt-3">
            Coaching, speaking, the budgeting book, and the audio/video course bundle —
            there are more ways to work with Ralph and build real confidence.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
            <Link href="/coaching" className="btn btn-primary">Explore Coaching</Link>
            <Link href="/resources" className="btn btn-outline-navy">Books &amp; Resources</Link>
          </div>
        </div>
      </section>
    </>
  );
}
