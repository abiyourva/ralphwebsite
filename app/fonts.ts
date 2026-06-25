import { Lora, DM_Sans } from "next/font/google";

// Lora — serif display. Weights 400/600/700, plus italic 400/600.
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

// DM Sans — body. Weights 300/400/500/600.
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});
