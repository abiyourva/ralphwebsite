"use client";

import { useCallback, useMemo, useState } from "react";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { CURRENCIES, DEFAULT_CURRENCY, formatCurrency, getCurrencySymbol } from "@/lib/currency";
import { X, Mountain, Snowflake } from "lucide-react";

interface DebtRow {
  id: number;
  name: string;
  balance: string;
  apr: string;
  minPayment: string;
}

interface SimDebt {
  balance: number;
  apr: number;
  minPayment: number;
}

interface SimResult {
  months: number;
  totalInterest: number;
  firstWinMonth: number;
  /** True when payments never outpace interest and the balance grows forever. */
  stalled: boolean;
}

const MAX_MONTHS = 600;

function parseAmount(raw: string): number {
  const n = parseFloat(raw.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

// Month-by-month simulation. Order decides where extra dollars go:
// snowball = smallest balance first, avalanche = highest APR first.
// Freed-up minimums roll into the extra payment as each debt clears.
function simulate(debts: SimDebt[], extra: number, order: "snowball" | "avalanche"): SimResult {
  const balances = debts.map((d) => d.balance);
  let totalInterest = 0;
  let firstWinMonth = 0;
  let month = 0;

  while (balances.some((b) => b > 0.005) && month < MAX_MONTHS) {
    month += 1;

    // Accrue interest on open balances.
    for (let i = 0; i < balances.length; i++) {
      if (balances[i] > 0) {
        const interest = balances[i] * (debts[i].apr / 100 / 12);
        balances[i] += interest;
        totalInterest += interest;
      }
    }

    // Pay minimums; freed minimums from cleared debts join the extra pool.
    let pool = extra;
    for (let i = 0; i < balances.length; i++) {
      if (balances[i] <= 0) {
        pool += debts[i].minPayment;
        continue;
      }
      const pay = Math.min(debts[i].minPayment, balances[i]);
      balances[i] -= pay;
      if (pay < debts[i].minPayment) pool += debts[i].minPayment - pay;
    }

    // Direct the pool at open debts in strategy order.
    while (pool > 0.005) {
      const openIdx = balances
        .map((b, i) => ({ b, i }))
        .filter(({ b }) => b > 0.005);
      if (openIdx.length === 0) break;
      openIdx.sort((a, z) =>
        order === "snowball" ? a.b - z.b : debts[z.i].apr - debts[a.i].apr
      );
      const target = openIdx[0].i;
      const pay = Math.min(pool, balances[target]);
      balances[target] -= pay;
      pool -= pay;
    }

    if (firstWinMonth === 0 && balances.some((b) => b <= 0.005)) {
      firstWinMonth = month;
    }
  }

  return {
    months: month,
    totalInterest,
    firstWinMonth,
    stalled: month >= MAX_MONTHS && balances.some((b) => b > 0.005),
  };
}

function payoffDateLabel(monthsFromNow: number): string {
  const d = new Date();
  d.setMonth(d.getMonth() + monthsFromNow);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function durationLabel(months: number): string {
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years === 0) return `${months} month${months === 1 ? "" : "s"}`;
  if (rem === 0) return `${years} year${years === 1 ? "" : "s"}`;
  return `${years} yr ${rem} mo`;
}

let nextId = 3;

export default function DebtPayoffCalculator() {
  const [debts, setDebts] = useState<DebtRow[]>([
    { id: 1, name: "", balance: "", apr: "", minPayment: "" },
    { id: 2, name: "", balance: "", apr: "", minPayment: "" },
  ]);
  const [extra, setExtra] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  const fmt = useCallback((n: number) => formatCurrency(currency, n), [currency]);
  const currencySymbol = useMemo(() => getCurrencySymbol(currency), [currency]);

  function updateDebt(id: number, field: keyof DebtRow, value: string) {
    setDebts((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  }

  function addDebt() {
    setDebts((prev) => [...prev, { id: nextId++, name: "", balance: "", apr: "", minPayment: "" }]);
  }

  function removeDebt(id: number) {
    setDebts((prev) => prev.filter((d) => d.id !== id));
  }

  const extraNum = parseAmount(extra);

  const results = useMemo(() => {
    const simDebts: SimDebt[] = debts
      .map((d) => ({
        balance: parseAmount(d.balance),
        apr: parseAmount(d.apr),
        minPayment: parseAmount(d.minPayment),
      }))
      .filter((d) => d.balance > 0);

    if (simDebts.length === 0) return null;
    // A payment plan needs at least a dollar going somewhere each month.
    if (simDebts.every((d) => d.minPayment <= 0) && extraNum <= 0) return null;

    const totalBalance = simDebts.reduce((sum, d) => sum + d.balance, 0);
    const minimumsOnly = simulate(simDebts, 0, "avalanche");
    const snowball = simulate(simDebts, extraNum, "snowball");
    const avalanche = simulate(simDebts, extraNum, "avalanche");

    return { totalBalance, minimumsOnly, snowball, avalanche, debtCount: simDebts.length };
  }, [debts, extraNum]);

  const stalled = results !== null && results.avalanche.stalled;

  return (
    <div className="dp-grid">
      {/* ── INPUTS ── */}
      <div className="dp-inputs">
        <div className="card dp-card">
          <div className="dp-card-head dp-card-head-row">
            <div>
              <h3>Your debts</h3>
              <p>Credit cards, loans, car notes — whatever you&apos;re carrying. Estimates are fine.</p>
            </div>
            <div className="currency-select-wrap">
              <label htmlFor="dp-currency" className="sr-only">Currency</label>
              <select
                id="dp-currency"
                className="currency-select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="dp-debt-list">
            {debts.map((debt, i) => (
              <fieldset key={debt.id} className="dp-debt">
                <legend className="sr-only">Debt {i + 1}</legend>
                <div className="dp-debt-toprow">
                  <input
                    type="text"
                    className="dp-name"
                    placeholder={`Debt ${i + 1} — e.g. ${i === 0 ? "Visa card" : i === 1 ? "Car loan" : "Student loan"}`}
                    aria-label={`Debt ${i + 1} name`}
                    value={debt.name}
                    onChange={(e) => updateDebt(debt.id, "name", e.target.value)}
                  />
                  {debts.length > 1 && (
                    <button
                      type="button"
                      className="dp-remove"
                      aria-label={`Remove debt ${i + 1}`}
                      onClick={() => removeDebt(debt.id)}
                    >
                      <X size={13} strokeWidth={2} />
                    </button>
                  )}
                </div>
                <div className="dp-debt-fields">
                  <label>
                    <span>Balance</span>
                    <div className="dp-field">
                      <span className="dp-prefix" aria-hidden="true">{currencySymbol}</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="4,000"
                        value={debt.balance}
                        onChange={(e) => updateDebt(debt.id, "balance", e.target.value)}
                      />
                    </div>
                  </label>
                  <label>
                    <span>Interest rate</span>
                    <div className="dp-field dp-field-pct">
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="22"
                        value={debt.apr}
                        onChange={(e) => updateDebt(debt.id, "apr", e.target.value)}
                      />
                      <span className="dp-suffix" aria-hidden="true">%</span>
                    </div>
                  </label>
                  <label>
                    <span>Min. payment</span>
                    <div className="dp-field">
                      <span className="dp-prefix" aria-hidden="true">{currencySymbol}</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="120"
                        value={debt.minPayment}
                        onChange={(e) => updateDebt(debt.id, "minPayment", e.target.value)}
                      />
                    </div>
                  </label>
                </div>
              </fieldset>
            ))}
          </div>

          <button type="button" className="dp-add" onClick={addDebt}>
            + Add another debt
          </button>
        </div>

        <div className="card dp-card">
          <div className="dp-card-head">
            <h3>Extra toward debt each month</h3>
            <p>Beyond the minimums. Even $25 changes the math — try a few numbers and watch.</p>
          </div>
          <div className="dp-field dp-field-extra">
            <span className="dp-prefix" aria-hidden="true">{currencySymbol}</span>
            <input
              type="text"
              inputMode="decimal"
              placeholder="200"
              aria-label="Extra monthly payment"
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      <div className="dp-results">
        <div className="card dp-results-card">
          <p className="eyebrow" style={{ marginBottom: "18px" }}>Your Payoff Plan</p>

          {results === null ? (
            <p className="dp-empty" aria-live="polite">
              Add at least one debt — balance, rate, and payment — and I&apos;ll show you your
              debt-free date under two proven strategies.
            </p>
          ) : stalled ? (
            <div aria-live="polite">
              <h3 className="dp-verdict-title dp-neg">Your payments aren&apos;t keeping up with the interest.</h3>
              <p className="dp-verdict-body">
                At these numbers, the balances grow faster than the payments shrink them — and I
                need you to hear this: that&apos;s a solvable problem, not a character flaw. Add
                whatever extra you can above, even $25. And if there&apos;s truly no room, this is
                exactly the situation a free discovery call is for.
              </p>
              <a href="/schedule/discovery" className="btn btn-gold" style={{ marginTop: "16px" }}>
                Book a Free Discovery Call →
              </a>
            </div>
          ) : (
            <div aria-live="polite">
              <div className="dp-headline">
                <span className="dp-headline-label">
                  Debt-free by
                </span>
                <span className="dp-headline-date">
                  {payoffDateLabel(results.avalanche.months)}
                </span>
                <span className="dp-headline-sub">
                  {durationLabel(results.avalanche.months)} · {fmt(results.totalBalance)} across{" "}
                  {results.debtCount} debt{results.debtCount === 1 ? "" : "s"} · avalanche method
                </span>
              </div>

              <div className="dp-strategies">
                <div className="dp-strategy">
                  <h4 className="dp-strategy-title"><Mountain size={16} strokeWidth={1.75} /> Avalanche</h4>
                  <p className="dp-strategy-tag">Highest interest rate first — saves the most money</p>
                  <dl>
                    <div><dt>Debt-free in</dt><dd>{durationLabel(results.avalanche.months)}</dd></div>
                    <div><dt>Total interest</dt><dd>{fmt(results.avalanche.totalInterest)}</dd></div>
                  </dl>
                </div>
                <div className="dp-strategy">
                  <h4 className="dp-strategy-title"><Snowflake size={16} strokeWidth={1.75} /> Snowball</h4>
                  <p className="dp-strategy-tag">Smallest balance first — fastest first win</p>
                  <dl>
                    <div><dt>Debt-free in</dt><dd>{durationLabel(results.snowball.months)}</dd></div>
                    <div><dt>Total interest</dt><dd>{fmt(results.snowball.totalInterest)}</dd></div>
                    {results.snowball.firstWinMonth > 0 && (
                      <div><dt>First debt gone</dt><dd>{durationLabel(results.snowball.firstWinMonth)}</dd></div>
                    )}
                  </dl>
                </div>
              </div>

              {extraNum > 0 && !results.minimumsOnly.stalled && (
                <p className="dp-savings">
                  Your extra {fmt(extraNum)}/month saves{" "}
                  <strong>{fmt(results.minimumsOnly.totalInterest - results.avalanche.totalInterest)}</strong>{" "}
                  in interest and gets you debt-free{" "}
                  <strong>{durationLabel(results.minimumsOnly.months - results.avalanche.months)}</strong> sooner
                  than minimums alone.
                </p>
              )}

              <p className="dp-note">
                Ralph&apos;s take: the avalanche wins on paper, but the best strategy is the one you&apos;ll
                stick with. If you need a quick win to stay motivated, the snowball&apos;s{" "}
                {results.snowball.firstWinMonth > 0 ? `first payoff in ${durationLabel(results.snowball.firstWinMonth)}` : "early momentum"}{" "}
                is worth every penny of the difference.
              </p>
            </div>
          )}
        </div>

        <div className="card dp-email-card">
          <h3>Want the printable tracker?</h3>
          <p>
            Get the debt payoff tracker worksheet plus one practical money tip each week — free, no
            fluff, no shame.
          </p>
          <EmailCaptureForm
            className="email-form-light"
            formAriaLabel="Debt tracker signup"
            placeholder="Your email address"
            buttonLabel="Send It"
            successLabel="On its way! ✓"
            endpoint="/api/debt-payoff"
          />
        </div>
      </div>
    </div>
  );
}
