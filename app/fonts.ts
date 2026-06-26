import { Cormorant_Garamond, DM_Sans } from "next/font/google";

// Cormorant Garamond — serif display (2026 redesign). Weights 400/500/600/700,
// plus italic 400/600.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// DM Sans — body. Weights 300/400/500/600.
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});
