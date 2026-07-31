"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import PressTypeIcon, { type PressType } from "@/components/PressTypeIcon";
import type { Appearance } from "@/lib/appearances";

type SortMode = "newest" | "oldest" | "popular";
type FilterMode = "all" | PressType;

const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
];

const FILTER_OPTIONS: { value: FilterMode; label: string }[] = [
  { value: "all", label: "All" },
  { value: "podcast", label: "Podcasts" },
  { value: "video", label: "Video" },
  { value: "article", label: "Articles" },
];

const VERB_BY_TYPE: Record<PressType, string> = {
  article: "Read the article",
  podcast: "Listen to the episode",
  video: "Watch the episode",
};

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
function formatDate(iso: string) {
  return DATE_FORMATTER.format(new Date(`${iso}T00:00:00Z`));
}

export default function AppearancesGrid({ items }: { items: Appearance[] }) {
  const [sort, setSort] = useState<SortMode>("newest");
  const [filter, setFilter] = useState<FilterMode>("all");

  const visible = useMemo(() => {
    const filtered = filter === "all" ? items : items.filter((it) => it.type === filter);
    const sorted = [...filtered];
    if (sort === "newest") {
      sorted.sort((a, b) => b.date.localeCompare(a.date));
    } else if (sort === "oldest") {
      sorted.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      sorted.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return b.date.localeCompare(a.date);
      });
    }
    return sorted;
  }, [items, sort, filter]);

  return (
    <div className="appearances-wrap">
      <div className="appearances-controls rv">
        <div className="appearances-filters" role="group" aria-label="Filter by type">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`appearances-pill${filter === opt.value ? " is-active" : ""}`}
              onClick={() => setFilter(opt.value)}
              aria-pressed={filter === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="appearances-sort">
          <label htmlFor="appearances-sort-select">Sort by</label>
          <select
            id="appearances-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="appearances-count rv d1">
        Showing {visible.length} of {items.length} appearances
      </p>

      <div className="appearances-grid">
        {visible.map((item, i) => (
          <a
            key={item.slug}
            href={item.url}
            target="_blank"
            rel="noopener"
            className={`card card-hover appearances-card rv${i > 0 ? ` d${i % 4}` : ""}`}
          >
            <div className="appearances-card-img">
              <Image
                src={item.image}
                alt={`${item.title} — ${item.outlet}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 380px"
              />
            </div>
            <div className="appearances-card-body">
              <div className="appearances-card-type">
                <PressTypeIcon type={item.type} size={13} />
                <span>{item.outlet}</span>
              </div>
              <h3 className="appearances-card-title">{item.title}</h3>
              <div className="appearances-card-footer">
                <span className="appearances-card-date">{formatDate(item.date)}</span>
                <span className="appearances-card-link">{VERB_BY_TYPE[item.type]} →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
