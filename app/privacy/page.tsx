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
          <p className="mt-2">
            This Privacy Policy explains what information ralphestepjr.com (&quot;this
            site,&quot; &quot;we,&quot; &quot;us&quot;) collects, how it&apos;s used, and the choices you have.
            This site is operated by Ralph Estep Jr. / Saggio Management Group.
          </p>

          <h2 className="mt-4">Information We Collect</h2>
          <p className="mt-2">
            We collect information you provide directly to us:
          </p>
          <ul className="mt-2" style={{ paddingLeft: "20px", lineHeight: 1.8 }}>
            <li>
              <strong>Email sign-ups:</strong> when you join our email list (homepage,
              resources page, or a launch-notification page), we collect your email
              address and, where asked, your first name.
            </li>
            <li>
              <strong>Contact, coaching, and speaking inquiries:</strong> when you submit
              one of these forms, we collect your name, email address, and the message,
              subject, or organization details you include, so we can respond to your
              inquiry.
            </li>
            <li>
              <strong>Money Archetype quiz:</strong> when you take the quiz, we collect
              your first name, email address, and your quiz result, so we can send you
              the related email sequence.
            </li>
          </ul>
          <p className="mt-2">
            We do not collect financial account numbers, payment information, Social
            Security numbers, or other sensitive personal data through this website.
          </p>

          <h2 className="mt-4">How We Use Your Information</h2>
          <p className="mt-2">
            We use the information you provide to send the content or response you
            requested (email updates, quiz results, replies to inquiries), to route
            inquiries to the right team (for example, accounting inquiries to Saggio
            Management Group), and to understand which content is useful so we can
            improve the site. We do not sell your personal information, and we do not
            share it with third parties for their own marketing purposes.
          </p>

          <h2 className="mt-4">Email Communications &amp; Your Choices</h2>
          <p className="mt-2">
            We use Kit (formerly ConvertKit) to manage our email list and send
            communications. Every email we send includes an unsubscribe link, and you can
            opt out at any time. You can also email{" "}
            <a href="mailto:ralph@ralphestepjr.com" style={{ color: "var(--h)" }}>ralph@ralphestepjr.com</a>{" "}
            to ask us to update or delete the information we hold about you.
          </p>

          <h2 className="mt-4">Analytics</h2>
          <p className="mt-2">
            We use Vercel Web Analytics to understand aggregate site usage, such as which
            pages are visited and how people arrive at the site. This analytics tool is
            cookieless and does not use any persistent identifier to track you across
            websites or visits — it only reports anonymized, aggregated traffic data. We
            do not use Google Analytics, Meta/Facebook Pixel, or other third-party
            advertising trackers on this site.
          </p>

          <h2 className="mt-4">Local Storage</h2>
          <p className="mt-2">
            This site uses your browser&apos;s local storage (not third-party tracking
            cookies) to remember two things: whether you&apos;ve dismissed the cookie
            notice, and whether you prefer light or dark mode. This information stays on
            your device and is not sent to us.
          </p>

          <h2 className="mt-4">Third-Party Links</h2>
          <p className="mt-2">
            This site links out to third-party platforms — including YouTube, Apple
            Podcasts, Spotify, and Saggio Management Group&apos;s own website — for shows,
            appearances, and accounting services. Those platforms have their own privacy
            policies, and we encourage you to review them; we&apos;re not responsible for
            their practices.
          </p>

          <h2 className="mt-4">Children&apos;s Privacy</h2>
          <p className="mt-2">
            This site is not directed at children under 13, and we do not knowingly
            collect personal information from children under 13.
          </p>

          <h2 className="mt-4">Your Rights</h2>
          <p className="mt-2">
            Depending on where you live, you may have the right to access, correct, or
            delete the personal information we hold about you, or to object to certain
            uses of it. To exercise any of these rights, email{" "}
            <a href="mailto:ralph@ralphestepjr.com" style={{ color: "var(--h)" }}>ralph@ralphestepjr.com</a>{" "}
            and we&apos;ll respond as quickly as we can.
          </p>

          <h2 className="mt-4">Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. The &quot;Last updated&quot; date at
            the top of this page reflects the most recent changes.
          </p>

          <h2 className="mt-4">Contact</h2>
          <p className="mt-2">
            For privacy-related questions, contact{" "}
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
