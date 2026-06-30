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
          <p className="mt-2">
            These Terms of Use govern your access to and use of ralphestepjr.com
            (&quot;this site&quot;). By using this site, you agree to these terms. If you don&apos;t
            agree, please don&apos;t use the site.
          </p>

          <h2 className="mt-4">Use of This Website</h2>
          <p className="mt-2">
            You may use this site for lawful, personal, non-commercial purposes. You agree
            not to misuse the site — including attempting to disrupt it, scrape it at
            scale, or submit false information through our forms.
          </p>

          <h2 className="mt-4">Not Financial, Legal, or Tax Advice</h2>
          <p className="mt-2">
            Ralph Estep Jr. is a Licensed Public Accountant (LPA). Content on this site —
            including podcasts, articles, the Money Archetype quiz, emails, and other
            media — is provided for educational and informational purposes only and does
            not constitute personalized financial, legal, tax, or investment advice. Your
            individual situation is unique; always consult a qualified professional before
            making financial decisions. Engaging with this site or its content does not
            create a client relationship. Accounting services are provided separately
            through Saggio Management Group under their own engagement terms.
          </p>

          <h2 className="mt-4">Accounts &amp; Submissions</h2>
          <p className="mt-2">
            When you submit information through a form on this site (email sign-up,
            contact, coaching, speaking, or the quiz), you confirm that the information
            you provide is accurate and that you have the right to provide it. See our{" "}
            <Link href="/privacy" style={{ color: "var(--h)" }}>Privacy Policy</Link> for
            how that information is used.
          </p>

          <h2 className="mt-4">Intellectual Property</h2>
          <p className="mt-2">
            All content on this site — text, graphics, logos, podcast names, and
            audio/video — is the property of Ralph Estep Jr. and Saggio Management Group,
            or used with permission, and is protected by copyright and trademark law.
            You may share links to this content, but you may not reproduce, republish, or
            create derivative works from it without our written permission.
          </p>

          <h2 className="mt-4">Third-Party Links</h2>
          <p className="mt-2">
            This site links to third-party platforms (YouTube, podcast platforms, social
            media, Saggio Management Group&apos;s site, and others). We don&apos;t control those
            sites and aren&apos;t responsible for their content, policies, or practices.
          </p>

          <h2 className="mt-4">Disclaimer &amp; Limitation of Liability</h2>
          <p className="mt-2">
            This site and its content are provided &quot;as is,&quot; without warranties of any
            kind, express or implied. To the fullest extent permitted by law, Ralph Estep
            Jr. and Saggio Management Group are not liable for any damages arising from
            your use of this site or reliance on its content.
          </p>

          <h2 className="mt-4">Changes to These Terms</h2>
          <p className="mt-2">
            We may update these terms from time to time. The &quot;Last updated&quot; date at the
            top of this page reflects the most recent changes. Continued use of the site
            after changes means you accept the updated terms.
          </p>

          <h2 className="mt-4">Contact</h2>
          <p className="mt-2">
            Questions about these terms? Email{" "}
            <a href="mailto:ralph@ralphestepjr.com" style={{ color: "var(--h)" }}>ralph@ralphestepjr.com</a>.
          </p>
          <div className="mt-4">
            <Link href="/" className="btn btn-ghost">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
