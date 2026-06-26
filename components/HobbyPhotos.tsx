"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Hobby = {
  src: string;
  alt: string;
  icon: string;
  title: string;
  description: string;
};

const HOBBIES: Hobby[] = [
  {
    src: "/images/ralph-motorcycle.jpg",
    alt: "Ralph on his motorcycle",
    icon: "🏍️",
    title: "Riding",
    description:
      "There's something about the open road that clears the mind. Ralph rides to decompress, explore, and remind himself that the best views come after the hardest climbs.",
  },
  {
    src: "/images/ralph-softball.jpg",
    alt: "Ralph in his softball uniform",
    icon: "⚾",
    title: "Softball",
    description:
      "Team player on and off the field. Softball keeps Ralph grounded in community, competition, and the joy of showing up — lessons that translate directly into how he coaches.",
  },
];

// Hobby photo grid with hover hint + click-to-expand lightbox (Escape or
// click-anywhere to close). Self-contained since only this page needs it.
export default function HobbyPhotos() {
  const [active, setActive] = useState<Hobby | null>(null);

  useEffect(() => {
    if (!active) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid-2">
        {HOBBIES.map((hobby, i) => (
          <div key={hobby.src} className={`card card-hover rv${i === 1 ? " d1" : ""}`}>
            <button
              type="button"
              className="photo-hover-wrap hobby-photo-btn"
              onClick={() => setActive(hobby)}
              aria-label={`View full photo: ${hobby.alt}`}
            >
              <Image
                src={hobby.src}
                alt={hobby.alt}
                width={1600}
                height={1200}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="photo-overlay">
                <span className="photo-hint">Click to View Full Photo</span>
              </div>
            </button>
            <div className="hobby-card-body">
              <div className="hobby-card-header">
                <span aria-hidden="true">{hobby.icon}</span>
                <h3>{hobby.title}</h3>
              </div>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active.src} alt={active.alt} />
          <span className="lightbox-close" aria-hidden="true">×</span>
        </div>
      )}
    </>
  );
}
