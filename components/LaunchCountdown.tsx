"use client";

import { useEffect, useState } from "react";

// BFC launches September 1, 2026 (Eastern). The date is public on the
// shows page and homepage, so counting down to it is fair game.
const LAUNCH_AT = new Date("2026-09-01T06:00:00-04:00").getTime();

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function partsUntil(now: number): Parts | null {
  const diff = LAUNCH_AT - now;
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

// Renders em dashes until mounted so the server and first client render
// agree (a live clock can't be hydration-safe otherwise).
export default function LaunchCountdown({ label = "Launching in" }: { label?: string }) {
  const [parts, setParts] = useState<Parts | null | "pending">("pending");

  useEffect(() => {
    setParts(partsUntil(Date.now()));
    const id = setInterval(() => setParts(partsUntil(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  if (parts === null) {
    return (
      <p className="launch-countdown-live" role="status">
        🎉 It&apos;s here — the show is live!
      </p>
    );
  }

  const cells: { value: string; unit: string }[] =
    parts === "pending"
      ? [
          { value: "—", unit: "days" },
          { value: "—", unit: "hours" },
          { value: "—", unit: "min" },
          { value: "—", unit: "sec" },
        ]
      : [
          { value: String(parts.days), unit: parts.days === 1 ? "day" : "days" },
          { value: String(parts.hours).padStart(2, "0"), unit: "hours" },
          { value: String(parts.minutes).padStart(2, "0"), unit: "min" },
          { value: String(parts.seconds).padStart(2, "0"), unit: "sec" },
        ];

  return (
    <div className="launch-countdown" role="timer" aria-label={`${label}: countdown to September 1, 2026`}>
      <span className="launch-countdown-label">{label}</span>
      <div className="launch-countdown-cells">
        {cells.map((cell) => (
          <div key={cell.unit} className="launch-countdown-cell">
            <span className="launch-countdown-num">{cell.value}</span>
            <span className="launch-countdown-unit">{cell.unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
