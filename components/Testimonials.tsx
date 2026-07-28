"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/testimonials";

// Scroll one card (plus its gap) per click, rather than a fixed pixel
// amount, so the step stays correct at every viewport width — card width
// is responsive (min(88vw, 420px) in CSS), so we measure it live.
function getStep(track: HTMLDivElement) {
  const card = track.querySelector<HTMLElement>(".testimonial-card");
  const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 20;
  return (card?.offsetWidth ?? track.clientWidth * 0.9) + gap;
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [items.length, updateScrollState]);

  function scroll(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * getStep(track), behavior: "smooth" });
  }

  if (items.length === 0) return null;

  const showArrows = items.length > 1;

  return (
    <div className="testimonial-carousel">
      {showArrows && (
        <button
          type="button"
          className="testimonial-arrow prev"
          onClick={() => scroll(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <div
        className={`testimonial-grid${items.length === 1 ? " testimonial-grid-single" : ""}`}
        ref={trackRef}
        role="region"
        aria-label="Testimonials"
        tabIndex={0}
      >
        {items.map((item, i) => (
          <figure key={item.slug} className={`card testimonial-card rv${i > 0 ? ` d${i}` : ""}`}>
            <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <figcaption>
              <span className="testimonial-name">{item.name}</span>
              <span className="testimonial-role">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {showArrows && (
        <button
          type="button"
          className="testimonial-arrow next"
          onClick={() => scroll(1)}
          disabled={!canScrollNext}
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
