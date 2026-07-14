import AppointmentPicker from "@/components/AppointmentPicker";
import ScheduleBreadcrumbs from "@/components/ScheduleBreadcrumbs";
import { DISCOVERY_OPTIONS } from "../appointmentSchedules";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { MessageCircle } from "lucide-react";
import "../schedule.css";

export const metadata = pageMetadata({
  title: "Book a Discovery Call — Ralph Estep Jr., LPA",
  description:
    "Schedule a free discovery call or paid strategy session with Ralph Estep Jr., LPA and Saggio Management Group to talk through your financial situation.",
  path: "/schedule/discovery",
});

const BREADCRUMBS = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Scheduling", path: "/schedule" },
  { name: "Discovery & Consultations", path: "/schedule/discovery" },
]);

export default function DiscoverySchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS) }}
      />
      <header className="schedule-hero" aria-labelledby="discovery-heading" style={{ paddingBottom: "40px" }}>
        <div className="schedule-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative", maxWidth: "680px" }}>
          <ScheduleBreadcrumbs current="Discovery & Consultations" />
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Discovery &amp; Consultations</p>
          <h1 id="discovery-heading" className="hero-in" style={{ animationDelay: "0.25s", marginBottom: "14px" }}>
            Let&apos;s start with a conversation.
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.38s", marginBottom: 0 }}>
            New to the firm? Start with the free call. Need deeper help now? Pick a strategy session below.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container-narrow" style={{ maxWidth: "760px" }}>
          <AppointmentPicker options={DISCOVERY_OPTIONS} icon={<MessageCircle size={24} strokeWidth={1.75} />} />
        </div>
      </section>
    </>
  );
}
