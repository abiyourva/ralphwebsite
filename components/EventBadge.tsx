import Link from "next/link";

export default function EventBadge() {
  return (
    <div className="home-announce-bar">
      <Link href="https://empoweredpodcasting.com/" target="_blank" rel="noopener" className="hero-announce">
        Title Sponsor · Empowered Podcasting Conference — Aug 21&ndash;23, 2026{" "}
        <span>Get Tickets →</span>
      </Link>
    </div>
  );
}
