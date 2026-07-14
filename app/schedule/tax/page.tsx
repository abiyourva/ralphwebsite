import AppointmentPicker from "@/components/AppointmentPicker";
import ScheduleBreadcrumbs from "@/components/ScheduleBreadcrumbs";
import { TAX_OPTIONS } from "../appointmentSchedules";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Receipt } from "lucide-react";
import "../schedule.css";

export const metadata = pageMetadata({
  title: "Book a Tax Appointment — Ralph Estep Jr., LPA",
  description:
    "Schedule your tax preparation or tax planning appointment with Ralph Estep Jr., LPA and the team at Saggio Management Group in Middletown, Delaware.",
  path: "/schedule/tax",
});

const BREADCRUMBS = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Scheduling", path: "/schedule" },
  { name: "Tax Appointments", path: "/schedule/tax" },
]);

export default function TaxSchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS) }}
      />
      <header className="schedule-hero" aria-labelledby="tax-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <ScheduleBreadcrumbs current="Tax Appointments" />
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Tax Appointments</p>
          <h1 id="tax-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "14px" }}>
            Book your tax appointment.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: 0 }}>
            Pick virtual or in-person below, then choose an open time.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container-narrow" style={{ maxWidth: "760px" }}>
          <AppointmentPicker options={TAX_OPTIONS} icon={<Receipt size={24} strokeWidth={1.75} />} />
        </div>
      </section>
    </>
  );
}
