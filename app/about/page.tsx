import type { Metadata } from "next";
import Link from "next/link";
import "./about.css";

export const metadata: Metadata = {
  title: "About Ralph Estep Jr. — LPA, Podcaster, Business Coach",
  description:
    "Meet Ralph Estep Jr. — a Licensed Public Accountant with 30+ years of experience whose childhood shaped a lifelong mission to help everyday people build real financial confidence.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero" aria-labelledby="about-heading">
        <div className="container-narrow">
          <span className="eyebrow">Meet Ralph</span>
          <h1 id="about-heading">Thirty years of helping people realize it&apos;s going to be okay.</h1>
          <span className="gold-rule"></span>
          <p>
            Licensed Public Accountant. Business Coach. Author. Podcaster. And the person
            who wants to sit across the table from you and say: &quot;We can figure this out.&quot;
          </p>
        </div>
      </header>

      {/* ── MAIN STORY ── */}
      <section className="section-lg">
        <div className="container">
          <div className="about-story">
            <div className="about-content">
              {/* CREDIBILITY BAR */}
              <div className="cred-pills mb-5" role="list" aria-label="Credentials">
                <span className="cred-pill" role="listitem">Licensed Public Accountant (LPA)</span>
                <span className="cred-pill" role="listitem">30+ Years in Practice</span>
                <span className="cred-pill" role="listitem">400K+ YouTube Subscribers</span>
                <span className="cred-pill" role="listitem">Author &amp; Podcaster</span>
                <span className="cred-pill" role="listitem">Business Coach</span>
              </div>

              {/* ORIGIN STORY */}
              <span className="eyebrow">The Origin Story</span>
              <h2>It started when I was eight years old.</h2>
              <span className="gold-rule gold-rule-left"></span>

              <p className="mt-3">
                When I was eight, family circumstances shifted in ways that most kids
                never have to think about. I found myself stepping into a role that no
                child should have to fill — helping manage our family&apos;s financial
                situation, making decisions and navigating pressures that were far beyond
                my years.
              </p>

              <p className="mt-3">
                Most people would have let that experience leave them bitter, or anxious,
                or just avoiding money conversations altogether. For me, it did the
                opposite. It lit something. It made me understand from the inside out what
                it feels like to sit at a table where the stakes are real and the
                information feels overwhelming — and to desperately need someone who would
                just look at you and say, &quot;It&apos;s going to be okay. Here&apos;s what we&apos;re going
                to do.&quot;
              </p>

              <p className="mt-3">
                I became a Licensed Public Accountant because I wanted to be that person.
                Not the one who makes you feel small for not knowing. Not the one who
                lectures you about what you should have done differently. The one who puts
                an arm around you, tells you the truth, and walks with you toward
                something better.
              </p>

              <div className="pullquote mt-4">
                <p>
                  &quot;I&apos;m not here to make you feel ashamed about where you are. I&apos;m here to
                  help you build real confidence — the kind that comes from actually
                  understanding your money and having a plan.&quot;
                </p>
                <cite>— Ralph Estep Jr., LPA</cite>
              </div>

              <p className="mt-3">
                After more than thirty years in accounting and financial coaching, that
                mission has never changed. The formats have evolved — from the desk to the
                microphone, from one client at a time to hundreds of thousands of
                listeners — but the core of it is still the same. You deserve to feel
                confident about your finances. And you can get there.
              </p>

              {/* WHAT RALPH DOES */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>
                What Ralph Does
              </span>
              <h2>More than accounting. A whole ecosystem.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2 mb-4">
                Ralph works across four connected areas — each designed to meet people
                where they are.
              </p>

              <div className="what-ralph-does">
                <div className="does-card">
                  <span className="does-card-icon" aria-hidden="true">🎙</span>
                  <h4>Podcasting &amp; Media</h4>
                  <p>Four active shows reaching listeners across personal finance, faith, and creator business topics.</p>
                  <Link href="/shows">See all shows →</Link>
                </div>
                <div className="does-card">
                  <span className="does-card-icon" aria-hidden="true">🤝</span>
                  <h4>Coaching</h4>
                  <p>One-on-one work with individuals and content creators who want real clarity and a real plan.</p>
                  <Link href="/coaching">Learn about coaching →</Link>
                </div>
                <div className="does-card">
                  <span className="does-card-icon" aria-hidden="true">🎤</span>
                  <h4>Speaking</h4>
                  <p>Events, conferences, and guest appearances on personal finance, creator economics, and entrepreneurship.</p>
                  <Link href="/speaking">Book Ralph to speak →</Link>
                </div>
                <div className="does-card">
                  <span className="does-card-icon" aria-hidden="true">📊</span>
                  <h4>Accounting Practice</h4>
                  <p>Saggio Management Group has served individuals and small businesses in Middletown, Delaware for over 30 years.</p>
                  <a href="https://saggioaccounting.com" target="_blank" rel="noopener">Visit Saggio →</a>
                </div>
              </div>

              {/* PERSONAL SECTION */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>
                The Person Behind the Work
              </span>
              <h2>Beyond the microphone.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2">
                Ralph lives on what he calls his &quot;compound&quot; in Delaware — home, office,
                and farm all in one place, with Black Angus cattle managed by a
                neighboring farmer. He starts every day with exercise, rides motorcycles,
                and recently became a grandfather for the first time.
              </p>

              <div className="personal-grid" aria-label="Personal details">
                <div className="personal-item">
                  <span className="personal-icon" aria-hidden="true">👨‍👩‍👦‍👦</span>
                  <p>Married with two adult sons — one serving in the U.S. Coast Guard, one a barber</p>
                </div>
                <div className="personal-item">
                  <span className="personal-icon" aria-hidden="true">🐄</span>
                  <p>Lives on his &quot;compound&quot; in Delaware — home, office, and farm co-located</p>
                </div>
                <div className="personal-item">
                  <span className="personal-icon" aria-hidden="true">👶</span>
                  <p>Newly minted grandfather — first grandchild recently arrived</p>
                </div>
                <div className="personal-item">
                  <span className="personal-icon" aria-hidden="true">🏍</span>
                  <p>Avid motorcyclist and daily exerciser — 7 days a week, no exceptions</p>
                </div>
                <div className="personal-item">
                  <span className="personal-icon" aria-hidden="true">📍</span>
                  <p>Based in Middletown, Delaware — born and rooted in the community</p>
                </div>
                <div className="personal-item">
                  <span className="personal-icon" aria-hidden="true">✝️</span>
                  <p>Faith-driven — his values inform his work without overshadowing it</p>
                </div>
              </div>
            </div>

            {/* SIDEBAR PHOTO */}
            <div className="about-photo">
              <div className="about-photo-main" aria-hidden="true">
                <div className="photo-placeholder" style={{ height: "100%", borderRadius: "var(--radius-lg)" }}>
                  <span className="photo-placeholder-icon">📷</span>
                  Professional headshot
                  <br />
                  <small>Recommended: 800×1000px</small>
                </div>
              </div>
              <div className="card" style={{ marginTop: "24px" }}>
                <div className="card-body">
                  <h4 style={{ color: "var(--navy)", marginBottom: "12px" }}>Ready to get started?</h4>
                  <p style={{ fontSize: "0.85rem", marginBottom: "16px" }}>
                    Whether you want to work together directly or just tune in and learn,
                    there&apos;s a place for you here.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link href="/coaching" className="btn btn-primary" style={{ justifyContent: "center" }}>
                      Explore Coaching
                    </Link>
                    <Link href="/shows" className="btn btn-outline-navy" style={{ justifyContent: "center" }}>
                      Browse the Shows
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="section bg-navy text-center" aria-labelledby="mission-heading">
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>The Mission</span>
          <h2 id="mission-heading" style={{ color: "var(--white)" }}>Not just informed. Equipped.</h2>
          <span className="gold-rule"></span>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", marginTop: "24px" }}>
            Real tools. Real confidence. Real change. That&apos;s what every show, every
            coaching session, every conversation is built around. Because knowing
            something and being able to act on it are two very different things — and you
            deserve both.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "36px" }}>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link href="/press" className="btn btn-outline">Media Kit →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
