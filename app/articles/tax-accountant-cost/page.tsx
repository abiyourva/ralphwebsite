import Link from "next/link";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "tax-accountant-cost")!;

export const metadata = pageMetadata({
  title: "How Much Does a Tax Accountant Cost? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/tax-accountant-cost",
});

const FAQS = [
  {
    question: "How much does a simple tax return cost?",
    answer:
      "For a single W-2, standard deduction, no side income, expect the low end of the range — often a few hundred dollars or less. That's the return with the fewest forms and the least judgment involved, so it's priced accordingly.",
  },
  {
    question: "Why does self-employment income cost more to file?",
    answer:
      "A Schedule C return means calculating business income and expenses, tracking self-employment tax, and often reviewing quarterly estimated payments — real additional work beyond a W-2 return, which is why the price steps up here more than anywhere else on the ladder.",
  },
  {
    question: "Is tax software cheaper than hiring someone?",
    answer:
      "Upfront, yes, almost always. But software can't catch a deduction you didn't know to look for, and it won't represent you if the IRS sends a letter. The breakeven point is usually the moment your return has more than one income source or you're not sure you're doing it right.",
  },
  {
    question: "Does filing in more than one state increase the cost?",
    answer:
      "Yes. Each additional state return is its own filing with its own rules, and reconciling income across states takes real time. If you moved, worked remotely for an out-of-state employer, or have rental property elsewhere, expect an added fee per state.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/tax-accountant-cost",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "How Much Does a Tax Accountant Cost?", path: "/articles/tax-accountant-cost" },
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

export default function TaxAccountantCostArticle() {
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
          <div className="article-prose">
            <p>
              &quot;How much does a tax accountant cost?&quot; is one of the most common
              searches I see — and one of the hardest to answer with a single
              number, because the honest answer is: it depends on what kind of
              return you&apos;re filing. A tax return isn&apos;t one product, it&apos;s a ladder
              of complexity, and the price climbs one rung at a time. Here&apos;s
              that ladder, laid out plainly.
            </p>

            <h2>The pricing ladder, by return type</h2>
            <ul role="list">
              <li>
                <em>Simple W-2 return.</em> One job, standard deduction, no
                side income. This is the cheapest tier — often a few hundred
                dollars or less. There&apos;s little to reconcile and few
                judgment calls to make.
              </li>
              <li>
                <em>Self-employed / Schedule C.</em> Freelancers, contractors,
                and small side businesses. This is where the price jumps the
                most — you&apos;re now calculating business income, deductible
                expenses, and self-employment tax, not just reporting a W-2.
              </li>
              <li>
                <em>Rental or investment income.</em> Schedule E rental
                property, stock sales, or K-1s from a partnership each add
                their own forms and their own reconciliation work.
              </li>
              <li>
                <em>Multiple states.</em> Moved mid-year, worked remotely for
                an out-of-state employer, or own property elsewhere — each
                additional state is its own return, priced separately.
              </li>
              <li>
                <em>Business entity return.</em> An S-corp, partnership, or
                C-corp return sits at the top of the ladder — payroll,
                depreciation schedules, and entity-level tax rules all add
                real hours.
              </li>
            </ul>

            <h2>Why tax prep pricing works this way</h2>
            <p>
              You&apos;re not paying for a form getting typed in — you&apos;re paying
              for someone to know which forms apply to you, catch what a
              generic tool would miss, and stand behind the return if
              questions come up later. The price tracks the actual work, and
              the actual work tracks the complexity of your financial life,
              not the other way around.
            </p>

            <h2>Tax software vs. a professional — where the breakeven sits</h2>
            <p>
              Software is genuinely the right call for a straightforward W-2
              return — you likely don&apos;t need to pay someone for that. The
              math changes the moment you add a second income source, a
              side business, a life event (marriage, a home sale, a new
              baby), or simply a feeling that you&apos;re not sure you&apos;re doing
              it right. A missed deduction or a mishandled Schedule C often
              costs more than the fee would have. (For the fuller picture on
              what drives accountant pricing beyond tax returns — bookkeeping,
              payroll, ongoing advice — see{" "}
              <Link href="/articles/how-much-does-an-accountant-cost" style={{ color: "var(--h)" }}>
                How Much Does an Accountant Cost?
              </Link>
              )
            </p>

            <h2>How to keep your tax prep bill reasonable</h2>
            <ul role="list">
              <li>File early — the first weeks of tax season, not the last</li>
              <li>Bring organized documents; don&apos;t hand over a shoebox</li>
              <li>Tell your preparer about life changes before they ask</li>
              <li>Ask for a written estimate once they know your situation</li>
            </ul>

            <h2>Common questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Want a real number for your return?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                Tell me what your year looked like on a free discovery call,
                and you&apos;ll leave knowing exactly where your return sits on
                the ladder — and what it should cost to file it right.
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
