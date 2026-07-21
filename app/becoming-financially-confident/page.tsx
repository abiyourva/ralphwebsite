import Link from "next/link";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import LaunchCountdown from "@/components/LaunchCountdown";
import { pageMetadata } from "@/lib/seo";
import "./bfc-teaser.css";

export const metadata = pageMetadata({
  title: "Becoming Financially Confident — Coming Soon",
  description:
    "Something new is coming from Ralph Estep Jr. Be the first to know when it drops, and get early clips along the way.",
  path: "/becoming-financially-confident",
});

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
        <div className="hero-in" style={{ animationDelay: "0.45s" }}>
          <LaunchCountdown label="The wait ends in" />
        </div>
        <div className="bfc-teaser-form-wrap hero-in" style={{ animationDelay: "0.5s" }}>
          <EmailCaptureForm
            placeholder="Your email address"
            buttonLabel="Notify Me"
            successLabel="You're on the list! ✓"
            endpoint="/api/bfc-teaser"
            location="Becoming Financially Confident"
          />
        </div>
        <p className="bfc-teaser-disclaimer hero-in" style={{ animationDelay: "0.6s" }}>
          No spam. Just updates as we get closer.
        </p>
        <div className="bfc-teaser-cohost hero-in" style={{ animationDelay: "0.66s" }}>
          <p>
            In the meantime, subscribe to our YouTube channel — we&rsquo;re slowly
            building the audience, and we want you to be one of the first to know.
          </p>
          <a
            href="https://www.youtube.com/@BecomingFinanciallyConfident"
            target="_blank"
            rel="noopener"
            className="bfc-teaser-cohost-link"
          >
            Subscribe on YouTube →
          </a>
        </div>
        <div className="bfc-teaser-cohost hero-in" style={{ animationDelay: "0.72s" }}>
          <p>Want to be part of the show, not just watch it?</p>
          <Link href="/cohost" className="bfc-teaser-cohost-link">
            We&rsquo;re looking for a co-host — apply here →
          </Link>
        </div>
        <div className="bfc-teaser-cohost hero-in" style={{ animationDelay: "0.78s" }}>
          <p>Want to connect with others on the journey right now?</p>
          <a
            href="https://discord.gg/PMbeszYkxf"
            target="_blank"
            rel="noopener"
            className="bfc-teaser-cohost-link"
          >
            Join the BFC Community on Discord →
          </a>
        </div>
      </div>
    </section>
  );
}
