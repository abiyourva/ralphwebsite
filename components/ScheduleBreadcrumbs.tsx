import Link from "next/link";
import { Home } from "lucide-react";

type ScheduleBreadcrumbsProps = {
  current?: string;
};

// Labeled Home / Scheduling / [category] trail shown at the top of the
// hub and all three category pages — a clearer, more obvious way back
// than relying solely on the floating home icon (see HomeButton.tsx).
export default function ScheduleBreadcrumbs({ current }: ScheduleBreadcrumbsProps) {
  return (
    <nav className="schedule-crumbs rv" aria-label="Breadcrumb">
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
        <Home size={13} strokeWidth={2} /> Home
      </Link>
      <span aria-hidden="true">/</span>
      {current ? <Link href="/schedule">Scheduling</Link> : <span aria-current="page">Scheduling</span>}
      {current && (
        <>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </>
      )}
    </nav>
  );
}
