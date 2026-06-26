"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Subtle mouse-parallax on the hero photo (±12px X, ±8px Y), active while
// the cursor is within the hero section + a little past it.
export default function HeroParallax({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const heroSection = wrap?.closest("section");
    if (!wrap || !heroSection) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = heroSection!.getBoundingClientRect();
      if (e.clientY > rect.bottom + 100) return;
      const cx = window.innerWidth / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / rect.height;
      wrap!.style.transform = `translate(${dx * -12}px, ${dy * -8}px)`;
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={wrapRef} className="hero-photo-wrap">
      {children}
    </div>
  );
}
