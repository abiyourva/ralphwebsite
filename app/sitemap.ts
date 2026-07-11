import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { articles } from "@/lib/articles";

const ROUTES = [
  "",
  "/about",
  "/articles",
  ...articles.map((article) => `/articles/${article.slug}`),
  "/becoming-financially-confident",
  "/coaching",
  "/cohost",
  "/contact",
  "/money-archetype",
  "/press",
  "/privacy",
  "/resources",
  "/resources/budget-calculator",
  "/resources/debt-payoff",
  "/schedule",
  "/schedule/bookkeeping",
  "/schedule/discovery",
  "/schedule/monthly",
  "/schedule/tax",
  "/shows",
  "/speaking",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
