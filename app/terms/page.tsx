import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Ralph Estep Jr.",
};

export default function TermsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container-narrow">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Use</h1>
          <span className="gold-rule"></span>
          <p>Last updated: June 2026</p>
        </div>
      </header>
      <section className="section">
        <div className="container-narrow">
          <div className="notice-banner">
            <strong>Note for Abby / team:</strong> This is a placeholder. Replace with
            proper terms of use before launch. Consult an attorney or use a generator like
            Termly.
          </div>
          <h2 className="mt-4">Use of This Website</h2>
          <p className="mt-2">
            By accessing ralphestepjr.com, you agree to use this site for lawful purposes
            only. Content on this site is provided for informational purposes and does not
            constitute financial, legal, or tax advice.
          </p>
          <h2 className="mt-4">Not Financial Advice</h2>
          <p className="mt-2">
            Ralph Estep Jr. is a Licensed Public Accountant (LPA). Content on this site,
            including podcasts, articles, and other media, is for educational and
            informational purposes only. Always consult a qualified professional regarding
            your specific financial situation.
          </p>
          <h2 className="mt-4">Intellectual Property</h2>
          <p className="mt-2">
            All content on this site — text, graphics, logos, and audio/video — is the
            property of Ralph Estep Jr. and Saggio Management Group. Unauthorized
            reproduction is prohibited.
          </p>
          <h2 className="mt-4">Contact</h2>
          <p className="mt-2">
            Questions about these terms? Email{" "}
            <a href="mailto:ralph@askralph.com" style={{ color: "var(--navy)" }}>ralph@askralph.com</a>.
          </p>
          <div className="mt-4">
            <Link href="/" className="btn btn-outline-navy">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
