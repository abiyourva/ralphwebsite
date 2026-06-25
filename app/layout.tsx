import type { Metadata } from "next";
import { lora, dmSans } from "./fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
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
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
