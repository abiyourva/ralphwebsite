import Link from "next/link";

const MESSAGE = "Ralph is speaking live at Podcasting Made Simple — Thu, Oct 15, 2026 · Get Your Ticket";

export default function EventMarquee() {
  return (
    <Link
      href="https://podmatch.com/event"
      target="_blank"
      rel="noopener"
      className="event-marquee"
      aria-label={`${MESSAGE} — opens ticket page in a new tab`}
    >
      <div className="event-marquee-track" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span className="event-marquee-item" key={i}>
            {MESSAGE}
            <span className="event-marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
