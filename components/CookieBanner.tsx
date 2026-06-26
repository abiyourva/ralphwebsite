"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

// Simple cookie-consent banner. Shows once per browser (remembered via
// localStorage) and dismisses on Accept. Backs up the cookie disclosure
// already on the privacy policy page.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <p>
        This site uses cookies for analytics and to improve your experience. See our{" "}
        <Link href="/privacy">Privacy Policy</Link> for details.
      </p>
      <button type="button" className="btn btn-gold" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
}
