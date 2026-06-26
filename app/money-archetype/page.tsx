import type { Metadata } from "next";
import MoneyArchetypeQuiz from "./MoneyArchetypeQuiz";
import "./money-archetype.css";

export const metadata: Metadata = {
  title: "What's Your Money Archetype? — Ralph Estep Jr.",
  description:
    "Take the free 2-minute quiz to discover whether you're a Believer, Builder, or Steward — and get a personalized 7-day email sequence from Ralph Estep Jr., LPA.",
};

export default function MoneyArchetypePage() {
  return <MoneyArchetypeQuiz />;
}
