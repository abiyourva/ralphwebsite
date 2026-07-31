import { pageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { APPEARANCES } from "@/lib/appearances";
import AppearancesGrid from "./AppearancesGrid";
import SmoothScroll from "./SmoothScroll";
import "./appearances.css";

export const metadata = pageMetadata({
  title: "Ralph's Appearances — Podcasts, Videos & Press | Ralph Estep Jr.",
  description:
    "Every podcast, video, and press appearance Ralph Estep Jr. has made — from national outlets to faith and finance shows. Browse the full archive.",
  path: "/appearances",
});

const BREADCRUMB_JSON_LD = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Appearances", path: "/appearances" },
]);

const ITEM_LIST_JSON_LD = itemListJsonLd(
  APPEARANCES.map((item) => ({ name: item.title, url: item.url, datePublished: item.date }))
);

export default function AppearancesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_JSON_LD) }}
      />
      <SmoothScroll />
      <header className="appearances-hero">
        <div className="appearances-hero-radial" aria-hidden="true" />
        <div className="appearances-hero-inner">
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Ralph&apos;s Appearances</p>
          <h1 className="hero-in" style={{ animationDelay: "0.25s" }}>
            Every stage, mic, and byline.
          </h1>
          <p className="hero-in" style={{ animationDelay: "0.38s" }}>
            The full archive of Ralph&apos;s podcast, video, and press appearances —
            {" "}{APPEARANCES.length} and counting. Filter by type or sort below,
            then click through to listen, watch, or read.
          </p>
        </div>
      </header>

      <section className="section-sm">
        <AppearancesGrid items={APPEARANCES} />
      </section>
    </>
  );
}
