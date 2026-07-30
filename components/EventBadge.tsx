import Link from "next/link";
import { EVENTS } from "@/lib/events";

export default function EventBadge() {
  const today = new Date().toISOString().slice(0, 10);
  const next = [...EVENTS]
    .filter((event) => event.endDate >= today)
    .sort((a, b) => a.endDate.localeCompare(b.endDate))[0];

  if (!next) return null;

  return (
    <div className="home-announce-bar">
      <Link href={next.href} target="_blank" rel="noopener" className="hero-announce">
        {next.label} <span>{next.ctaLabel}</span>
      </Link>
    </div>
  );
}
