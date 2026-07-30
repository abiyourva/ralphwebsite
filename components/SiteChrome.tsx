"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

// Routes that render as standalone, chrome-free pages — no fixed nav or
// multi-column footer, since both would force scrolling on a page that's
// meant to fit a single screen (e.g. /links, opened via an NFC tap).
const CHROME_FREE_PATHS = ["/links"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const chromeFree = CHROME_FREE_PATHS.includes(pathname);

  return (
    <>
      {!chromeFree && <Nav />}
      {children}
      {!chromeFree && <Footer />}
    </>
  );
}
