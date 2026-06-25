// Shared navigation link definitions for the desktop nav and mobile menu.

export type NavLink = { href: string; label: string };

// Desktop nav links (the gold "Work With Ralph" button is rendered separately).
export const desktopLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/shows", label: "Shows" },
  { href: "/coaching", label: "Coaching" },
  { href: "/speaking", label: "Speaking" },
  { href: "/resources", label: "Resources" },
  { href: "/press", label: "Press" },
];

// Slide-down mobile menu links (mirrors the original mobile-menu markup).
export const mobileLinks: NavLink[] = [
  { href: "/about", label: "About Ralph" },
  { href: "/shows", label: "Shows & Content" },
  { href: "/coaching", label: "Coaching" },
  { href: "/speaking", label: "Speaking" },
  { href: "/resources", label: "Books & Resources" },
  { href: "/press", label: "Media Kit / Press" },
  { href: "/contact", label: "Contact" },
];
