---
name: verify
description: How to verify a change to this site actually works before committing — build gate, dev-server smoke, and the project-specific failure modes to probe (theme, animations, Kit-backed forms). Use before any commit that touches app/, components/, lib/, or middleware.
---

# Verify a change

There is no test suite. Verification is a build gate plus a targeted smoke
of the real page.

## 1. Build gate (always)

```bash
npm run build
```

Must pass with zero type errors and prerender every route. This catches most
regressions. If `node_modules` is missing, `npm install` first.

## 2. Smoke the affected surface (`npm run dev`, then curl or browser)

- Load the changed page. **Then client-side navigate away and back** — the
  historical crash class here is animation effects (GSAP/Lenis) not cleaning
  up on route change, which only breaks on navigation, not first load.
- Check **dark mode** (toggle sets `data-dark="1"` on `<html>`; stored under
  localStorage `ralph-theme`) if any styles changed.
- Check a **narrow viewport** if layout changed — the homepage scroll FX is
  intentionally off below 900px, so mobile renders a different experience.

## 3. Feature-specific checks

- **Kit-backed forms** (`/api/subscribe`, `/api/contact`, `/api/quiz`,
  `/api/cohost`, `/api/bfc-teaser`): without `KIT_API_SECRET` locally these
  502 — that is correct behavior, not a bug. Verify input validation (400 on
  bad email) and the frontend error/success states instead.
- **`/admin/*`**: must return 401 without `ADMIN_USER`/`ADMIN_PASSWORD` set
  (fails closed). Never weaken `middleware.ts` to make local testing easier.
- **Reduced motion**: if you touched animations, confirm behavior with
  `prefers-reduced-motion: reduce` emulated — the site must remain fully
  usable with all FX disabled.

## Report honestly

State what you ran and what you observed. "Build passes" alone is not
verification for user-visible changes.
