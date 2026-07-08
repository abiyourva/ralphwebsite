import type { Metadata } from "next";
import AppointmentPicker from "@/components/AppointmentPicker";
import { TAX_OPTIONS, DISCOVERY_OPTIONS, MONTHLY_OPTIONS } from "./appointmentSchedules";
import "./schedule.css";

export const metadata: Metadata = {
  title: "Book an Appointment — Ralph Estep Jr., LPA",
  description:
    "Schedule a tax appointment, a free discovery call, or a monthly client check-in with Ralph Estep Jr., LPA — Saggio Management Group.",
};

export default function SchedulePage() {
  return (
    <>
      <header className="schedule-hero" aria-labelledby="schedule-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Scheduling</p>
          <h1 id="schedule-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "14px" }}>
            Let&apos;s find a time.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: 0 }}>
            Choose your appointment type below, then book — no extra clicks.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container-narrow" style={{ maxWidth: "760px" }}>
          <AppointmentPicker
            groups={[
              { label: "Tax Appointments", icon: "🧾", options: TAX_OPTIONS },
              { label: "Discovery & Consultations", icon: "💬", options: DISCOVERY_OPTIONS },
              { label: "Monthly Clients", icon: "📊", options: MONTHLY_OPTIONS },
            ]}
          />
        </div>
      </section>
    </>
  );
}
