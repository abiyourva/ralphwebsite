import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorant, dmSans } from "./fonts";
import SiteChrome from "@/components/SiteChrome";
import CookieBanner from "@/components/CookieBanner";
import ThemeScript from "@/components/ThemeScript";
import InteractionEffects from "@/components/InteractionEffects";
import HomeButton from "@/components/HomeButton";
import HomeScrollFX from "@/components/HomeScrollFX";
import { SITE_URL, SITE_NAME, personJsonLd } from "@/lib/seo";
import "lenis/dist/lenis.css";
import "./globals.css";

const TITLE = "Ralph Estep Jr. — LPA, Author, Podcaster, Business Coach";
const DESCRIPTION =
  "Ralph Estep Jr., LPA, is a business coach, author, and podcaster helping everyday people build real financial confidence — not just informed, but equipped.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/images/ralph-headshot.png" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/ralph-headshot.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeScript />
        <SiteChrome>
          <main>{children}</main>
        </SiteChrome>
        <HomeButton />
        <CookieBanner />
        <InteractionEffects />
        <HomeScrollFX />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
