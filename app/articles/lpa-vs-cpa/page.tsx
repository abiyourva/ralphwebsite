import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "lpa-vs-cpa")!;

export const metadata = pageMetadata({
  title: "LPA vs. CPA: What's the Difference? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/lpa-vs-cpa",
});

const FAQS = [
  {
    question: "Can an LPA prepare my taxes?",
    answer:
      "Yes. A Licensed Public Accountant is state-licensed to practice public accounting, including tax preparation and planning. Anyone who prepares federal tax returns for compensation — LPA, CPA, or otherwise — must also hold an IRS Preparer Tax Identification Number (PTIN).",
  },
  {
    question: "Is an LPA less qualified than a CPA?",
    answer:
      "No — it's a different license, not a lesser one, for most everyday needs. Both are state-licensed accounting professionals. The main legal difference is that audited and reviewed financial statements (attestation work) are reserved for CPAs. Most individuals and small businesses never need those services.",
  },
  {
    question: "When do I specifically need a CPA?",
    answer:
      "When you need audited or reviewed financial statements — typically because a lender, investor, bonding company, or regulator requires them. For tax preparation, bookkeeping, payroll, and financial guidance, both LPAs and CPAs can serve you.",
  },
  {
    question: "How do I verify an accountant's license?",
    answer:
      "Check with your state's board of accountancy — in Delaware, that's the Delaware Board of Accountancy, which licenses both CPAs and Public Accountants. A legitimate professional will never be bothered that you checked.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/lpa-vs-cpa",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "LPA vs. CPA", path: "/articles/lpa-vs-cpa" },
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

export default function LpaVsCpaArticle() {
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
              alt="An illustration of two side-by-side credential badges, one labeled LPA and one labeled CPA, connected by an equals mark"
              width={1200}
              height={675}
              priority
            />
          </div>
          <div className="article-prose">
            <p>
              I get this question all the time, and I love that people ask it. It means
              you&apos;re doing your homework before trusting someone with your money — and
              that&apos;s exactly the instinct I want you to have. So let&apos;s clear it up,
              plainly and without the alphabet soup.
            </p>

            <h2>What a CPA is</h2>
            <p>
              A CPA — Certified Public Accountant — is someone who passed the Uniform CPA
              Exam and holds a license from their state&apos;s board of accountancy. CPAs can
              do the full range of public accounting work, and one category of work is
              legally reserved for them: <em>attestation</em> — auditing and formally
              reviewing financial statements and signing an opinion on them.
            </p>

            <h2>What an LPA is</h2>
            <p>
              An LPA — Licensed Public Accountant — is also licensed by a state board of
              accountancy to practice public accounting. It&apos;s the credential I hold, here
              in Delaware, where the Board of Accountancy licenses both CPAs and Public
              Accountants. An LPA can prepare your taxes, keep your books, run your
              payroll, help you plan, and advise your business — the work most people
              actually need, year in and year out.
            </p>

            <h2>What both can do for you</h2>
            <ul role="list">
              <li>Tax preparation and tax planning — personal and business</li>
              <li>Bookkeeping and financial statements for your own management use</li>
              <li>Payroll, QuickBooks, and day-to-day business support</li>
              <li>Financial guidance — budgeting, debt payoff, and planning ahead</li>
            </ul>

            <h2>Where they actually differ</h2>
            <p>
              The real, legal difference comes down to one thing: <em>audited and
              reviewed financial statements</em>. If a bank, investor, or regulator
              requires an audit or a formal review with an accountant&apos;s opinion attached,
              that engagement needs a CPA. Here&apos;s the honest truth, though — most
              individuals and most small businesses will never need that service. If you
              ever do, a good LPA will tell you so and point you to the right person.
              That&apos;s what integrity in this profession looks like.
            </p>

            <h2>What matters more than the letters</h2>
            <p>
              After 30+ years in practice, I&apos;ll tell you what I&apos;d look for if I were
              hiring an accountant for my own family:
            </p>
            <ul role="list">
              <li>
                <em>Experience with people like you.</em> A creator, a family, and a
                contractor all have different financial lives. Ask who they serve most.
              </li>
              <li>
                <em>Whether they explain things without judgment.</em> If you leave a
                meeting feeling ashamed or confused, that&apos;s the wrong fit — no matter
                what&apos;s on their license.
              </li>
              <li>
                <em>Responsiveness.</em> Tax problems get more expensive when they sit.
                You want someone who answers.
              </li>
              <li>
                <em>A verifiable license.</em> Look them up with your state&apos;s board of
                accountancy. Anyone legitimate will welcome it.
              </li>
              <li>
                <em>A PTIN.</em> Anyone paid to prepare federal tax returns must have an
                IRS Preparer Tax Identification Number. No PTIN, no engagement.
              </li>
            </ul>

            <h2>Common questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <p>
              Wondering what hiring one actually costs? I&apos;ve broken that down too, in{" "}
              <Link href="/articles/how-much-does-an-accountant-cost" style={{ color: "var(--h)" }}>
                How Much Does an Accountant Cost?
              </Link>
            </p>

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Still not sure what you need?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                That&apos;s what a discovery call is for. Bring your questions — taxes, books,
                or just &quot;where do I even start?&quot; — and we&apos;ll figure out the right next
                step together. No pressure, no judgment.
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
