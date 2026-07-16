import Link from "next/link";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "debt-snowball-vs-avalanche")!;

export const metadata = pageMetadata({
  title: "Debt Snowball vs. Avalanche: Which Works? — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/debt-snowball-vs-avalanche",
});

const FAQS = [
  {
    question: "Which pays off debt faster, snowball or avalanche?",
    answer:
      "On paper, the avalanche — paying the highest interest rate first — always wins or ties, because less of your money goes to interest. But the gap is often smaller than people expect, and a method you abandon in month three saves you nothing. The faster method in real life is the one you'll still be following a year from now.",
  },
  {
    question: "How does the debt snowball work?",
    answer:
      "List your debts from smallest balance to largest, regardless of interest rate. Pay minimums on everything, and put every extra dollar at the smallest balance. When it's gone, roll its entire payment onto the next smallest. Each payoff is a quick, visible win — that momentum is the whole point.",
  },
  {
    question: "How does the debt avalanche work?",
    answer:
      "List your debts from highest interest rate to lowest. Pay minimums on everything, and put every extra dollar at the highest-rate debt. When it's gone, roll that payment to the next highest rate. Mathematically, this minimizes the total interest you pay.",
  },
  {
    question: "Can I combine the snowball and avalanche methods?",
    answer:
      "Yes, and many people should. A common hybrid: knock out one or two small balances first for the motivation, then switch to attacking the highest-rate debt. There are no method police — the plan that fits your psychology is the plan that works.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/debt-snowball-vs-avalanche",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Debt Snowball vs. Avalanche", path: "/articles/debt-snowball-vs-avalanche" },
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

export default function SnowballAvalancheArticle() {
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
              First, if you&apos;re carrying debt that keeps you up at night: I&apos;m not here
              to lecture you about how it happened. I&apos;ve sat across from thirty years
              of people in exactly your chair, and the ones who got out all started the
              same way — with a plan they could actually follow. The snowball and the
              avalanche are the two plans that work. Here&apos;s how each one operates, and
              how to pick yours honestly.
            </p>

            <h2>Both methods share the same foundation</h2>
            <ul role="list">
              <li>Pay the minimum on every debt, every month — no exceptions</li>
              <li>Pick <em>one</em> target debt and send every extra dollar there</li>
              <li>When the target is gone, roll its whole payment onto the next target</li>
              <li>Repeat until the list is empty</li>
            </ul>
            <p>
              The only difference between the two methods is how you order the list.
              That&apos;s it. But that one choice changes both the math and the psychology.
            </p>

            <h2>The snowball: smallest balance first</h2>
            <p>
              You order your debts by balance, smallest to largest, and attack the
              smallest one first — even if its interest rate is modest. Why would
              anyone ignore the interest rate? Because paying off an entire account in
              a month or two is <em>fuel</em>. You see a zero. You feel it working. And
              the payment that debt used to eat now rolls onto the next one, so the
              &quot;snowball&quot; grows with every win. People don&apos;t quit plans that feel like
              they&apos;re winning.
            </p>

            <h2>The avalanche: highest rate first</h2>
            <p>
              You order your debts by interest rate, highest to lowest, and attack the
              most expensive one first. This is the mathematician&apos;s answer — every
              dollar aimed at your highest-rate debt stops more interest than a dollar
              aimed anywhere else. Over the life of the payoff, the avalanche always
              costs you less in total interest, or at worst ties. The catch: if your
              highest-rate debt is also your largest balance, that first zero can be a
              long time coming, and a lot of people run out of motivation waiting
              for it.
            </p>

            <h2>So which one should you pick?</h2>
            <p>
              Here&apos;s my honest answer after three decades: <em>the best method is the
              one you&apos;ll still be doing in month eight.</em> If you&apos;re a
              spreadsheet person who&apos;s motivated by efficiency, run the avalanche and
              enjoy the interest savings. If you&apos;ve started and quit debt plans before,
              take the snowball and buy yourself the early wins — the extra interest is
              the price of a plan that actually finishes, and it&apos;s usually a smaller
              price than people fear. And if you want the real numbers instead of a
              guess, don&apos;t take my word for it:{" "}
              <Link href="/resources/debt-payoff" style={{ color: "var(--h)" }}>
                my free Debt Payoff Calculator
              </Link>{" "}
              shows your debt-free date and total interest under <em>both</em> methods,
              side by side, in about two minutes. Privately, with no sign-up.
            </p>

            <h2>Before either method: make sure the math can work</h2>
            <p>
              One kind word of caution. Both methods assume there&apos;s at least some
              extra dollar to send at the target debt. If your budget has no room —
              if the minimums themselves are the problem — then the method isn&apos;t your
              issue yet, the budget is. Start with{" "}
              <Link href="/resources/budget-calculator" style={{ color: "var(--h)" }}>
                the Budget Calculator
              </Link>{" "}
              to see exactly where you stand, and build the payoff plan from there.
              There&apos;s no shame in that order of operations — it&apos;s the right one.
            </p>

            <h2>Common questions</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>See your actual debt-free date.</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                Enter your real debts into the free calculator and compare snowball
                vs. avalanche for your situation — total interest, payoff order, and
                the date you&apos;re done. It takes about two minutes.
              </p>
              <Link href="/resources/debt-payoff" className="btn btn-navy">
                Try the Debt Payoff Calculator →
              </Link>
            </div>

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Want a plan built around your actual numbers?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                A calculator can show you the math — a discovery call can help you build
                the plan you&apos;ll actually stick to. Bring your debts, your budget, or
                just your questions. No pressure, no judgment.
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
