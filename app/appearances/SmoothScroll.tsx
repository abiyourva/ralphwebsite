"use client";

import { useEffect } from "react";

// Eased momentum scroll for this page only. Skipped on touch devices and
// prefers-reduced-motion, same guardrails as the homepage's HomeScrollFX —
// scroll-jacking libraries are a real hazard on mobile/a11y contexts.
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isCoarsePointer) return;

    let rafId = 0;
    let lenisInstance: import("lenis").default | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenisInstance = lenis;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return null;
}
