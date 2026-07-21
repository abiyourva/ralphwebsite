import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "what-is-an-lpa")!;

export const metadata = pageMetadata({
  title: "What Does \"LPA\" Mean? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/what-is-an-lpa",
});

const FAQS = [
  {
    question: "What does LPA stand for?",
    answer:
      "Licensed Public Accountant. It's a state-issued license to practice public accounting — tax preparation, bookkeeping, payroll, and financial advisory work — granted by a state board of accountancy, the same type of body that licenses CPAs.",
  },
  {
    question: "Is an LPA a real, legitimate accounting credential?",
    answer:
      "Yes. It's a state license, not an informal title — earned through education, experience, and examination requirements set by the licensing state, and subject to the same kind of ongoing continuing-education rules as other licensed accounting professionals.",
  },
  {
    question: "How does someone become an LPA?",
    answer:
      "Requirements are set state by state, but generally involve a combination of accounting education, supervised professional experience, and passing an exam administered or recognized by the state board of accountancy — then maintaining the license through periodic continuing education.",
  },
  {
    question: "Can an LPA prepare my taxes?",
    answer:
      "Yes. Preparing tax returns and providing tax planning is core public accounting work an LPA is licensed to do. Like any paid tax preparer — LPA, CPA, or otherwise — they're also required to hold an IRS Preparer Tax Identification Number (PTIN).",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/what-is-an-lpa",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "What Does \"LPA\" Mean?", path: "/articles/what-is-an-lpa" },
  ]),
  faqPageJsonLd(FAQS),
];

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WhatIsAnLpaArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <header className="page-hero">
        <div className="page-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <span className="gold-rule"></span>
          <p className="article-byline">
            By Ralph Estep Jr., LPA ·{" "}
            <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time> ·{" "}
            {article.readTime}
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container-narrow">
          <div className="article-hero-image">
            <Image
              src={article.image!}
              alt="An illustration of a single credential seal with a ribbon, representing the Licensed Public Accountant credential"
              width={1200}
              height={675}
              priority
            />
          </div>
          <div className="article-prose">
            <p>
              If you landed here searching just the three letters &mdash;
              &quot;LPA&quot; &mdash; you&apos;re not alone, and it&apos;s a fair thing to
              wonder about. It&apos;s a real, state-issued license, not a made-up
              title, and it&apos;s the credential I hold myself. Here&apos;s the plain
              explanation, no alphabet soup.
            </p>

            <h2>What LPA stands for</h2>
            <p>
              LPA stands for <em>Licensed Public Accountant</em>. It&apos;s a
              license granted by a state board of accountancy &mdash; the same
              kind of state body that licenses CPAs &mdash; authorizing someone
              to practice public accounting: preparing taxes, keeping books,
              running payroll, and advising individuals and businesses on
              their finances.
            </p>

            <h2>How someone becomes an LPA</h2>
            <p>
              Requirements are set state by state, but the general shape is
              consistent: a combination of accounting education, a period of
              supervised professional experience, and passing an examination
              recognized by the state board. Once licensed, an LPA keeps the
              license active through continuing education, the same way a
              CPA does. It&apos;s a maintained credential, not a one-time
              certificate.
            </p>

            <h2>Where the LPA license exists</h2>
            <p>
              Not every state issues this particular license &mdash; it exists
              in a smaller number of states, Delaware among them, where the
              state Board of Accountancy licenses both CPAs and Public
              Accountants side by side. Where it exists, it carries the same
              legal standing as any other state accounting license: it&apos;s
              regulated, renewable, and revocable for cause, just like a CPA
              license.
            </p>

            <h2>What an LPA is licensed to do</h2>
            <ul role="list">
              <li>Prepare and plan individual and business tax returns</li>
              <li>Keep books and prepare financial statements for internal use</li>
              <li>Run payroll and handle day-to-day business accounting</li>
              <li>Advise on budgeting, debt payoff, and financial planning</li>
            </ul>
            <p>
              The one category of work reserved specifically for CPAs is
              formal <em>attestation</em> &mdash; auditing or reviewing
              financial statements and signing an opinion on them, typically
              required when a bank, investor, or regulator needs that kind of
              assurance. Most individuals and small businesses never need
              that particular service.
            </p>

            <h2>Why I hold this credential</h2>
            <p>
              I&apos;m licensed as an LPA here in Delaware, where the state
              Board of Accountancy licenses both credentials under the same
              regulatory roof. For the tax preparation, bookkeeping, payroll,
              and advisory work I do every day with clients, it&apos;s the exact
              same standing as a CPA license. If you want the fuller
              side-by-side comparison &mdash; what each credential can do,
              where they actually differ, and what matters more than the
              letters when you&apos;re choosing someone &mdash; I&apos;ve written
              that out in{" "}
              <Link href="/articles/lpa-vs-cpa" style={{ color: "var(--h)" }}>
                LPA vs. CPA: What&apos;s the Difference?
              </Link>
            </p>

            <h2>How to verify any accountant's license</h2>
            <p>
              Whatever letters someone has after their name, you can and
              should check them. Every state maintains a public license
              lookup through its board of accountancy &mdash; in Delaware,
              that&apos;s the Delaware Board of Accountancy. A legitimate
              professional will never be bothered that you looked.
            </p>

            <h2>Common questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Still have questions about credentials?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                Bring them to a free discovery call &mdash; licensing,
                pricing, or just figuring out what you actually need. No
                pressure, no judgment.
              </p>
              <Link href="/schedule/discovery" className="btn btn-navy">
                Book a Free Discovery Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
