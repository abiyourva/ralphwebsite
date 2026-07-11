import AppointmentPicker from "@/components/AppointmentPicker";
import ScheduleBreadcrumbs from "@/components/ScheduleBreadcrumbs";
import { RENEE_OPTIONS } from "../appointmentSchedules";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import "../schedule.css";

export const metadata = pageMetadata({
  title: "Book QuickBooks or Payroll Support — Renee Poole",
  description:
    "Schedule QuickBooks assistance or payroll support with Renee Poole at Saggio Management Group — quick, judgment-free help keeping your books in order.",
  path: "/schedule/bookkeeping",
});

const BREADCRUMBS = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Scheduling", path: "/schedule" },
  { name: "QuickBooks & Payroll Support", path: "/schedule/bookkeeping" },
]);

export default function BookkeepingSchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS) }}
      />
      <header className="schedule-hero" aria-labelledby="bookkeeping-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <ScheduleBreadcrumbs current="QuickBooks & Payroll Support" />
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>QuickBooks &amp; Payroll Support</p>
          <h1 id="bookkeeping-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "14px" }}>
            Book time with Renee.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: 0 }}>
            QuickBooks help and payroll support with Renee Poole. Choose the type of session below.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container-narrow" style={{ maxWidth: "760px" }}>
          <AppointmentPicker options={RENEE_OPTIONS} icon="🧮" />
        </div>
      </section>
    </>
  );
}
