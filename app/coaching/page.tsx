import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import "./coaching.css";

export const metadata: Metadata = {
  title: "Coaching with Ralph Estep Jr. — Build Real Financial Confidence",
  description:
    "Work directly with Ralph Estep Jr., LPA, to build real financial clarity and confidence. One-on-one coaching for individuals and content creators ready to make real change.",
};

export default function CoachingPage() {
  return (
    <>
      <header className="page-hero" aria-labelledby="coaching-heading">
        <div className="container-narrow">
          <span className="eyebrow">Work With Ralph Directly</span>
          <h1 id="coaching-heading">Coaching that builds real confidence — not just a better budget.</h1>
          <span className="gold-rule"></span>
          <p>
            You don&apos;t need more information. You need someone to sit with you, look at
            your actual situation, and help you build a plan you&apos;ll actually follow
            through on.
          </p>
        </div>
      </header>

      <section className="section-lg">
        <div className="container">
          <div className="coaching-grid">
            <div>
              {/* WHO IT'S FOR */}
              <span className="eyebrow">Is This Right for You?</span>
              <h2>Who coaching is for.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-3">
                Ralph works with two types of clients — people who are ready to stop
                feeling anxious or overwhelmed about money, and content creators who need
                someone who understands the financial reality of what they&apos;ve built.
              </p>

              <div className="who-grid mt-4">
                <div className="who-card">
                  <h4>💰 Individuals &amp; Families</h4>
                  <p>
                    You&apos;re tired of feeling like money controls you. You want clarity, a
                    real plan, and the confidence to know you&apos;re making good decisions —
                    without shame or judgment.
                  </p>
                </div>
                <div className="who-card">
                  <h4>🎙 Content Creators</h4>
                  <p>
                    You&apos;ve built an audience and started generating income. Now you need to
                    understand the financial side of your business — taxes, structure, and
                    whether your &quot;audience economics&quot; are actually working for you.
                  </p>
                </div>
              </div>

              {/* THE PROCESS */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>How It Works</span>
              <h2>The coaching process.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <p className="mt-2">
                Every engagement starts with understanding where you actually are — not
                where you think you should be.
              </p>

              <div className="process-steps">
                <div className="process-step">
                  <div className="step-num" aria-hidden="true">1</div>
                  <div className="step-content">
                    <h4>Discovery call — no cost, no pressure</h4>
                    <p>
                      We start with a conversation. Ralph listens to where you are, what&apos;s
                      not working, and what you actually want. This isn&apos;t a sales call —
                      it&apos;s a real conversation to see if working together makes sense.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-num" aria-hidden="true">2</div>
                  <div className="step-content">
                    <h4>Honest assessment</h4>
                    <p>
                      We look at your real numbers — income, spending, debts, goals —
                      without any of the shame that usually comes with this conversation.
                      Just facts and a clear picture of where things stand.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-num" aria-hidden="true">3</div>
                  <div className="step-content">
                    <h4>A real plan — built for your actual life</h4>
                    <p>
                      Not a generic budget template. A plan that fits your income, your
                      family, your goals, and your timeline. Something you can actually live
                      with and follow through on.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-num" aria-hidden="true">4</div>
                  <div className="step-content">
                    <h4>Accountability and adjustments</h4>
                    <p>
                      We check in regularly. Life changes, and so does the plan. Ralph stays
                      with you through the process — not just at the starting line.
                    </p>
                  </div>
                </div>
              </div>

              {/* WHAT YOU WALK AWAY WITH */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>
                What You Walk Away With
              </span>
              <h2>The outcomes, not just the sessions.</h2>
              <span className="gold-rule gold-rule-left"></span>
              <ul className="check-list mt-4">
                <li>A clear picture of your financial situation — no more guessing or avoiding</li>
                <li>A written plan built around your actual numbers and real goals</li>
                <li>Practical tools and systems you can run on your own going forward</li>
                <li>The confidence that comes from actually understanding your money</li>
                <li>A coach in your corner — someone who has seen this situation before and knows the way through</li>
              </ul>

              {/* TESTIMONIALS */}
              <span className="eyebrow mt-5" style={{ display: "block", marginTop: "48px" }}>What Clients Say</span>
              <div className="grid-2 mt-4" style={{ gap: "20px" }}>
                <div className="testimonial-card">
                  <p>
                    &quot;[Add a real client testimonial here — name, outcome, and what changed
                    for them. Real stories are the most powerful copy on this page.]&quot;
                  </p>
                  <span className="testimonial-author">— [Client Name], [City, State]</span>
                </div>
                <div className="testimonial-card">
                  <p>
                    &quot;[Add a second client testimonial here. Aim for 2–4 sentences that
                    describe the situation before coaching, the process, and the result.]&quot;
                  </p>
                  <span className="testimonial-author">— [Client Name], [Occupation]</span>
                </div>
              </div>
            </div>

            {/* SIDEBAR FORM */}
            <div className="coaching-sidebar">
              <div className="inquiry-card">
                <h3 style={{ color: "var(--navy)", marginBottom: "8px" }}>Start with a conversation.</h3>
                <p style={{ fontSize: "0.88rem", marginBottom: "24px" }}>
                  Fill out the form below and Ralph will be in touch within 2 business days
                  to schedule your free discovery call.
                </p>
                <ContactForm
                  ariaLabel="Coaching inquiry form"
                  submitLabel="Request Discovery Call"
                  submitStyle={{ width: "100%", justifyContent: "center" }}
                  footer={
                    <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: "12px", textAlign: "center" }}>
                      No obligation. No pressure. Just a real conversation.
                    </p>
                  }
                >
                  <div className="form-group">
                    <label htmlFor="coach-name">Your name</label>
                    <input type="text" id="coach-name" name="name" placeholder="First and last name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="coach-email">Email address</label>
                    <input type="email" id="coach-email" name="email" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="coach-type">I&apos;m a...</label>
                    <select id="coach-type" name="type">
                      <option value="">Select one</option>
                      <option>Individual / family</option>
                      <option>Content creator / podcaster</option>
                      <option>Small business owner</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="coach-message">What&apos;s going on? (optional)</label>
                    <textarea
                      id="coach-message"
                      name="message"
                      placeholder="Give Ralph a quick sense of your situation — what's not working, what you want to change, where you're feeling stuck."
                    ></textarea>
                  </div>
                </ContactForm>
              </div>
              <div className="mt-3" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.82rem", color: "var(--text-light)" }}>Prefer to reach out directly?</p>
                <a href="mailto:ralph@askralph.com" style={{ fontSize: "0.88rem", color: "var(--navy)", fontWeight: 600 }}>
                  ralph@askralph.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-center">
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>The Bottom Line</span>
          <h2 style={{ color: "var(--white)" }}>You don&apos;t have to figure this out alone.</h2>
          <span className="gold-rule"></span>
          <p style={{ marginTop: "24px" }}>
            Thirty years of sitting across from people in your exact situation. The tools
            are real, the plan will be yours, and the outcome is absolutely achievable.
            Let&apos;s talk.
          </p>
          <a href="#coach-name" className="btn btn-primary mt-4" style={{ marginTop: "32px" }}>
            Schedule Your Free Discovery Call
          </a>
        </div>
      </section>
    </>
  );
}
