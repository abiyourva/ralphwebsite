// Registry of articles under /articles. Each article is its own static
// route (app/articles/<slug>/page.tsx); this list drives the index page,
// the sitemap, and internal linking.

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  datePublished: string; // ISO date
  readTime: string;
  image?: string;
};

export const articles: Article[] = [
  {
    slug: "debt-snowball-vs-avalanche",
    title: "Debt Snowball vs. Avalanche: Which One Actually Gets You Debt-Free?",
    description:
      "The math favors one method, your motivation favors the other. Here's how each works, which saves more interest, and how to pick the one you'll actually stick with.",
    category: "Getting Out of Debt",
    datePublished: "2026-07-11",
    readTime: "6 min read",
    image: "/images/articles/debt-snowball-vs-avalanche.png",
  },
  {
    slug: "do-content-creators-need-an-llc",
    title: "Do Content Creators Need an LLC? An Accountant's Honest Answer",
    description:
      "An LLC won't lower your taxes by itself — and you don't need one to deduct expenses. What it actually does, when it starts to matter, and the myths costing creators money.",
    category: "Creator Finances",
    datePublished: "2026-07-11",
    readTime: "6 min read",
    image: "/images/articles/do-content-creators-need-an-llc.png",
  },
  {
    slug: "how-much-does-an-accountant-cost",
    title: "How Much Does an Accountant Cost? An Honest Breakdown",
    description:
      "What accountants actually charge, the three pricing models you'll run into, what drives your bill up or down, and the red flags that should end the conversation.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-11",
    readTime: "7 min read",
    image: "/images/articles/how-much-does-an-accountant-cost.png",
  },
  {
    slug: "lpa-vs-cpa",
    title: "LPA vs. CPA: What's the Difference — and Which One Do You Need?",
    description:
      "Both are state-licensed accounting professionals. Here's what each credential means, what they can both do for you, and the questions that matter more than the letters.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-11",
    readTime: "6 min read",
    image: "/images/articles/lpa-vs-cpa.png",
  },
  {
    slug: "tax-accountant-cost",
    title: "How Much Does a Tax Accountant Cost? Pricing by Return Type",
    description:
      "Tax prep pricing isn't one number — it moves with your return. Here's what a simple W-2 return costs versus self-employment income, rentals, multiple states, and a business return.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-20",
    readTime: "6 min read",
    image: "/images/articles/tax-accountant-cost.png",
  },
  {
    slug: "what-are-accountancy-fees",
    title: "What's Actually in Your Accounting Fee (and What Costs Extra)",
    description:
      "A quoted fee rarely covers everything. Here's what's typically included, what commonly gets billed separately, and the questions to ask before you agree to a price.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-21",
    readTime: "6 min read",
    image: "/images/articles/what-are-accountancy-fees.png",
  },
  {
    slug: "what-is-an-lpa",
    title: "What Does \"LPA\" Mean? A Plain-English Guide to the Credential",
    description:
      "LPA stands for Licensed Public Accountant — a state-licensed credential most people have never heard of. Here's what it means, how it's earned, and how it's regulated.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-21",
    readTime: "5 min read",
    image: "/images/articles/what-is-an-lpa.png",
  },
  {
    slug: "personal-tax-accountant-cost",
    title: "How Much Does a Personal Tax Accountant Cost?",
    description:
      "Personal tax prep pricing depends on your life, not a business ledger. Here's what actually drives the cost for individuals — dependents, retirement income, side gigs, and more.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-29",
    readTime: "6 min read",
    image: "/images/articles/personal-tax-accountant-cost.png",
  },
];
