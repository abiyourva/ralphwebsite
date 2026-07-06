---
name: new-page
description: Adding a new route/page or a significant new section to ralphestepjr.com so it matches the existing design system, animations, theming, and metadata conventions. Use whenever creating a page, landing page, or major section.
---

# New page playbook

## Checklist

1. **Route**: `app/<slug>/page.tsx` + co-located `app/<slug>/<slug>.css`
   imported at the top of the page. Server component by default; extract
   interactive islands into their own `"use client"` components in the same
   folder (see `app/press/PressBios.tsx`, `app/cohost/CohostApplicationForm.tsx`).
2. **Styles**: build from the CSS custom properties in `app/globals.css`
   (colors, spacing, type scale — navy/gold palette, Lora display /
   DM Sans body). No Tailwind, no inline style objects for theming. Add
   `[data-dark]` overrides if the defaults don't already handle dark mode.
3. **Metadata**: export `metadata` with `title` and `description`.
4. **Animations**: static content gets the `.rv` class for the global
   scroll-reveal (handled by `InteractionEffects.tsx` — nothing to wire).
   Cards can use `.card-hover`. Do NOT add new GSAP/Lenis instances without
   replicating `HomeScrollFX.tsx`'s guards (touch, narrow viewport,
   `prefers-reduced-motion`) and full cleanup on unmount — a missing cleanup
   has already caused a production crash here.
5. **Nav**: only add to `components/navLinks.ts` if the page belongs in the
   main nav (it feeds both `Nav.tsx` and `MobileMenu.tsx`); otherwise link
   contextually and/or from `Footer.tsx`.
6. **Copy invariants**: LPA never CPA; internal links are clean routes
   (`/shows#bfc`, not `shows.html`); external links `target="_blank"
   rel="noopener"`.
7. **Forms**: reuse `EmailCaptureForm`/`ContactForm` + a thin `app/api/*`
   route per the kit-integration skill. Never a new form pattern.

## Done means

`npm run build` passes (the new route prerenders); page smoke-checked in
light AND dark theme, desktop and narrow viewport; heading hierarchy is
sane (one `h1`); reveal animations degrade gracefully with
reduced-motion.
