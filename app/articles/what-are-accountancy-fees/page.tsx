import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "what-are-accountancy-fees")!;

export const metadata = pageMetadata({
  title: "What's Actually in Your Accounting Fee? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/what-are-accountancy-fees",
});

const FAQS = [
  {
    question: "What's usually included in a standard accounting fee?",
    answer:
      "For a tax return, that's typically the return itself as originally scoped — the forms and schedules your situation calls for based on what you disclosed up front. For an ongoing engagement, it's the services spelled out in your engagement letter: a defined scope of bookkeeping, payroll, or advisory work.",
  },
  {
    question: "What commonly gets billed as an extra?",
    answer:
      "Amended returns, responding to an IRS or state notice, cleaning up disorganized books, rush requests near a deadline, and any form or schedule that wasn't part of the original scope — because a stock portfolio, a new rental, or a side business showed up after the engagement was already priced.",
  },
  {
    question: "What is an engagement letter, and why does it matter?",
    answer:
      "It's a written agreement spelling out exactly what's included in the fee, what isn't, and how additional work gets billed. It protects you as much as it protects your accountant — read it before you sign, and ask about anything that isn't spelled out plainly.",
  },
  {
    question: "What should I ask before agreeing to a fee?",
    answer:
      "Ask what happens if your situation turns out to be more complex than you described, whether amended returns or notice responses are covered, how rush work is billed, and whether the price is fixed or an estimate. A good accountant answers all of this before you sign anything.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/what-are-accountancy-fees",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "What's Actually in Your Accounting Fee?", path: "/articles/what-are-accountancy-fees" },
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

export default function AccountancyFeesArticle() {
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
              alt="An illustration of an itemized invoice with one line item highlighted under a magnifying glass, representing a closer look at what an accounting fee actually covers"
              width={1200}
              height={675}
              priority
            />
          </div>
          <div className="article-prose">
            <p>
              &quot;Accountancy fees&quot; is a phrase people usually search when a bill
              landed higher than they expected — not because anyone did anything
              wrong, but because the quote they agreed to and the invoice they
              got covered two different amounts of work. The fix isn&apos;t a bigger
              number up front. It&apos;s knowing exactly what a fee covers before you
              agree to it, and what commonly falls outside it.
            </p>

            <h2>What a standard fee typically covers</h2>
            <p>
              For a tax return, your fee usually covers the return as originally
              scoped — the forms and schedules that match the situation you
              described when you were quoted. For an ongoing engagement, it&apos;s
              whatever&apos;s written into your engagement letter: a defined set of
              bookkeeping, payroll, or advisory services, priced for a defined
              scope of work.
            </p>

            <h2>What commonly gets billed as an extra</h2>
            <ul role="list">
              <li>
                <em>Amended returns.</em> Fixing a return after the fact is its
                own piece of work, separate from preparing it the first time.
              </li>
              <li>
                <em>IRS or state notice response.</em> Reading a notice,
                researching it, and drafting a response takes real time your
                original fee didn&apos;t anticipate.
              </li>
              <li>
                <em>Bookkeeping cleanup.</em> A year of disorganized records
                takes far longer to untangle than a year of tidy ones — the
                fee reflects the actual hours, not a penalty.
              </li>
              <li>
                <em>Rush requests.</em> Asking for a fast turnaround near a
                deadline often comes with a premium, because it means
                reprioritizing other clients&apos; work too.
              </li>
              <li>
                <em>Anything outside the original scope.</em> A rental
                property, a stock sale, or a new side business that wasn&apos;t
                part of the picture when you were quoted adds real work — and
                a fair adjustment to the fee.
              </li>
            </ul>

            <h2>The engagement letter is your best protection</h2>
            <p>
              A good accountant puts the scope of work in writing before
              starting — what&apos;s included, what isn&apos;t, and how anything
              outside that scope gets billed. This protects you as much as it
              protects them. Read it before you sign, and don&apos;t be shy about
              asking what a vague line actually means. Anyone unwilling to
              spell it out in writing is telling you something.
            </p>

            <h2>Questions to ask before you agree to a fee</h2>
            <ul role="list">
              <li>What happens if my situation is more complex than I described?</li>
              <li>Are amended returns or notice responses included, or extra?</li>
              <li>How is rush work billed, and what counts as &quot;rush&quot;?</li>
              <li>Is this a fixed price or an estimate that could change?</li>
            </ul>
            <p>
              For the broader picture on how accountants price their work in
              the first place — flat fee, hourly, or monthly retainer — see{" "}
              <Link href="/articles/how-much-does-an-accountant-cost" style={{ color: "var(--h)" }}>
                How Much Does an Accountant Cost?
              </Link>{" "}
              For tax prep pricing specifically, broken down by return
              complexity, see{" "}
              <Link href="/articles/tax-accountant-cost" style={{ color: "var(--h)" }}>
                How Much Does a Tax Accountant Cost?
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
              <h3 style={{ marginBottom: "8px" }}>Want a fee that's spelled out clearly?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                A free discovery call is where we go over exactly what&apos;s
                included, what isn&apos;t, and what your situation would actually
                cost — in writing, before anything is agreed to.
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
