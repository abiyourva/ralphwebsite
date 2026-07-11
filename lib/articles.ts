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
};

export const articles: Article[] = [
  {
    slug: "how-much-does-an-accountant-cost",
    title: "How Much Does an Accountant Cost? An Honest Breakdown",
    description:
      "What accountants actually charge, the three pricing models you'll run into, what drives your bill up or down, and the red flags that should end the conversation.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-11",
    readTime: "7 min read",
  },
  {
    slug: "lpa-vs-cpa",
    title: "LPA vs. CPA: What's the Difference — and Which One Do You Need?",
    description:
      "Both are state-licensed accounting professionals. Here's what each credential means, what they can both do for you, and the questions that matter more than the letters.",
    category: "Choosing an Accountant",
    datePublished: "2026-07-11",
    readTime: "6 min read",
  },
];
