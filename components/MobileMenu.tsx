"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileLinks } from "./navLinks";

type MobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
};

// The slide-down mobile menu. Visibility is driven by the `open` class
// (see `.mobile-menu.open` in globals.css). Tapping a link closes the menu
// via `onNavigate`, mirroring the original main.js behavior.
export default function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`mobile-menu${open ? " open" : ""}`}
      aria-label="Mobile navigation"
    >
      {mobileLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "active" : undefined}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
