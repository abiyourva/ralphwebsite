import type { Metadata } from "next";
import Link from "next/link";
import PressBios from "./PressBios";
import "./press.css";

export const metadata: Metadata = {
  title: "Media Kit & Press — Ralph Estep Jr.",
  description:
    "Media kit for Ralph Estep Jr. — speaker bios, high-res photos, interview angles, and press contact information for journalists, producers, and event organizers.",
};

export default function PressPage() {
  return (
    <>
      <header className="page-hero" id="onesheet">
        <div className="container-narrow">
          <span className="eyebrow">Media Kit &amp; Press</span>
          <h1>Everything you need — right here, no email required.</h1>
          <span className="gold-rule"></span>
          <p>
            Bios in three lengths, high-res photos, interview hooks, and contact
            information. Download what you need and reach out when you&apos;re ready.
          </p>
        </div>
      </header>

      <section className="section-lg">
        <div className="container">
          <div className="press-grid">
            <div>
              {/* BIOS */}
              <span className="eyebrow">Press Bios</span>
              <h2>Speaker bios — three lengths.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2 mb-4">
                Choose the length that fits your format. All three are ready to paste.
              </p>
              <PressBios />

              {/* INTERVIEW HOOKS */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>Interview Angles</span>
              <h2>Story hooks for producers.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2 mb-4">
                Five ready-to-use angles for pitching Ralph as a guest, interview subject,
                or expert source.
              </p>

              <div className="hook-card">
                <h4>&quot;The person who says it&apos;s going to be okay&quot; — the empathy gap in personal finance media</h4>
                <p>
                  In a landscape dominated by shame-based financial advice, Ralph has built
                  a following by doing the opposite — leading with empathy and equipping
                  people instead of judging them. How does that approach actually change
                  outcomes?
                </p>
              </div>
              <div className="hook-card">
                <h4>Managing your family&apos;s finances at age 8 — and what it taught a 30-year accountant</h4>
                <p>
                  Ralph&apos;s origin story is deeply personal and immediately compelling. What
                  does it feel like to take on adult financial responsibility as a child —
                  and how does that experience inform the way he works with clients today?
                </p>
              </div>
              <div className="hook-card">
                <h4>What podcasters get wrong about the money side of their business</h4>
                <p>
                  Ralph has built an entire show around this question — and the answers
                  often surprise creators who think they understand their own revenue. The
                  Audience Economics framework changes how creators think about their
                  business model.
                </p>
              </div>
              <div className="hook-card">
                <h4>From accounting practice to 400K YouTube subscribers — building a media business at 50+</h4>
                <p>
                  Ralph didn&apos;t grow up as a media personality. He built four shows from his
                  accounting practice, and the journey offers real lessons for anyone
                  considering a pivot from professional services to content creation.
                </p>
              </div>
              <div className="hook-card">
                <h4>Faith and money — why the conversation doesn&apos;t have to be preachy to be powerful</h4>
                <p>
                  Ralph has built a large faith-based audience without alienating
                  non-religious listeners. How do you speak honestly about faith-based
                  stewardship without driving people away? And what does the Bible actually
                  say that&apos;s financially useful?
                </p>
              </div>

              {/* PRESS MENTIONS */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>Press &amp; Appearances</span>
              <h2>Media appearances.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <div className="notice-banner mt-3">
                <strong>For Abby / team:</strong> Replace the items below with real
                appearances, guest spots, and press mentions as they accumulate. Include
                logo, name, and link where possible.
              </div>
              <div className="appearance-list" style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ padding: "16px", border: "1px solid var(--gray-mid)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: "14px", background: "var(--white)" }}>
                  <div style={{ width: "44px", height: "44px", background: "var(--gray-light)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>🎤</div>
                  <div>
                    <strong style={{ color: "var(--navy)", fontSize: "0.88rem" }}>[Podcast / Media Outlet Name]</strong>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-light)", margin: "2px 0 0" }}>
                      [Episode or article title] · [Year] · <a href="#" style={{ color: "var(--gold)" }}>Listen / Read →</a>
                    </p>
                  </div>
                </div>
                <div style={{ padding: "16px", border: "1px solid var(--gray-mid)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: "14px", background: "var(--white)" }}>
                  <div style={{ width: "44px", height: "44px", background: "var(--gray-light)", borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>📰</div>
                  <div>
                    <strong style={{ color: "var(--navy)", fontSize: "0.88rem" }}>[Publication Name]</strong>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-light)", margin: "2px 0 0" }}>
                      [Article headline] · [Year] · <a href="#" style={{ color: "var(--gold)" }}>Read →</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="press-sidebar">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 style={{ color: "var(--navy)", marginBottom: "8px" }}>Media Contact</h4>
                  <p style={{ fontSize: "0.85rem", marginBottom: "16px" }}>
                    For interview requests, guest bookings, and press inquiries:
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--navy)", fontWeight: 600 }}>Cyndee Harrison</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginBottom: "4px" }}>Publicist</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-light)", marginBottom: "16px" }}>[Cyndee&apos;s email — add here]</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--navy)", fontWeight: 600 }}>Ralph Estep Jr.</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>
                    <a href="mailto:ralph@askralph.com" style={{ color: "var(--navy)" }}>ralph@askralph.com</a>
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Send Press Inquiry
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h4 style={{ color: "var(--navy)", marginBottom: "14px" }} id="photos">Photo Downloads</h4>
                  <div className="photo-download-grid">
                    <div className="photo-download-item">
                      <div className="photo-thumb" aria-hidden="true">📷</div>
                      <div className="photo-download-meta">
                        <strong>Headshot — Square</strong>
                        <span>1000×1000px · PNG</span>
                        <a href="#">Download ↓</a>
                      </div>
                    </div>
                    <div className="photo-download-item">
                      <div className="photo-thumb" aria-hidden="true">📷</div>
                      <div className="photo-download-meta">
                        <strong>Headshot — Horizontal</strong>
                        <span>1200×800px · PNG</span>
                        <a href="#">Download ↓</a>
                      </div>
                    </div>
                    <div className="photo-download-item">
                      <div className="photo-thumb" aria-hidden="true">📷</div>
                      <div className="photo-download-meta">
                        <strong>Headshot — Vertical</strong>
                        <span>800×1200px · PNG</span>
                        <a href="#">Download ↓</a>
                      </div>
                    </div>
                    <div className="photo-download-item">
                      <div className="photo-thumb" aria-hidden="true">🖼</div>
                      <div className="photo-download-meta">
                        <strong>Show Logos Pack</strong>
                        <span>All 4 shows · ZIP</span>
                        <a href="#">Download ↓</a>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-light)", marginTop: "12px" }}>
                    Replace # links above with real file download URLs. Host on Google
                    Drive, Dropbox, or your web host.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 style={{ color: "var(--navy)", marginBottom: "10px" }}>Speaker One-Sheet</h4>
                  <p style={{ fontSize: "0.85rem", marginBottom: "16px" }}>
                    One-page PDF with bio, topics, headshot, and contact details — ready for
                    event committees.
                  </p>
                  <a href="#" className="btn btn-outline-navy" style={{ width: "100%", justifyContent: "center" }}>
                    Download One-Sheet PDF
                  </a>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-light)", marginTop: "10px" }}>
                    Replace # with your PDF file URL. Create the PDF once branding is
                    finalized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
