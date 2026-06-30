import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import "./bfc-teaser.css";

export const metadata: Metadata = {
  title: "Becoming Financially Confident — Coming Soon",
  description:
    "Something new is coming from Ralph Estep Jr. Be the first to know when it drops, and get early clips along the way.",
};

export default function BfcTeaserPage() {
  return (
    <section className="bfc-teaser-hero" aria-labelledby="bfc-teaser-heading">
      <div className="bfc-teaser-overlay" aria-hidden="true" />
      <div className="bfc-teaser-content">
        <p className="bfc-teaser-eyebrow hero-in" style={{ animationDelay: "0.1s" }}>
          Something&apos;s Coming
        </p>
        <h1 id="bfc-teaser-heading" className="hero-in" style={{ animationDelay: "0.25s" }}>
          Becoming Financially <em>Confident.</em>
        </h1>
        <p className="bfc-teaser-sub hero-in" style={{ animationDelay: "0.38s" }}>
          A new show from Ralph Estep Jr. We&apos;re not ready to say more yet, but
          you can be the first to know when it drops. Sign up and we&apos;ll send
          you early clips, behind-the-scenes looks, and the announcement the
          moment it&apos;s live.
        </p>
        <div className="bfc-teaser-form-wrap hero-in" style={{ animationDelay: "0.5s" }}>
          <EmailCaptureForm
            placeholder="Your email address"
            buttonLabel="Notify Me"
            successLabel="You're on the list! ✓"
            endpoint="/api/bfc-teaser"
          />
        </div>
        <p className="bfc-teaser-disclaimer hero-in" style={{ animationDelay: "0.6s" }}>
          No spam. Just updates as we get closer.
        </p>
      </div>
    </section>
  );
}
