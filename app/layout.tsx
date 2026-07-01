import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorant, dmSans } from "./fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ThemeScript from "@/components/ThemeScript";
import InteractionEffects from "@/components/InteractionEffects";
import HomeButton from "@/components/HomeButton";
import HomeScrollFX from "@/components/HomeScrollFX";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ralph Estep Jr. — LPA, Author, Podcaster, Business Coach",
  description:
    "Ralph Estep Jr. is a Licensed Public Accountant, business coach, author, and podcaster helping everyday people build real financial confidence. Not just informed. Equipped.",
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
      suppressHydrationWarning
    >
      <body>
        <ThemeScript />
        <Nav />
        {children}
        <Footer />
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
