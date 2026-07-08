import type { Metadata } from "next";
import Link from "next/link";
import AppointmentPicker from "@/components/AppointmentPicker";
import { TAX_OPTIONS } from "../appointmentSchedules";
import "../schedule.css";

export const metadata: Metadata = {
  title: "Book a Tax Appointment — Ralph Estep Jr., LPA",
  description:
    "Schedule your tax preparation or tax planning appointment with Ralph Estep Jr., LPA.",
};

export default function TaxSchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="tax-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <Link href="/schedule" className="schedule-back rv">← All Scheduling Options</Link>
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
          <AppointmentPicker options={TAX_OPTIONS} icon="🧾" />
        </div>
      </section>
    </>
  );
}
