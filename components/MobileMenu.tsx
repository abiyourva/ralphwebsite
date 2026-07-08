"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileLinks } from "./navLinks";
import ThemeToggle from "./ThemeToggle";

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
      {mobileLinks.map((link) => {
        const isBookNow = link.href === "/schedule";
        const classNames = [
          isBookNow ? "book-now" : undefined,
          pathname === link.href ? "active" : undefined,
        ]
          .filter(Boolean)
          .join(" ") || undefined;
        return (
          <Link key={link.href} href={link.href} className={classNames} onClick={onNavigate}>
            {link.label}
          </Link>
        );
      })}
      <div style={{ padding: "16px 0" }}>
        <ThemeToggle />
      </div>
    </nav>
  );
}
