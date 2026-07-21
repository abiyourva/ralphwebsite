import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import "./articles.css";

export const metadata = pageMetadata({
  title: "Articles — Plain-English Money Answers from Ralph Estep Jr., LPA",
  description:
    "Practical, no-shame answers to real money questions — taxes, budgeting, debt, and choosing an accountant — from Ralph Estep Jr., Licensed Public Accountant.",
  path: "/articles",
});

const BREADCRUMBS = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
]);

const SORTED_ARTICLES = [...articles].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS) }}
      />
      <header className="page-hero">
        <div className="page-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <span className="eyebrow">Articles</span>
          <h1>Plain-English answers to real money questions.</h1>
          <span className="gold-rule"></span>
          <p>
            No jargon, no shame, no lectures. Just the practical answers Ralph gives
            clients every week — written down so you can use them today.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container-narrow">
          <div className="articles-list">
            {SORTED_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="card card-hover article-card"
              >
                {article.image && (
                  <div className="article-card-thumb">
                    <Image
                      src={article.image}
                      alt=""
                      width={1200}
                      height={675}
                    />
                  </div>
                )}
                <div className="article-card-body">
                  <div className="article-card-meta">
                    <span className="article-card-category">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <span className="article-card-read">Read the article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
