import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { articles } from "@/lib/articles";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

const ROUTES: { path: string; changeFrequency: Freq; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/appearances", changeFrequency: "weekly", priority: 0.8 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.8 },
  { path: "/becoming-financially-confident", changeFrequency: "monthly", priority: 0.6 },
  { path: "/coaching", changeFrequency: "monthly", priority: 0.6 },
  { path: "/cohost", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/money-archetype", changeFrequency: "monthly", priority: 0.6 },
  { path: "/press", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/budget-calculator", changeFrequency: "yearly", priority: 0.5 },
  { path: "/resources/debt-payoff", changeFrequency: "yearly", priority: 0.5 },
  { path: "/schedule", changeFrequency: "yearly", priority: 0.5 },
  { path: "/schedule/bookkeeping", changeFrequency: "yearly", priority: 0.5 },
  { path: "/schedule/discovery", changeFrequency: "yearly", priority: 0.5 },
  { path: "/schedule/monthly", changeFrequency: "yearly", priority: 0.5 },
  { path: "/schedule/tax", changeFrequency: "yearly", priority: 0.5 },
  { path: "/shows", changeFrequency: "weekly", priority: 0.8 },
  { path: "/speaking", changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
