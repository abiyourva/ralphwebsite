import Image from "next/image";

// Curated selection of clean, text/logo-forward covers from the appearances
// archive (no host headshots) — duplicated once in the DOM so the CSS
// marquee animation can loop seamlessly from -50%.
const LOGOS = [
  { src: "/images/appearances/aol.webp", alt: "AOL" },
  { src: "/images/appearances/moneylion.webp", alt: "MoneyLion" },
  { src: "/images/appearances/howtopitchapodcast.webp", alt: "How to Pitch a Podcast" },
  { src: "/images/appearances/socialmedianewslive.webp", alt: "Social Media News Live" },
  { src: "/images/appearances/podcastingmorningshow.webp", alt: "Podcasting Morning Show" },
  { src: "/images/appearances/pastorsandmoney-pastors-retirement-planning.webp", alt: "Pastors & Money Podcast" },
  { src: "/images/appearances/halfwaytosunday-scarcity-shouts-gratitude-whispers-w-ralph-estep-jr-ep-76-5ta0mhfe.webp", alt: "Halfway to Sunday" },
  { src: "/images/appearances/fermenting.webp", alt: "Fermenting: God's Not Done With Me Yet" },
  { src: "/images/appearances/cws.webp", alt: "The CWS Pod" },
  { src: "/images/appearances/aplegal.webp", alt: "AP Legal Zone" },
];

export default function TrustLogos() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className="trust-logos" aria-label="As heard on">
      <div className="trust-logos-fade trust-logos-fade-left" aria-hidden="true" />
      <div className="trust-logos-fade trust-logos-fade-right" aria-hidden="true" />
      <div className="trust-logos-track">
        {row.map((logo, i) => (
          <div className="trust-logo" key={`${logo.src}-${i}`}>
            <Image src={logo.src} alt={logo.alt} width={160} height={160} sizes="80px" />
          </div>
        ))}
      </div>
    </div>
  );
}
