"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Homepage-only premium scroll experience: eased smooth scroll (Lenis) +
// a pinned hero that fades/blurs/scales down in place before the next
// section scrolls up naturally beneath it, plus a touch of scroll-linked
// parallax on the story photo.
//
// Disabled on touch devices, narrow viewports, and prefers-reduced-motion —
// scroll-jacking and pinning are a real UX hazard on mobile, so those users
// just get the normal native scroll with the existing .rv reveal system.
export default function HomeScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow = window.innerWidth < 900;
    if (reduceMotion || isCoarsePointer || isNarrow) return;

    let rafId = 0;
    let lenisInstance: import("lenis").default | null = null;
    let gsapContext: gsap.Context | null = null;
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, gsapModule, scrollTriggerModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenisInstance = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Note: in-page hash links (#shows, #about) are left to Next.js
      // Link's own hash-scroll handling rather than intercepted here —
      // hijacking them with lenis.scrollTo fought with Next's router and
      // landed at the wrong position.

      gsapContext = gsap.context(() => {
        const heroEl = document.querySelector<HTMLElement>(".hero");
        const heroGrid = document.querySelector<HTMLElement>(".hero-grid");

        if (heroEl && heroGrid) {
          // Standard pin-and-dissolve: ScrollTrigger reserves a spacer for
          // the pin duration (default pinSpacing) so the rest of the page's
          // layout/scroll math stays correct. The hero fades/blurs/scales
          // down while pinned, then the next section scrolls up naturally
          // once the pin range ends.
          const pinTrigger = ScrollTrigger.create({
            trigger: heroEl,
            start: "top top",
            end: "+=100%",
            pin: true,
          });

          gsap.fromTo(
            heroGrid,
            { opacity: 1, scale: 1, filter: "blur(0px)" },
            {
              opacity: 0.1,
              scale: 0.94,
              filter: "blur(6px)",
              ease: "none",
              scrollTrigger: {
                trigger: heroEl,
                start: "top top",
                end: "+=100%",
                scrub: true,
              },
            }
          );

          ScrollTrigger.refresh();
          void pinTrigger;
        }

        const storyPhoto = document.querySelector<HTMLElement>(".story-photo-img");
        if (storyPhoto) {
          gsap.fromTo(
            storyPhoto,
            { y: -36 },
            {
              y: 36,
              ease: "none",
              scrollTrigger: {
                trigger: storyPhoto,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      gsapContext?.revert();
    };
  }, [pathname]);

  return null;
}
