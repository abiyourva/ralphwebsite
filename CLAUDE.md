# CLAUDE.md — project memory for ralphestepjr-website

Next.js 15 (App Router) + TypeScript + React 19 marketing/brand site for
Ralph Estep Jr. — accountant, author, podcaster, business coach. No database;
Kit (ConvertKit) is the only backend, reached through `lib/kit.ts`.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # REQUIRED before claiming any change works — must pass clean
npm run lint
```

There is no test suite. `npm run build` (type-check + prerender of every
route) is the verification gate, plus a manual smoke of the affected page.
See `.claude/skills/verify/SKILL.md`.

## Non-negotiable invariants

- **Ralph is an LPA (Licensed Public Accountant) — never write "CPA".**
- **No Tailwind, no CSS-in-JS.** The design system is CSS custom properties in
  `app/globals.css`; each route has a co-located stylesheet (`app/about/about.css`).
- `legacy/ralphestepjr/` is the original static site kept as copy/design
  reference. Never ship it, never delete it, never import from it.
- Dark mode is a `data-dark="1"` attribute on `<html>`, set pre-paint by
  `components/ThemeScript.tsx` (localStorage key `ralph-theme`). New styles
  must work in both themes — check `globals.css` for the `[data-dark]` overrides.
- External links: `target="_blank" rel="noopener"`.
- Accessibility survives edits: `aria-label`/`aria-expanded` on the hamburger,
  `role="list"`, `.sr-only`, `prefers-reduced-motion` support.

## Facts that are duplicated on purpose (update ALL instances)

Stats and bio claims appear in multiple places and must stay in sync.
Grep before declaring done:

- YouTube subscriber count ("770K+" / "770,000"): `app/page.tsx`,
  `app/about/page.tsx`, `app/press/page.tsx`, `app/press/PressBios.tsx`.
- Other stats (episodes, downloads, years) follow the same pattern.
- Press bios exist in three lengths in `app/press/PressBios.tsx` — a fact
  change usually touches all three tabs.

## Architecture map

- `app/api/{subscribe,contact,quiz,cohost,bfc-teaser}/route.ts` — thin POST
  handlers; each validates minimally, then calls `createOrUpdateKitSubscriber`
  + `tagKitSubscriber` with a **hardcoded Kit tag ID** (the tag registry lives
  in these files — see `.claude/skills/kit-integration/SKILL.md`).
- `lib/kit.ts` — the only Kit client. Read its comments before touching it;
  they encode production incidents (tag-index lag, rate limiting).
- `middleware.ts` — HTTP Basic Auth on `/admin/*`; fails closed if
  `ADMIN_USER`/`ADMIN_PASSWORD` are unset.
- `app/admin/applications/` — server-rendered reader for co-host applications
  stored as a Kit custom field (`cohost_application`).
- Animation layer (all `"use client"`, mounted in `app/layout.tsx`):
  - `InteractionEffects.tsx` — global `.rv` scroll-reveal + `.card-hover`
    tilt, re-scanned per route via `usePathname()`.
  - `HomeScrollFX.tsx` — homepage-only GSAP + Lenis scroll experience.
    Deliberately disabled on touch/narrow/reduced-motion.
  - `HeroParallax.tsx`, `HomeButton.tsx`, theme toggle, cookie banner.
- `app/money-archetype/MoneyArchetypeQuiz.tsx` — multi-step quiz, posts to
  `/api/quiz` at start and completion (different tags per stage/archetype).

## Environment variables (Vercel)

- `KIT_API_SECRET` — Kit v4 API key (header `X-Kit-Api-Key`).
- `ADMIN_USER`, `ADMIN_PASSWORD` — Basic Auth for `/admin/*`.

None are available locally by default; Kit-backed forms will 502 in local
dev unless you set `KIT_API_SECRET`. That is expected — don't "fix" it.

## Hard-won lessons (each of these was a production bug)

1. **GSAP/Lenis cleanup on route change.** The pinned homepage hero crashed
   client-side navigation until effects properly killed ScrollTrigger/Lenis
   instances in the `useEffect` cleanup (commit `67a9f56`). Any new scroll
   effect must clean up everything it creates and guard with the same
   touch/narrow/reduced-motion checks as `HomeScrollFX.tsx`.
2. **Third-party embeds can take the whole site down.** A Chatbase widget
   caused client-side crashes and was removed (`9a1d9a4`). Vet any new
   third-party script; wrap in error isolation; prefer not adding it.
3. **Kit's tag→subscribers index lags.** Recently tagged subscribers don't
   show up in `/tags/{id}/subscribers` for a long time. Query by custom
   field over a capped newest-first subscriber scan instead (`lib/kit.ts`,
   `getKitSubscribersWithField`).
4. **Kit rate limits.** Uncapped pagination over 1000+ subscribers caused
   "couldn't load" failures on the admin page. Keep scans capped (`maxPages`).
5. **Kit v4 rejects unknown query params** (e.g. an invalid `include=`)
   with a hard error, crashing the page (`9ec966e`). Don't guess API params.

## Known staleness

`README.md`'s "TODO — integration points" §1–2 are done (Kit + API routes are
wired). §3–4 (real photos, some placeholder links) may still be live — check
the code, not the README.
