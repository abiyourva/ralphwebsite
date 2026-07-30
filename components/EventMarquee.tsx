import Link from "next/link";

const EVENTS = [
  {
    message: "Ralph is speaking live at Podcasting Made Simple — Thu, Oct 15, 2026 · Get Your Ticket",
    href: "https://podmatch.com/event",
  },
  {
    message: "Ralph is the Title Sponsor of the Empowered Podcasting Conference — Charlotte, NC · Aug 21–23, 2026 · Get Tickets",
    href: "https://empoweredpodcasting.com/",
  },
];

const CYCLES = 4;

export default function EventMarquee() {
  const items = Array.from({ length: CYCLES }).flatMap((_, cycle) =>
    EVENTS.map((event, i) => ({ ...event, key: `${cycle}-${i}` }))
  );

  return (
    <div className="event-marquee" aria-label="Upcoming events">
      <div className="event-marquee-track">
        {items.map((event) => (
          <Link
            key={event.key}
            href={event.href}
            target="_blank"
            rel="noopener"
            className="event-marquee-item"
          >
            {event.message}
            <span className="event-marquee-dot" aria-hidden="true">◆</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
