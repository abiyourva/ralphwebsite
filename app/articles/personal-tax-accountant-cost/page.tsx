import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "personal-tax-accountant-cost")!;

export const metadata = pageMetadata({
  title: "How Much Does a Personal Tax Accountant Cost? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/personal-tax-accountant-cost",
});

const FAQS = [
  {
    question: "Is a \"tax agent\" the same as a personal tax accountant?",
    answer:
      "Yes — different regions just use different words for the same work. In the U.S., the person preparing your personal return is usually called a tax accountant or tax preparer; \"tax agent\" is more common elsewhere. Whatever the term, confirm they hold a PTIN — the IRS Preparer Tax Identification Number every paid preparer must have.",
  },
  {
    question: "How much does a personal tax accountant cost for a simple return?",
    answer:
      "For one W-2, the standard deduction, and no dependents or side income, expect the lowest end of the range — often a few hundred dollars or less. That's the least amount of personal financial life to account for, so it's priced accordingly.",
  },
  {
    question: "Do kids or a mortgage change what I'll pay?",
    answer:
      "Usually a little, not a lot. Dependents and common credits (child tax credit, education credits) and a mortgage interest deduction are routine additions most personal-return preparers handle as part of a standard engagement — they add a form or two, not a new tier of complexity.",
  },
  {
    question: "Is it worth paying someone if I don't own a business?",
    answer:
      "Often, yes, once your personal return has more than one moving part — retirement income alongside Social Security, a home sale, a new marriage or divorce, kids starting college. None of that requires owning a business to get complicated, and a missed credit or mishandled distribution can cost more than the fee would have.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/personal-tax-accountant-cost",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "How Much Does a Personal Tax Accountant Cost?", path: "/articles/personal-tax-accountant-cost" },
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

export default function PersonalTaxAccountantCostArticle() {
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
              alt="An illustration of a personal tax form connected to icons for a house, family, and retirement income, representing how your life situation drives the cost of personal tax prep"
              width={1200}
              height={675}
              priority
            />
          </div>
          <div className="article-prose">
            <p>
              &quot;Personal tax accountant&quot; usually means one thing: you don&apos;t
              own a business, you just want your own return done right. Good
              news — pricing here is more predictable than the business side of
              this work. It&apos;s driven by your life, not a ledger. Here&apos;s what
              actually moves the number.
            </p>

            <h2>The starting point: a simple personal return</h2>
            <p>
              One job, one W-2, the standard deduction, no dependents — this
              is the floor of personal tax prep pricing, often a few hundred
              dollars or less. There&apos;s little to reconcile and few judgment
              calls, so the fee reflects that. Most people&apos;s returns aren&apos;t
              quite this simple, though, and that&apos;s where the real question
              starts.
            </p>

            <h2>What actually raises the price for personal returns</h2>
            <ul role="list">
              <li>
                <em>Dependents and credits.</em> Kids, the child tax credit,
                education credits — routine additions for most preparers, a
                form or two more, not a new tier.
              </li>
              <li>
                <em>Itemizing instead of the standard deduction.</em> A
                mortgage, large charitable giving, or high medical expenses
                means more documentation to review and reconcile.
              </li>
              <li>
                <em>Retirement income.</em> Social Security, a pension, and
                IRA or 401(k) distributions each report differently and often
                interact with how much of your Social Security is taxable.
              </li>
              <li>
                <em>Investment income.</em> Stock sales, dividends, and
                capital gains add their own forms and their own math.
              </li>
              <li>
                <em>Life events.</em> Marriage, divorce, a home sale, or a
                new baby all change your return for that year, sometimes
                significantly.
              </li>
            </ul>
            <p>
              Notice what&apos;s not on this list: owning a business. That&apos;s a
              genuinely different pricing conversation — if that&apos;s your
              situation, I&apos;ve broken down how return complexity drives cost
              across the full range, business included, in{" "}
              <Link href="/articles/tax-accountant-cost" style={{ color: "var(--h)" }}>
                How Much Does a Tax Accountant Cost?
              </Link>
            </p>

            <h2>&quot;Tax agent&quot; vs. &quot;tax accountant&quot; — same job, different word</h2>
            <p>
              If you searched for a &quot;tax agent&quot; and landed here, you&apos;re in
              the right place. It&apos;s the same work under a different regional
              name. What matters isn&apos;t the title — it&apos;s whether they hold a
              PTIN (the IRS Preparer Tax Identification Number every paid
              preparer must have) and a license you can actually verify with
              your state&apos;s board of accountancy.
            </p>

            <h2>Is it worth paying someone for a personal return?</h2>
            <p>
              Once your return has more than one moving part — retirement
              income alongside Social Security, a home sale, kids starting
              college — the math usually favors a professional. A missed
              credit, a mishandled distribution, or a wrong assumption about
              what&apos;s taxable can cost more than the fee would have. For the
              broader picture on pricing models and what drives cost across
              all kinds of accounting work, see{" "}
              <Link href="/articles/how-much-does-an-accountant-cost" style={{ color: "var(--h)" }}>
                How Much Does an Accountant Cost?
              </Link>
            </p>

            <h2>Common questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Want a real number for your own return?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                Bring your situation to a free discovery call — dependents,
                retirement income, a home sale, whatever it is — and leave
                knowing exactly what it should cost to get done right.
              </p>
              <Link href="/schedule/discovery" className="btn btn-navy">
                Book a Free Discovery Call →
              </Link>
              <p style={{ fontSize: "13px", marginTop: "14px" }}>
                Already know you&apos;re ready?{" "}
                <Link href="/schedule/tax" style={{ color: "var(--gold)", textDecoration: "underline" }}>
                  Book your tax appointment directly →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
