import type { Metadata } from "next";
import CohostApplicationForm from "./CohostApplicationForm";
import "./cohost.css";

export const metadata: Metadata = {
  title: "Podcast Co-Host Application — Ralph Estep Jr.",
  description:
    "Apply to co-host Becoming Financially Confident. We're looking for a real, relatable voice — someone who's faced money challenges, asked the hard questions, and is still figuring things out.",
};

export default function CohostPage() {
  return <CohostApplicationForm />;
}
