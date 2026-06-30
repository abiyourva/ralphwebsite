"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const COOKIE_STORAGE_KEY = "cookie-consent";

// Floating "back to home" button, fixed bottom-right. Hidden on the
// homepage itself since it would be redundant there. Shifts up while the
// cookie banner is still showing so the two don't overlap.
export default function HomeButton() {
  const pathname = usePathname();
  const [liftForCookieBanner, setLiftForCookieBanner] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setLiftForCookieBanner(!window.localStorage.getItem(COOKIE_STORAGE_KEY));
  }, []);

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className={`home-button${liftForCookieBanner ? " lifted" : ""}`}
      aria-label="Back to home"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5 12 3l9 6.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    </Link>
  );
}
