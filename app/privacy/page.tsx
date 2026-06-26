import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Ralph Estep Jr.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container-narrow">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <span className="gold-rule"></span>
          <p>Last updated: June 2026</p>
        </div>
      </header>
      <section className="section">
        <div className="container-narrow">
          <div className="notice-banner">
            <strong>Note for Abby / team:</strong> This is a placeholder. Replace with a
            proper privacy policy before launch. Use a privacy policy generator (e.g.
            Termly, GetTerms) or have an attorney draft one. Required for email collection
            and Google Analytics.
          </div>
          <h2 className="mt-4">Information We Collect</h2>
          <p className="mt-2">
            When you sign up for email updates, purchase products, or submit a contact
            form, we collect your name and email address. We also collect standard
            analytics data (pages visited, time on site) via Google Analytics.
          </p>
          <h2 className="mt-4">How We Use Your Information</h2>
          <p className="mt-2">
            We use your information to send you content you&apos;ve requested, respond to
            inquiries, and improve the website. We do not sell or share your personal
            information with third parties for marketing purposes.
          </p>
          <h2 className="mt-4">Email Communications</h2>
          <p className="mt-2">
            If you opt in to email communications, you can unsubscribe at any time using
            the link at the bottom of any email.
          </p>
          <h2 className="mt-4">Cookies</h2>
          <p className="mt-2">
            This site uses cookies for analytics (Google Analytics). By using this site,
            you consent to the use of cookies in accordance with this policy.
          </p>
          <h2 className="mt-4">Contact</h2>
          <p className="mt-2">
            For privacy-related questions, contact{" "}
            <a href="mailto:ralph@askralph.com" style={{ color: "var(--h)" }}>ralph@askralph.com</a>.
          </p>
          <div className="mt-4">
            <Link href="/" className="btn btn-ghost">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
