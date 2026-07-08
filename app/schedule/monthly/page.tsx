import type { Metadata } from "next";
import Link from "next/link";
import AppointmentPicker from "@/components/AppointmentPicker";
import { MONTHLY_OPTIONS } from "../appointmentSchedules";
import "../schedule.css";

export const metadata: Metadata = {
  title: "Book a Monthly Client Check-In — Ralph Estep Jr., LPA",
  description:
    "Existing bookkeeping and advisory clients can schedule their regular monthly check-in with Ralph Estep Jr., LPA here.",
};

export default function MonthlySchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="monthly-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <Link href="/schedule" className="schedule-back rv">← All Scheduling Options</Link>
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
          <AppointmentPicker options={MONTHLY_OPTIONS} />
        </div>
      </section>
    </>
  );
}
