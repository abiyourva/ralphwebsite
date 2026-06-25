"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { desktopLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";

// Fixed navy nav bar. Holds the mobile-menu open state (ported from the
// hamburger toggle in legacy main.js) and animates the three bars into an X
// when open. Active link highlighting uses usePathname() instead of reading
// location.pathname.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Inline transforms applied to the three hamburger bars when open — same
  // values used in the original main.js.
  const barStyles: React.CSSProperties[] = open
    ? [
        { transform: "translateY(7px) rotate(45deg)" },
        { opacity: 0 },
        { transform: "translateY(-7px) rotate(-45deg)" },
      ]
    : [{}, {}, {}];

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Ralph Estep <span className="accent">Jr.</span>
          </Link>
          <ul className="nav-links" role="list">
            {desktopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn btn-primary">
                Work With Ralph
              </Link>
            </li>
          </ul>
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={barStyles[0]}></span>
            <span style={barStyles[1]}></span>
            <span style={barStyles[2]}></span>
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </>
  );
}
