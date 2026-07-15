import Link from "next/link";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "google-search-console")!;

export const metadata = pageMetadata({
  title: "Google Search Console: The SEO Tool Every Website Owner Needs — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/google-search-console",
});

const FAQS = [
  {
    question: "Is Google Search Console really free?",
    answer:
      "Yes, completely. Google Search Console is a free tool provided by Google. There are no hidden fees, premium tiers, or limits on how much you can use it. All you need is a Google account and verification access to your website.",
  },
  {
    question: "How long does it take to see data in Search Console?",
    answer:
      "Google needs time to crawl and index your site first. You may see some data within a few days, but it typically takes 1-2 weeks to build a meaningful picture of your search performance. Patience is key when you're first setting it up.",
  },
  {
    question: "Do I need Search Console if I use Google Analytics?",
    answer:
      "Yes. They serve different purposes. Google Analytics shows you what visitors do on your site after they arrive. Search Console shows you how your site appears in Google Search, which keywords people use to find you, and indexing issues. You need both for the full picture.",
  },
  {
    question: "What if my website is just starting out?",
    answer:
      "Set up Search Console immediately. Even if you have zero traffic right now, it's your direct line to Google. You can submit your sitemap, see crawl errors, and understand how Google sees your site from day one. By the time traffic comes, you'll already know what's working.",
  },
  {
    question: "Can someone else manage my Search Console account?",
    answer:
      "Yes. You can add multiple users with different permission levels — full access, restricted access, or read-only. This is helpful if you work with an SEO consultant, web developer, or marketing team.",
  },
  {
    question: "What's the difference between 'Clicks' and 'Impressions' in Search Console?",
    answer:
      "An impression is when your page appears in someone's search results. A click is when they actually click on your result and visit your site. Your click-through rate (CTR) is clicks divided by impressions — it tells you how compelling your search result is compared to others.",
  },
];

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/google-search-console",
    datePublished: article.datePublished,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Google Search Console", path: "/articles/google-search-console" },
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

export default function GoogleSearchConsoleArticle() {
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
              You can build the best website in the world, but if Google doesn&apos;t know it&apos;s there — or if it doesn&apos;t understand what it&apos;s about — no one&apos;s going to find you. That&apos;s where Google Search Console comes in.
            </p>

            <p>
              If you&apos;re serious about being discoverable online — whether you&apos;re offering coaching, writing about creator finances, or building a personal brand — Search Console isn&apos;t optional. It&apos;s your direct communication line to Google, and I&apos;m going to show you exactly how to use it.
            </p>

            <h2>What Google Search Console Actually Is</h2>
            <p>
              Google Search Console (formerly Webmaster Tools) is a free service from Google that lets you monitor and maintain your site&apos;s presence in Google Search. Think of it as a control center where you can:
            </p>
            <ul role="list">
              <li>See which search terms bring people to your site</li>
              <li>Monitor how often your pages appear in search results</li>
              <li>Track your click-through rate (how many people actually click on your result)</li>
              <li>Find and fix technical issues that prevent Google from crawling your site</li>
              <li>Submit your sitemap so Google knows about every page</li>
              <li>Check for security problems and malware</li>
              <li>See mobile usability issues</li>
            </ul>
            <p>
              In short: Search Console is where Google tells you how it sees your website.
            </p>

            <h2>Why This Matters for Your Website&apos;s SEO</h2>
            <p>
              Here&apos;s something that surprises people: just because you published a page doesn&apos;t mean Google knows about it. Google&apos;s bots crawl the web constantly, but they&apos;re not everywhere at once. Without Search Console, you&apos;re hoping Google discovers your site on its own schedule.
            </p>
            <p>
              With Search Console, you take control. You can:
            </p>
            <ul role="list">
              <li>
                <em>Speed up indexing.</em> Submit your sitemap and request indexing for new pages. Instead of waiting weeks for Google to find your content, you can have it indexed in days.
              </li>
              <li>
                <em>Fix problems fast.</em> Google will alert you if your site has a security issue, mobile usability problem, or crawl error. Knowing about these problems is the first step to fixing them.
              </li>
              <li>
                <em>Understand your search audience.</em> You&apos;ll see exactly which keywords people use to find you and how high your pages rank. This shows you what&apos;s working and what needs help.
              </li>
              <li>
                <em>Improve your click-through rate.</em> Search Console shows you your average position in search results and your click-through rate. If you&apos;re ranking #5 but getting few clicks, your title tag or description needs work.
              </li>
              <li>
                <em>Build trust with Google.</em> Regular monitoring and maintenance tells Google you&apos;re serious about your site&apos;s health.
              </li>
            </ul>

            <h2>The Key Metrics You Need to Know</h2>
            <p>
              When you open Search Console, you&apos;ll see performance data broken down by several metrics. Here&apos;s what each one means:
            </p>

            <h3>Total Clicks</h3>
            <p>
              This is how many people clicked on your site from Google Search results. More clicks = more traffic. This is the metric that matters most for your bottom line.
            </p>

            <h3>Total Impressions</h3>
            <p>
              This is how many times your pages appeared in someone&apos;s search results, whether they clicked or not. High impressions with low clicks means your title and description aren&apos;t convincing people to visit.
            </p>

            <h3>Average CTR (Click-Through Rate)</h3>
            <p>
              Clicks divided by impressions, expressed as a percentage. If your result shows up 100 times and gets 5 clicks, your CTR is 5%. A good benchmark is 2-5% depending on your industry, but the real question is: are you improving over time?
            </p>

            <h3>Average Position</h3>
            <p>
              Where your pages typically rank in search results. Position 1 is the top spot. The higher you rank, the more impressions and clicks you usually get. Even moving from position 10 to position 5 can have a dramatic impact on traffic.
            </p>

            <h2>How to Set Up Google Search Console (Step by Step)</h2>
            <p>
              This is straightforward. Here&apos;s exactly what to do:
            </p>

            <h3>Step 1: Go to Google Search Console</h3>
            <p>
              Head to{" "}
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener">
                search.google.com/search-console
              </a>
              . You&apos;ll need a Google account (if you don&apos;t have one, they&apos;re free).
            </p>

            <h3>Step 2: Add Your Property</h3>
            <p>
              A &quot;property&quot; is just your website. Click the dropdown in the top left and select &quot;Add property.&quot; You have two options:
            </p>
            <ul role="list">
              <li>
                <em>URL prefix:</em> Enter your exact domain (e.g., www.ralphestepjr.com). This is simpler for most people.
              </li>
              <li>
                <em>Domain:</em> Enter just the domain without www. This covers all subdomains and prefixes. Use this if you want to track both www and non-www versions.
              </li>
            </ul>

            <h3>Step 3: Verify Ownership</h3>
            <p>
              Google needs to confirm you own the site. The easiest methods are:
            </p>
            <ul role="list">
              <li>
                <em>HTML file upload:</em> Download a verification file and upload it to your website&apos;s root directory.
              </li>
              <li>
                <em>DNS record:</em> Add a TXT record to your domain&apos;s DNS settings.
              </li>
              <li>
                <em>Google Analytics:</em> If you already have Google Analytics on your site, Search Console can verify you through that.
              </li>
              <li>
                <em>Google Tag Manager:</em> Similar to Analytics — if your GTM container is verified, you can use that.
              </li>
            </ul>
            <p>
              If you&apos;re working with a web developer or hosting provider, they can usually handle this for you.
            </p>

            <h3>Step 4: Submit Your Sitemap</h3>
            <p>
              A sitemap is an XML file that lists all the pages on your website. It tells Google exactly what to crawl. Most modern website builders (WordPress, Webflow, Squarespace, Next.js) generate a sitemap automatically — it&apos;s usually at something like yoursite.com/sitemap.xml.
            </p>
            <p>
              In Search Console, go to &quot;Sitemaps&quot; on the left menu, paste your sitemap URL, and click Submit. Google will crawl your pages faster because you told it exactly where to find them.
            </p>

            <h3>Step 5: Monitor Performance</h3>
            <p>
              Once you&apos;ve set this up, come back regularly (weekly or monthly) to check:
            </p>
            <ul role="list">
              <li>Are your clicks and impressions trending up or down?</li>
              <li>Which pages are getting the most traffic?</li>
              <li>What keywords are people using to find you?</li>
              <li>Are there any crawl errors or security issues?</li>
            </ul>

            <h2>How to Use Search Console Data to Improve Your SEO</h2>
            <p>
              Setting it up is just the beginning. The real power is using the data to get better results.
            </p>

            <h3>Look for Keywords with High Impressions but Low Clicks</h3>
            <p>
              If a page is appearing in search results (high impressions) but few people are clicking (low clicks and CTR), the issue is usually your title tag or meta description. They&apos;re not compelling enough. Rewrite them to be more specific and benefit-focused.
            </p>
            <p>
              For example, instead of &quot;How Much Does an Accountant Cost?&quot; you might try &quot;How Much Does an Accountant Cost? 2024 Pricing Breakdown.&quot; The addition of specific detail makes your result stand out.
            </p>

            <h3>Find Your Quick Win Pages</h3>
            <p>
              Look for pages ranking in positions 4-10. These are close to page one but not quite there. A small SEO improvement — better content, more keywords, a backlink — can push them to the top and dramatically increase clicks.
            </p>

            <h3>Understand Your Top Performing Keywords</h3>
            <p>
              What words are actually bringing people to your site? Make a note of them. Create more content around these keywords. Double down on what&apos;s working.
            </p>

            <h3>Fix Technical Issues Immediately</h3>
            <p>
              If Search Console shows crawl errors, mobile usability issues, or security warnings, treat these as urgent. A page that Google can&apos;t crawl is a page that won&apos;t rank. Mobile usability issues hurt your ranking. Security problems can tank your traffic overnight.
            </p>

            <h2>Common Questions About Search Console</h2>
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>Need help getting your website SEO-ready?</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                Whether you&apos;re building a new site or optimizing an existing one, SEO is a long game — but it&apos;s worth playing. If you&apos;re ready to make sure your site is actually discoverable by the right people, let&apos;s talk about your strategy.
              </p>
              <Link href="/contact" className="btn btn-navy">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
