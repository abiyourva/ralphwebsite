"use client";

import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/testimonials";

// Quotes past this length reliably overflow the 4-line clamp at the
// card's fixed max-width, so only these get a "Read more" toggle.
const CLAMP_THRESHOLD = 220;

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [index]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % items.length) + items.length) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  if (items.length === 0) return null;

  const item = items[index];
  const showNav = items.length > 1;
  const isLong = item.quote.length > CLAMP_THRESHOLD;

  return (
    <div className="testimonial-carousel" role="region" aria-label="Testimonials">
      <div className="testimonial-viewport">
        {showNav && (
          <button
            type="button"
            className="testimonial-arrow prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <figure
          className="card testimonial-card"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${items.length}`}
        >
          <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
          <blockquote>
            <p className={`testimonial-quote${expanded ? " is-expanded" : ""}`}>{item.quote}</p>
          </blockquote>
          {isLong && (
            <button
              type="button"
              className="testimonial-readmore"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
          <figcaption>
            <span className="testimonial-name">{item.name}</span>
            <span className="testimonial-role">{item.role}</span>
          </figcaption>
        </figure>

        {showNav && (
          <button
            type="button"
            className="testimonial-arrow next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {showNav && (
        <div className="testimonial-dots" role="tablist" aria-label="Choose testimonial">
          {items.map((dotItem, i) => (
            <button
              key={dotItem.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}: ${dotItem.name}`}
              className={`testimonial-dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
