import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import "./resources.css";

export const metadata: Metadata = {
  title: "Books & Resources — Ralph Estep Jr.",
  description:
    "Books, courses, and free financial tools from Ralph Estep Jr. — including the upcoming budgeting book and 10-part audio/video course bundle.",
};

// Shared inline input styling for the free-resource email forms.
const freeCardInputStyle = {
  padding: "10px 14px",
  border: "1.5px solid var(--gray-mid)",
  borderRadius: "var(--radius)",
  fontFamily: "inherit",
  fontSize: "0.85rem",
} as const;

export default function ResourcesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container-narrow">
          <span className="eyebrow">Books &amp; Resources</span>
          <h1>Real tools you can use today.</h1>
          <span className="gold-rule"></span>
          <p>
            The book, the course, and free resources built around the same mission as
            everything Ralph does — equipping you with practical financial confidence.
          </p>
        </div>
      </header>

      <section className="section-lg">
        <div className="container">
          {/* BOOK */}
          <div className="resource-feature">
            <div className="book-cover">
              <div className="photo-placeholder" style={{ height: "100%", borderRadius: "var(--radius-lg)" }}>
                <span className="photo-placeholder-icon">📖</span>
                Add book cover image here
                <br />
                <small>Recommended: 600×800px</small>
              </div>
            </div>
            <div>
              <span className="show-badge">Coming Soon</span>
              <span className="eyebrow" style={{ marginTop: "16px" }}>The Book</span>
              <h2>Give Every Dollar a Job</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                After 30+ years of sitting across from people who feel overwhelmed by their
                finances, Ralph wrote the book he wishes everyone had access to from the
                beginning. Not a theory book. Not a shame spiral in print. A real,
                practical guide to taking control of your money — one dollar at a time.
              </p>
              <p className="mt-3">
                Built around the principle of giving every dollar a job — knowing exactly
                where your money is going and making intentional decisions about all of it
                — this book is the companion to the Becoming Financially Confident show and
                the foundation of everything Ralph teaches.
              </p>
              <ul className="check-list mt-4">
                <li>~200 pages of practical, actionable financial guidance</li>
                <li>No jargon, no judgment — written for real people in real situations</li>
                <li>Built around Ralph&apos;s 30+ years of real-world client experience</li>
                <li>Designed to work alongside the audio/video course bundle</li>
              </ul>
              <div className="mt-4">
                <p style={{ fontSize: "0.88rem", color: "var(--text-light)", marginBottom: "14px" }}>
                  Be the first to know when it&apos;s available:
                </p>
                <EmailCaptureForm
                  className="email-form-left email-capture-form"
                  formAriaLabel="Book launch notification"
                  placeholder="Your email address"
                  inputAriaLabel="Email for book notification"
                  buttonLabel="Notify Me at Launch"
                />
              </div>
            </div>
          </div>

          {/* COURSE */}
          <div className="resource-feature">
            <div>
              <span className="show-badge">Coming Soon</span>
              <span className="eyebrow" style={{ marginTop: "16px" }}>The Course</span>
              <h2>Becoming Financially Confident: The 10-Part Course</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                The book in your hands, the course in your ears and eyes. Ralph&apos;s 10-part
                audio and video course bundle takes the core content from the budgeting
                book and walks you through it step by step — at your own pace, in your own
                time.
              </p>
              <p className="mt-3">
                Each module builds on the last. By the end, you won&apos;t just have a budget —
                you&apos;ll have a financial system that runs itself, and the confidence that
                comes from actually understanding your money.
              </p>
              <div className="grid-2 mt-4" style={{ gap: "16px" }}>
                <div style={{ padding: "16px", background: "var(--gold-faint)", borderRadius: "var(--radius)", border: "1px solid var(--gold-pale)" }}>
                  <strong style={{ color: "var(--navy)", fontSize: "0.88rem" }}>10 Modules</strong>
                  <p style={{ fontSize: "0.82rem", margin: "4px 0 0" }}>Complete financial curriculum from foundation to confidence</p>
                </div>
                <div style={{ padding: "16px", background: "var(--gold-faint)", borderRadius: "var(--radius)", border: "1px solid var(--gold-pale)" }}>
                  <strong style={{ color: "var(--navy)", fontSize: "0.88rem" }}>Audio + Video</strong>
                  <p style={{ fontSize: "0.82rem", margin: "4px 0 0" }}>Learn your way — listen on the go or watch at your desk</p>
                </div>
                <div style={{ padding: "16px", background: "var(--gold-faint)", borderRadius: "var(--radius)", border: "1px solid var(--gold-pale)" }}>
                  <strong style={{ color: "var(--navy)", fontSize: "0.88rem" }}>Self-Paced</strong>
                  <p style={{ fontSize: "0.82rem", margin: "4px 0 0" }}>No deadline, no pressure — go at the pace that works for your life</p>
                </div>
                <div style={{ padding: "16px", background: "var(--gold-faint)", borderRadius: "var(--radius)", border: "1px solid var(--gold-pale)" }}>
                  <strong style={{ color: "var(--navy)", fontSize: "0.88rem" }}>Works with the Book</strong>
                  <p style={{ fontSize: "0.82rem", margin: "4px 0 0" }}>Built to complement the book — use together for maximum impact</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/contact" className="btn btn-primary">Join the Waitlist</Link>
              </div>
            </div>
            <div style={{ aspectRatio: "1", background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", boxShadow: "var(--shadow-lg)" }}>
              🎓
            </div>
          </div>
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">No Cost, No Catch</span>
            <h2>Free resources to get you started.</h2>
            <span className="gold-rule"></span>
            <p style={{ maxWidth: "560px", margin: "0 auto" }}>
              Not ready for the book or course yet? Start here. These free tools are built
              on the same foundation — practical, actionable, and judgment-free.
            </p>
          </div>
          <div className="free-grid">
            <div className="free-card">
              <span className="free-card-icon" aria-hidden="true">📋</span>
              <h4>Monthly Budget Worksheet</h4>
              <p>The same worksheet Ralph uses with coaching clients. Give every dollar a job — starting this month.</p>
              <EmailCaptureForm
                className="email-capture-form"
                formStyle={{ display: "flex", flexDirection: "column", gap: "10px" }}
                formAriaLabel="Monthly budget worksheet signup"
                placeholder="Email for free download"
                inputStyle={freeCardInputStyle}
                buttonLabel="Get the Worksheet"
                buttonStyle={{ justifyContent: "center", padding: "10px 20px", fontSize: "0.82rem" }}
              />
            </div>
            <div className="free-card">
              <span className="free-card-icon" aria-hidden="true">🎙</span>
              <h4>Creator Revenue Audit</h4>
              <p>A free assessment of your creator business finances. Are your numbers actually working for you?</p>
              <a
                href="https://contentcreatorsaccountant.com/audit"
                className="btn btn-primary"
                style={{ justifyContent: "center", padding: "10px 20px", fontSize: "0.82rem", width: "100%" }}
                target="_blank"
                rel="noopener"
              >
                Take the Free Audit →
              </a>
            </div>
            <div className="free-card">
              <span className="free-card-icon" aria-hidden="true">📧</span>
              <h4>Weekly Financial Tips</h4>
              <p>Short, practical financial guidance delivered to your inbox every week. No fluff, just tools.</p>
              <EmailCaptureForm
                className="email-capture-form"
                formStyle={{ display: "flex", flexDirection: "column", gap: "10px" }}
                formAriaLabel="Weekly financial tips signup"
                placeholder="Email for weekly tips"
                inputStyle={freeCardInputStyle}
                buttonLabel="Subscribe Free"
                buttonStyle={{ justifyContent: "center", padding: "10px 20px", fontSize: "0.82rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-center">
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>Not Just Informed</span>
          <h2 style={{ color: "var(--white)" }}>Equipped.</h2>
          <span className="gold-rule"></span>
          <p style={{ marginTop: "24px" }}>
            Every book, course, and free resource exists to give you what most financial
            content leaves out: not just the information, but the confidence and tools to
            actually act on it.
          </p>
          <Link href="/coaching" className="btn btn-primary" style={{ marginTop: "28px" }}>
            Work With Ralph Directly →
          </Link>
        </div>
      </section>
    </>
  );
}
