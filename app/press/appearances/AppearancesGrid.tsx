"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

export default function AppearancesGrid({ items }: { items: Appearance[] }) {
  const [sort, setSort] = useState<SortMode>("newest");
  const [filter, setFilter] = useState<FilterMode>("all");

  const visible = useMemo(() => {
    const filtered = filter === "all" ? items : items.filter((it) => it.type === filter);
    const sorted = [...filtered];
    if (sort === "newest") {
      sorted.sort((a, b) => a.order - b.order);
    } else if (sort === "oldest") {
      sorted.sort((a, b) => b.order - a.order);
    } else {
      sorted.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return a.order - b.order;
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
            className={`appearances-tile rv${i > 0 ? ` d${i % 4}` : ""}`}
          >
            <Image
              src={item.image}
              alt={item.outlet}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1000px) 30vw, 220px"
              className="appearances-tile-img"
            />
            <div className="appearances-tile-overlay">
              <div className="appearances-tile-type">
                <PressTypeIcon type={item.type} size={14} />
                <span>{item.outlet}</span>
              </div>
              <p className="appearances-tile-title">{item.title}</p>
              <span className="appearances-tile-link">
                Visit <ArrowUpRight size={13} strokeWidth={2} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
