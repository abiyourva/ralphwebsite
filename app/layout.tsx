import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          id="chatbase-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="e0mLMNG0nrlK1y4Zx8dMX";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </body>
    </html>
  );
}
