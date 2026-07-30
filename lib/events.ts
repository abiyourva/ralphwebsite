// Registry of upcoming events/promos shown as a homepage badge (see
// components/EventBadge.tsx). Whichever entry has the soonest endDate that
// hasn't passed yet is shown automatically; once every endDate has passed,
// the badge disappears on its own. Add new events here as they come up.

export type SiteEvent = {
  slug: string;
  label: string;
  ctaLabel: string;
  href: string;
  endDate: string; // ISO date — last day this entry should still show
};

export const EVENTS: SiteEvent[] = [
  {
    slug: "empowered-podcasting-conference",
    label: "The Content Creator's Accountant is a Title Sponsor of Empowered Podcasting Conference — Aug 21–23, 2026",
    ctaLabel: "Get Tickets →",
    href: "https://empoweredpodcasting.com/",
    endDate: "2026-08-23",
  },
  {
    slug: "podcasting-made-simple-live",
    label: "Ralph is speaking live at Podcasting Made Simple — Oct 15, 2026",
    ctaLabel: "Get Your Ticket →",
    href: "https://podmatch.com/event",
    endDate: "2026-10-15",
  },
];
