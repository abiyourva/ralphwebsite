"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { desktopLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

// Pages whose hero section sits on a navy/dark background — the nav needs
// light-colored links here while it's still transparent (pre-scroll).
const DARK_HERO_PATHS = ["/shows", "/speaking", "/resources", "/becoming-financially-confident"];

// Fixed nav bar — transparent over the hero, frosted glass once scrolled.
// Holds the mobile-menu open state and animates the hamburger into an X.
// Active link highlighting uses usePathname().
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onDarkHero = DARK_HERO_PATHS.includes(pathname);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barStyles: React.CSSProperties[] = open
    ? [
        { transform: "translateY(7px) rotate(45deg)" },
        { opacity: 0 },
        { transform: "translateY(-7px) rotate(-45deg)" },
      ]
    : [{}, {}, {}];

  return (
    <>
      <nav
        className={`site-nav${scrolled ? " scrolled" : ""}${onDarkHero && !scrolled ? " nav-on-dark" : ""}`}
        aria-label="Main navigation"
      >
        <div className="nav-brand">
          <Link href="/" className="nav-logo">
            Ralph Estep Jr.
          </Link>
          <ThemeToggle />
        </div>

        <div className="nav-links">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/schedule" className="nav-cta nav-cta-gold">
            Book Now
          </Link>
          <Link href="/contact" className="nav-cta">
            Work With Ralph
          </Link>
        </div>

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
      </nav>

      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </>
  );
}
