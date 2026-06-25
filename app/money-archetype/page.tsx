import type { Metadata } from "next";
import MoneyArchetypeQuiz from "./MoneyArchetypeQuiz";
import "./money-archetype.css";

export const metadata: Metadata = {
  title: "What's Your Money Archetype? — Ralph Estep Jr.",
  description:
    "Take the free 2-minute quiz to discover whether you're a Believer, Builder, or Steward — and get a personalized 7-day email sequence from Ralph Estep Jr., LPA.",
};

export default function MoneyArchetypePage() {
  return (
    <>
      <header className="page-hero" aria-labelledby="quiz-heading">
        <div className="container-narrow">
          <span className="eyebrow">Free Quiz</span>
          <h1 id="quiz-heading">What&apos;s Your Money Archetype?</h1>
          <span className="gold-rule"></span>
          <p>
            Take this 2-minute quiz to uncover how you&apos;re wired to relate to wealth,
            work, and legacy — plus get a personalized 7-day email sequence from Ralph.
          </p>
        </div>
      </header>

      <section className="section-lg">
        <div className="container-narrow">
          <MoneyArchetypeQuiz />
        </div>
      </section>
    </>
  );
}
