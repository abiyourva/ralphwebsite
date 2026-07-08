"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  /** Final number, e.g. 770 for "770K+". */
  value: number;
  /** Text after the number, e.g. "K+" or "+". */
  suffix?: string;
  durationMs?: number;
}

// Counts from 0 to `value` when scrolled into view, easing out so the last
// digits settle gently. Respects prefers-reduced-motion (shows the final
// value immediately) and renders the final value on the server so the
// number is right without JavaScript.
export default function CountUpStat({ value, suffix = "", durationMs = 1400 }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        function tick(now: number) {
          const t = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) rafId = requestAnimationFrame(tick);
        }
        setDisplay(0);
        rafId = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
