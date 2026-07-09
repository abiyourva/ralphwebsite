"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface PressCarouselItem {
  icon: string;
  outlet: string;
  title: string;
  url: string;
  verb: string;
}

const AUTOPLAY_MS = 6000;

export default function PressCarousel({ items }: { items: PressCarouselItem[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion.current || items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, items.length]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % items.length) + items.length) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="press-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Press and media mentions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="press-carousel-viewport">
        <button type="button" onClick={goPrev} className="press-carousel-arrow prev" aria-label="Previous mention">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <a
          href={item.url}
          target="_blank"
          rel="noopener"
          className="card card-hover episode-card press-carousel-card"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${items.length}`}
        >
          <div className="episode-card-icon">{item.icon}</div>
          <p className="eyebrow" style={{ marginBottom: "8px" }}>{item.outlet}</p>
          <h4>{item.title}</h4>
          <p>{item.verb} →</p>
        </a>

        <button type="button" onClick={goNext} className="press-carousel-arrow next" aria-label="Next mention">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="press-carousel-dots" role="tablist" aria-label="Choose mention">
        {items.map((dotItem, i) => (
          <button
            key={dotItem.url}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show mention ${i + 1}: ${dotItem.outlet}`}
            className={`press-carousel-dot${i === index ? " is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
