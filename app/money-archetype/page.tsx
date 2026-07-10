import MoneyArchetypeQuiz from "./MoneyArchetypeQuiz";
import { pageMetadata } from "@/lib/seo";
import "./money-archetype.css";

export const metadata = pageMetadata({
  title: "What's Your Money Archetype? — Ralph Estep Jr.",
  description:
    "Take the free 2-minute quiz to discover whether you're a Believer, Builder, or Steward — and get a personalized 7-day email sequence from Ralph Estep Jr., LPA.",
  path: "/money-archetype",
});

export default function MoneyArchetypePage() {
  return <MoneyArchetypeQuiz />;
}
