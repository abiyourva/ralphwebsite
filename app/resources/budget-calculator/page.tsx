import type { Metadata } from "next";
import BudgetCalculator from "./BudgetCalculator";
import "./budget-calculator.css";

export const metadata: Metadata = {
  title: "Free Monthly Budget Calculator — Ralph Estep Jr., LPA",
  description:
    "Enter your real numbers and see exactly where you stand in under two minutes. A free, no-shame budget reset from Ralph Estep Jr., LPA — with the 50/30/20 guideline built in.",
};

export default function BudgetCalculatorPage() {
  return (
    <>
      <header className="bc-hero" aria-labelledby="bc-heading">
        <div className="bc-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Free Tool · 2 Minutes</p>
          <h1 id="bc-heading" className="hero-in" style={{ animationDelay: "0.25s" }}>
            The no-shame
            <br />
            <em>budget reset.</em>
          </h1>
          <p className="hero-in" style={{ animationDelay: "0.38s" }}>
            Enter your real numbers and see exactly where you stand — instantly, privately, and
            without judgment. Nothing you type here leaves your browser.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "56px" }}>
        <div className="container">
          <BudgetCalculator />
        </div>
      </section>
    </>
  );
}
