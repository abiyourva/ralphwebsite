import DebtPayoffCalculator from "./DebtPayoffCalculator";
import { pageMetadata } from "@/lib/seo";
import "./debt-payoff.css";

export const metadata = pageMetadata({
  title: "Free Debt Payoff Calculator — Ralph Estep Jr., LPA",
  description:
    "See your debt-free date under the snowball and avalanche methods — instantly, privately, and without judgment. A free tool from Ralph Estep Jr., LPA.",
  path: "/resources/debt-payoff",
});

export default function DebtPayoffPage() {
  return (
    <>
      <header className="dp-hero" aria-labelledby="dp-heading">
        <div className="dp-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Free Tool · 2 Minutes</p>
          <h1 id="dp-heading" className="hero-in" style={{ animationDelay: "0.25s" }}>
            Your debt-free date,
            <br />
            <em>on the calendar.</em>
          </h1>
          <p className="hero-in" style={{ animationDelay: "0.38s" }}>
            List your debts and see exactly when you&apos;ll be free — under both the snowball and
            avalanche methods. Instant, private, and judgment-free. Nothing you type here leaves
            your browser.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "56px" }}>
        <div className="container">
          <DebtPayoffCalculator />
        </div>
      </section>
    </>
  );
}
