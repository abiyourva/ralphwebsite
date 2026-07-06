---
name: content-update
description: Updating site copy, stats, press mentions, podcast appearances, bios, or links on ralphestepjr.com. Use for any "change the number / add the appearance / update the bio" request — the most common task type in this repo.
---

# Content update playbook

Most requests to this repo are content edits. They look trivial and are the
easiest place to ship an inconsistency. Follow this every time.

## Rules

1. **Grep for every occurrence before editing.** Stats and claims are
   intentionally duplicated. Example: the YouTube subscriber count appears in
   `app/page.tsx`, `app/about/page.tsx`, `app/press/page.tsx`, and
   `app/press/PressBios.tsx` (in prose form: "770,000"). Search both the
   numeral ("770K") and the spelled-out form.
2. **Press bios come in three lengths** (tabs in `app/press/PressBios.tsx`).
   A fact change almost always applies to all three.
3. **LPA, never CPA.** Ralph's credential is Licensed Public Accountant.
4. **Match the existing voice**: confident, warm, faith-and-stewardship
   flavored, plain American English. No hype-speak. Read the surrounding
   section before writing new copy.
5. New external links: `target="_blank" rel="noopener"`, real URLs only —
   placeholder `#` links are tracked handoff markers, don't add new ones
   silently.
6. Podcast/press appearances live in data arrays near the top of
   `app/press/page.tsx` (and features on the homepage) — extend the array,
   don't fork the markup.
7. If copy changes affect a page's `<title>`/description, update that route's
   `metadata` export too.

## Done means

- `npm run build` passes.
- A grep for the old value returns zero hits (or only intentional ones you
  can name).
- The edited section renders correctly in **both light and dark themes** if
  styles were touched.
