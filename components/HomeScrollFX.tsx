"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Homepage-only premium scroll experience: eased smooth scroll (Lenis) +
// a pinned hero whose headline scales up while the rest fades before the
// next section scrolls up naturally beneath it, a scroll-linked parallax
// on the story photo, and a pinned horizontal step-through of the "What
// brings you here today?" panels (numbered, one at a time).
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
    let enhancedPanelsEl: HTMLElement | null = null;
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
        const heroHeading = document.getElementById("hero-heading");
        const heroFadeEls = document.querySelectorAll<HTMLElement>(
          ".hero-eyebrow, .hero-sub, .hero-tagline, .hero-cta, .hero-photo-col"
        );

        if (heroEl && heroHeading) {
          // Pinned hero: headline scales up dramatically while the rest of
          // the hero content fades out, then the next section scrolls up
          // naturally once the pin range ends (default pinSpacing keeps
          // the page's scroll math correct).
          //
          // Important: pin + the scrubbed animations must share ONE
          // ScrollTrigger (via a timeline) rather than separate
          // ScrollTrigger.create() calls on the same element — creating
          // the pin first and additional triggers on the same trigger
          // afterward makes GSAP recompute their start/end against the
          // already-pinned (spacer-adjusted) layout, offsetting them to
          // start only after the pin ends instead of during it.
          const heroTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "+=100%",
              scrub: true,
              pin: true,
            },
          });

          heroTl.fromTo(
            heroHeading,
            { scale: 1 },
            { scale: 1.35, transformOrigin: "0% 50%", ease: "none" },
            0
          );

          if (heroFadeEls.length) {
            heroTl.fromTo(heroFadeEls, { opacity: 1 }, { opacity: 0, ease: "none" }, 0);
          }
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

        // "What brings you here today?" — horizontal scroll-through panels.
        // Standard GSAP recipe: pin the viewport and translate the track
        // left by exactly its overflow width as the user scrolls, so each
        // numbered panel steps through in turn.
        const panelsViewport = document.querySelector<HTMLElement>(".path-panels-viewport");
        const panelsTrack = document.querySelector<HTMLElement>(".path-panels-track");
        if (panelsViewport && panelsTrack) {
          panelsViewport.classList.add("pv-enhanced");
          enhancedPanelsEl = panelsViewport;

          gsap.to(panelsTrack, {
            x: () => -(panelsTrack.scrollWidth - panelsViewport.clientWidth),
            ease: "none",
            scrollTrigger: {
              trigger: panelsViewport,
              start: "top top",
              end: () => "+=" + (panelsTrack.scrollWidth - panelsViewport.clientWidth),
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        }

        ScrollTrigger.refresh();
      });
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      gsapContext?.revert();
      enhancedPanelsEl?.classList.remove("pv-enhanced");
    };
  }, [pathname]);

  return null;
}
