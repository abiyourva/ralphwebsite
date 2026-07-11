import Link from "next/link";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "how-much-does-an-accountant-cost")!;

export const metadata = pageMetadata({
  title: "How Much Does an Accountant Cost? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/how-much-does-an-accountant-cost",
});

const FAQS = [
  {
    question: "How much does it cost to have an accountant do my taxes?",
    answer:
      "For a straightforward individual return, expect a few hundred dollars. Add a business, rental properties, multiple states, or investment activity and the price climbs with the complexity — because the work does. Any good accountant will give you a clear estimate up front once they've seen what your return involves.",
  },
  {
    question: "Is hiring an accountant worth it?",
    answer:
      "Often, yes — a good accountant frequently finds deductions, prevents penalties, and saves hours of your time, which together can outweigh the fee. But it depends on your situation: if you have one W-2 and take the standard deduction, free filing options may genuinely be all you need, and an honest accountant will tell you so.",
  },
  {
    question: "Should I pay an accountant hourly, a flat fee, or monthly?",
    answer:
      "Flat fees work best for defined projects like a tax return. Hourly suits one-off questions or cleanup work. A monthly retainer makes sense when you're a business owner who needs ongoing bookkeeping, payroll, and advice. The model matters less than knowing the price before the work starts.",
  },
  {
    question: "What's a red flag when an accountant quotes a price?",
    answer:
      "Be cautious of any preparer who bases their fee on the size of your refund, promises a bigger refund than anyone else, won't give you a written estimate, or can't show you a PTIN (the IRS Preparer Tax Identification Number every paid preparer must have). Those are signs to walk away.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/how-much-does-an-accountant-cost",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "How Much Does an Accountant Cost?", path: "/articles/how-much-does-an-accountant-cost" },
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

export default function AccountantCostArticle() {
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
              Let&apos;s talk about the question people are almost embarrassed to ask out
              loud: <em>&quot;What&apos;s this going to cost me?&quot;</em> You shouldn&apos;t be. Asking
              about price isn&apos;t rude — it&apos;s responsible. And any accountant who gets
              cagey when you ask is telling you something important about how they&apos;ll
              treat you as a client. So here&apos;s the honest breakdown, the way I&apos;d explain
              it across the kitchen table.
            </p>

            <h2>The short answer</h2>
            <p>
              For a straightforward individual tax return, most people pay a few hundred
              dollars. From there, the price follows the complexity: a small business
              schedule, rental properties, multiple states, stock sales, or a year of
              cleanup work all add time — and time is what you&apos;re buying. Ongoing
              services like monthly bookkeeping are usually priced as a monthly
              retainer rather than a one-time fee. There&apos;s no universal price sheet in
              this profession, and anyone quoting you one before seeing your situation
              is guessing.
            </p>

            <h2>The three pricing models you&apos;ll run into</h2>
            <ul role="list">
              <li>
                <em>Flat fee.</em> One agreed price for a defined job — most commonly a
                tax return. You know the number before the work starts. This is the
                model most individuals should look for.
              </li>
              <li>
                <em>Hourly.</em> Best for open-ended work: untangling a bookkeeping
                mess, answering a complex one-off question, or handling a notice from
                the IRS. Ask for an estimated range of hours up front.
              </li>
              <li>
                <em>Monthly retainer.</em> For business owners who need bookkeeping,
                payroll, and someone to call all year — not just in April. Costs more
                in total, but it&apos;s buying prevention instead of cleanup.
              </li>
            </ul>

            <h2>What actually drives the price</h2>
            <ul role="list">
              <li>
                <em>Complexity.</em> Every additional schedule, state, entity, and
                income stream is more work. Simple costs less. That&apos;s fair in both
                directions.
              </li>
              <li>
                <em>The state of your records.</em> A shoebox of receipts costs more
                than a tidy spreadsheet — not as a punishment, but because someone has
                to sort the shoebox.
              </li>
              <li>
                <em>Timing.</em> Walking in the first week of April limits your options
                and your accountant&apos;s ability to plan. Coming in early is the cheapest
                move you can make.
              </li>
              <li>
                <em>Who&apos;s doing the work.</em> Credentials and experience affect rates.
                What matters is the fit for <em>your</em> situation — I&apos;ve written
                about what the letters do and don&apos;t mean in{" "}
                <Link href="/articles/lpa-vs-cpa" style={{ color: "var(--h)" }}>
                  LPA vs. CPA: What&apos;s the Difference?
                </Link>
              </li>
            </ul>

            <h2>Cost vs. value — the part most articles skip</h2>
            <p>
              Here&apos;s the truth from 30+ years of doing this: the fee is only half the
              math. A good accountant often finds deductions you missed, keeps you out
              of penalty territory, and gives you back the hours you&apos;d have spent
              wrestling with software. For business owners especially, the right advice
              at the right moment — how to structure the business, when to make a
              purchase, how to pay yourself — can be worth many times the annual fee.
              That&apos;s not a promise that hiring an accountant always pays for itself.
              It&apos;s a reminder that the cheapest option and the best value are rarely
              the same line on the menu.
            </p>

            <h2>Red flags that should end the conversation</h2>
            <ul role="list">
              <li>Fees based on a percentage of your refund</li>
              <li>Promises of a bigger refund than anyone else, before seeing your documents</li>
              <li>No written estimate, or a quote that keeps moving</li>
              <li>No PTIN — every paid federal tax preparer must have one</li>
              <li>Pressure to sign a blank or incomplete return — never do this</li>
            </ul>

            <h2>How to keep your bill down (without cutting corners)</h2>
            <ul role="list">
              <li>Come in early — January beats April, every year</li>
              <li>Bring organized records; even a simple folder system helps</li>
              <li>Answer questions promptly so the work doesn&apos;t stall and restart</li>
              <li>Ask what you can prepare yourself — a good accountant will tell you</li>
            </ul>

            <h2>Common questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Want a real number for your situation?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                The fastest way to know what an accountant would cost <em>you</em> is a
                free discovery call. Bring your questions, tell me what your year looks
                like, and you&apos;ll leave with a straight answer — even if that answer is
                &quot;you don&apos;t need me yet.&quot;
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
