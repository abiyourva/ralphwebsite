import Link from "next/link";
import ScheduleBreadcrumbs from "@/components/ScheduleBreadcrumbs";
import { pageMetadata, breadcrumbJsonLd, accountingServiceJsonLd } from "@/lib/seo";
import "./schedule.css";

export const metadata = pageMetadata({
  title: "Book an Appointment — Ralph Estep Jr., LPA",
  description:
    "Schedule a tax appointment, a free discovery call, a monthly check-in, or QuickBooks and payroll support with Ralph Estep Jr., LPA and Saggio Management Group.",
  path: "/schedule",
});

const BREADCRUMBS = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Scheduling", path: "/schedule" },
]);

const CATEGORIES = [
  {
    icon: "🧾",
    title: "Tax Preparation",
    description:
      "Get your taxes prepared and filed — virtually or in person.",
    href: "/schedule/tax",
  },
  {
    icon: "💬",
    title: "Discovery Call or Consultation",
    description:
      "New here? Start with a free call, or book a strategy session.",
    href: "/schedule/discovery",
  },
  {
    icon: "📊",
    title: "I'm a Monthly Client",
    description:
      "Already on an ongoing plan? Book your regular check-in.",
    href: "/schedule/monthly",
  },
  {
    icon: "🧮",
    title: "QuickBooks & Payroll",
    description:
      "QuickBooks help and payroll support with Renee Poole.",
    href: "/schedule/bookkeeping",
  },
];

export default function SchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingServiceJsonLd) }}
      />
      <header className="schedule-hero" aria-labelledby="schedule-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <ScheduleBreadcrumbs />
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Scheduling</p>
          <h1 id="schedule-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "14px" }}>
            What can we help you with?
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: 0 }}>
            Pick the option that fits you best. We&apos;ll walk you through the details,
            then you&apos;ll choose a time on the calendar.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="decision-grid">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`decision-card rv${i > 0 ? ` d${i}` : ""}`}
              >
                <div className="decision-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <span className="decision-arrow">Choose a time →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
