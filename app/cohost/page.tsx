import CohostApplicationForm from "./CohostApplicationForm";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import "./cohost.css";

export const metadata = pageMetadata({
  title: "Podcast Co-Host Application — Ralph Estep Jr.",
  description:
    "Apply to co-host Becoming Financially Confident. We're looking for a real, relatable voice — someone who's faced money challenges, asked the hard questions, and is still figuring things out.",
  path: "/cohost",
});

const BREADCRUMB_JSON_LD = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Co-Host Application", path: "/cohost" },
]);

export default function CohostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <CohostApplicationForm />
    </>
  );
}
