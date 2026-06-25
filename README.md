# Ralph Estep Jr. — Website

A Next.js (App Router + TypeScript) port of the original 10-page static site for
Ralph Estep Jr. — Licensed Public Accountant (LPA), author, podcaster, and
business coach. All copy, structure, links, and styling were ported faithfully
from the original static site in [`legacy/ralphestepjr/`](legacy/ralphestepjr/),
which remains in the repo as the source of truth.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Plain global CSS** with CSS custom properties (no Tailwind). The full design
  system from the original `style.css` lives in [`app/globals.css`](app/globals.css).
  Page-specific styles are co-located per route (e.g. `app/home.css`,
  `app/about/about.css`).
- **Fonts** via `next/font/google`: **Lora** (serif display, weights 400/600/700
  + italic 400/600) and **DM Sans** (body, weights 300/400/500/600), wired up in
  [`app/fonts.ts`](app/fonts.ts) and exposed to the CSS as `--font-lora` /
  `--font-dm-sans`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (passes with no type errors)
npm run start    # serve the production build
npm run lint
```

## Project structure

```
app/
  layout.tsx            # root layout — Nav, MobileMenu, Footer on every page; fonts
  globals.css           # ported design system (CSS variables + components)
  fonts.ts              # next/font Lora + DM Sans
  page.tsx + home.css   # /            (home)
  about/                # /about
  shows/                # /shows   (anchors #bfc #fcc #truth #content-creator)
  coaching/             # /coaching
  speaking/             # /speaking
  resources/            # /resources
  press/                # /press   (PressBios client component: tabs + copy)
  contact/              # /contact (ContactInquiry client component)
  privacy/              # /privacy
  terms/                # /terms
components/
  Nav.tsx               # fixed navy nav; holds mobile-menu state + hamburger→X
  MobileMenu.tsx        # slide-down mobile menu
  Footer.tsx            # 4-column footer + bottom bar
  EmailCaptureForm.tsx  # reusable email capture (success state)
  ContactForm.tsx       # reusable contact form (success state)
  navLinks.ts           # shared nav link data
legacy/ralphestepjr/    # original static site (source of truth — do not ship)
public/
```

### Routing notes

All internal links use clean routes (`/about` instead of `about.html`), including
in-page anchors like `/shows#bfc`. Active nav highlighting uses `usePathname()`.

## Client-side behavior (ported from the original `main.js`)

- **Mobile menu** — `Nav.tsx` holds open/close state with `useState`; the three
  hamburger bars animate into an X, and tapping a link closes the menu.
- **Active nav link** — highlighted via `usePathname()`.
- **Email capture** — `EmailCaptureForm` prevents default on submit, swaps the
  button into a disabled green "You're in! ✓" success state, and disables the
  input. Used on the home, shows, and resources pages.
- **Contact form** — `ContactForm` uses the same pattern with a "Message sent! ✓"
  success state. Used on the coaching, speaking, and contact pages.
- **Press bios** — `app/press/PressBios.tsx` ports the bio length tabs and
  copy-to-clipboard buttons.
- **Contact inquiry** — `app/contact/ContactInquiry.tsx` ports the inquiry-type
  selector, the dynamic routing note, and the subject-line placeholder.

## TODO — integration points before launch

These are intentionally left unwired (see the `// TODO` comments in the code):

1. **Email provider** — `components/EmailCaptureForm.tsx`. Wire the submit
   handler to Kit/ConvertKit, MailerLite, or similar. (Powers the home email
   capture, the BFC launch notification on `/shows`, the book-launch notify on
   `/resources`, and the budget-worksheet / weekly-tips signups.)
2. **Contact form endpoint** — `components/ContactForm.tsx`. Wire to Formspree,
   Netlify Forms, or a custom API route. (Powers the coaching, speaking, and
   contact forms.)
3. **Real photos** — replace the dashed "Replace with…" placeholder blocks. They
   are intentional handoff markers: hero headshot and lifestyle photo on `/`,
   sidebar headshot on `/about`, book cover on `/resources`, and the photo /
   one-sheet download links on `/press`.
4. **External / placeholder links** — the `#` platform links on `/shows`, the
   photo + PDF download links and publicist email on `/press`, and the
   appearance/press-mention placeholders on `/speaking` and `/press`.

## Preserved details

- External links open in new tabs with `rel="noopener"`: Saggio Management Group
  (`saggioaccounting.com`), the Content Creator's Accountant free audit
  (`contentcreatorsaccountant.com/audit`), and the `mailto:ralph@askralph.com`.
- Photo placeholder blocks are kept exactly as-is (handoff markers).
- Accessibility attributes are preserved: `aria-label`, `aria-expanded` on the
  hamburger, `role="list"`, `sr-only` utility, the `prefers-reduced-motion`
  media query, and the heading structure.
- Per-page `<title>` and meta description are moved into each route's `metadata`
  export (the home page uses the site default in `app/layout.tsx`).
- Ralph's credential is **LPA / Licensed Public Accountant** everywhere — never
  CPA.
