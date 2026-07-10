import AppointmentPicker from "@/components/AppointmentPicker";
import ScheduleBreadcrumbs from "@/components/ScheduleBreadcrumbs";
import { MONTHLY_OPTIONS } from "../appointmentSchedules";
import { pageMetadata } from "@/lib/seo";
import "../schedule.css";

export const metadata = pageMetadata({
  title: "Book a Monthly Client Check-In — Ralph Estep Jr., LPA",
  description:
    "Existing bookkeeping and advisory clients can schedule their regular monthly check-in with Ralph Estep Jr., LPA here.",
  path: "/schedule/monthly",
});

export default function MonthlySchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="monthly-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <ScheduleBreadcrumbs current="Monthly Clients" />
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Monthly Clients</p>
          <h1 id="monthly-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "14px" }}>
            Book your monthly check-in.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: 0 }}>
            For clients already on an ongoing plan. Choose the type of appointment below.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container-narrow" style={{ maxWidth: "760px" }}>
          <AppointmentPicker options={MONTHLY_OPTIONS} icon="📊" />
        </div>
      </section>
    </>
  );
}
