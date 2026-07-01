"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Global scroll-reveal (.rv fade/slide-up on intersect) and 3D card-tilt
// (.card-hover) behavior, re-scanned on every route change since App Router
// swaps page content client-side. Mounted once in the root layout.
export default function InteractionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("on");
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card-hover")).filter(
      (c) => !c.closest(".pv-enhanced")
    );
    const cleanups: (() => void)[] = [];
    cards.forEach((card) => {
      function handleMove(e: MouseEvent) {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = "border-color 0.3s, box-shadow 0.3s";
        card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
      }
      function handleLeave() {
        card.style.transition = "border-color 0.3s, box-shadow 0.3s, transform 0.5s ease";
        card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0)";
      }
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
