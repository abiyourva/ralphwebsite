"use client";

import { useCallback, useMemo, useState } from "react";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { CURRENCIES, DEFAULT_CURRENCY, formatCurrency, getCurrencySymbol } from "@/lib/currency";

type Bucket = "needs" | "wants" | "savings";

interface ExpenseField {
  key: string;
  label: string;
  bucket: Bucket;
  placeholder: string;
}

const EXPENSE_FIELDS: ExpenseField[] = [
  { key: "housing", label: "Housing (rent or mortgage)", bucket: "needs", placeholder: "1,500" },
  { key: "utilities", label: "Utilities & phone", bucket: "needs", placeholder: "250" },
  { key: "groceries", label: "Groceries", bucket: "needs", placeholder: "500" },
  { key: "transportation", label: "Transportation (car, gas, transit)", bucket: "needs", placeholder: "350" },
  { key: "insurance", label: "Insurance & medical", bucket: "needs", placeholder: "200" },
  { key: "minDebt", label: "Minimum debt payments", bucket: "needs", placeholder: "150" },
  { key: "dining", label: "Dining out & fun", bucket: "wants", placeholder: "250" },
  { key: "subscriptions", label: "Subscriptions & streaming", bucket: "wants", placeholder: "50" },
  { key: "shopping", label: "Shopping & everything else", bucket: "wants", placeholder: "200" },
  { key: "saving", label: "Savings & investing", bucket: "savings", placeholder: "300" },
  { key: "extraDebt", label: "Extra debt payments", bucket: "savings", placeholder: "100" },
];

const BUCKET_META: Record<Bucket, { label: string; target: number; blurb: string }> = {
  needs: { label: "Needs", target: 50, blurb: "Housing, food, transport, minimums" },
  wants: { label: "Wants", target: 30, blurb: "The fun stuff — guilt-free, on purpose" },
  savings: { label: "Savings & extra debt", target: 20, blurb: "Future you, and getting free faster" },
};

function parseAmount(raw: string): number {
  const n = parseFloat(raw.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

// Verdicts in Ralph's voice — warm, no shame, one practical next step.
function getVerdict(
  income: number,
  leftover: number,
  savingsPct: number,
  biggestExpense: string | null,
  fmt: (n: number) => string
) {
  if (leftover < 0) {
    return {
      tone: "over" as const,
      title: "You're spending more than you bring in — and it's going to be okay.",
      body: `You just did the hardest part: looking at the real numbers. That takes courage. This week, pick one thing${
        biggestExpense ? ` — start with ${biggestExpense.toLowerCase()}, your biggest category —` : ""
      } and find a way to trim it. Small moves close the gap.`,
    };
  }
  if (savingsPct >= 20) {
    return {
      tone: "great" as const,
      title: "This is what financial confidence looks like.",
      body: `You're putting ${Math.round(savingsPct)}% toward savings and extra debt payments — right where I'd want you. ${
        leftover > 0
          ? `You also have ${fmt(leftover)} unassigned. Give every dollar a job before the month does it for you.`
          : "Keep going — consistency beats intensity every time."
      }`,
    };
  }
  if (savingsPct >= 10) {
    return {
      tone: "good" as const,
      title: "You're on solid ground — let's build on it.",
      body: `${Math.round(savingsPct)}% is going toward your future, and that's a real start. ${
        leftover > 0
          ? `That ${fmt(leftover)} left over each month? Put even half of it toward savings and you'll cross the 20% mark.`
          : "Look at your wants for one small trim — even a little more a month compounds."
      }`,
    };
  }
  return {
    tone: "start" as const,
    title: "You have room to breathe — now let's put it to work.",
    body: `Money is coming in, bills are getting paid — but almost nothing is going toward future you yet. ${
      leftover > 0
        ? `Start with the ${fmt(leftover)} that's unassigned: even a small automatic transfer on payday changes everything.`
        : "Pick your easiest category to trim and redirect it to savings — automatic, on payday, before you can miss it."
    }`,
  };
}

export default function BudgetCalculator() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState<Record<string, string>>({});
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  const fmt = useCallback((n: number) => formatCurrency(currency, n), [currency]);
  const currencySymbol = useMemo(() => getCurrencySymbol(currency), [currency]);

  const incomeNum = parseAmount(income);

  const { bucketTotals, totalExpenses, leftover, biggestExpense } = useMemo(() => {
    const totals: Record<Bucket, number> = { needs: 0, wants: 0, savings: 0 };
    let biggest: { label: string; amount: number } | null = null;
    for (const field of EXPENSE_FIELDS) {
      const amount = parseAmount(expenses[field.key] ?? "");
      totals[field.bucket] += amount;
      if (field.bucket !== "savings" && amount > 0 && (!biggest || amount > biggest.amount)) {
        biggest = { label: field.label, amount };
      }
    }
    const total = totals.needs + totals.wants + totals.savings;
    return {
      bucketTotals: totals,
      totalExpenses: total,
      leftover: incomeNum - total,
      biggestExpense: biggest?.label ?? null,
    };
  }, [expenses, incomeNum]);

  const hasNumbers = incomeNum > 0 && totalExpenses > 0;
  const savingsPct = incomeNum > 0 ? (bucketTotals.savings / incomeNum) * 100 : 0;
  const verdict = hasNumbers ? getVerdict(incomeNum, leftover, savingsPct, biggestExpense, fmt) : null;

  function setExpense(key: string, value: string) {
    setExpenses((prev) => ({ ...prev, [key]: value }));
  }

  const buckets: Bucket[] = ["needs", "wants", "savings"];

  return (
    <div className="bc-grid">
      {/* ── INPUTS ── */}
      <div className="bc-inputs">
        <div className="card bc-income-card rv">
          <div className="bc-income-head">
            <div>
              <label htmlFor="bc-income" className="bc-income-label">
                Monthly take-home income
              </label>
              <p className="bc-income-hint">What actually lands in your account each month, after taxes.</p>
            </div>
            <div className="currency-select-wrap">
              <label htmlFor="bc-currency" className="sr-only">Currency</label>
              <select
                id="bc-currency"
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
          <div className="bc-field">
            <span className="bc-field-prefix" aria-hidden="true">{currencySymbol}</span>
            <input
              id="bc-income"
              type="text"
              inputMode="decimal"
              placeholder="4,500"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
        </div>

        {buckets.map((bucket) => (
          <div key={bucket} className="card bc-bucket-card rv">
            <div className="bc-bucket-head">
              <h3>{BUCKET_META[bucket].label}</h3>
              <p>{BUCKET_META[bucket].blurb}</p>
            </div>
            {EXPENSE_FIELDS.filter((f) => f.bucket === bucket).map((field) => (
              <div key={field.key} className="bc-row">
                <label htmlFor={`bc-${field.key}`}>{field.label}</label>
                <div className="bc-field bc-field-sm">
                  <span className="bc-field-prefix" aria-hidden="true">{currencySymbol}</span>
                  <input
                    id={`bc-${field.key}`}
                    type="text"
                    inputMode="decimal"
                    placeholder={field.placeholder}
                    value={expenses[field.key] ?? ""}
                    onChange={(e) => setExpense(field.key, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── RESULTS ── */}
      <div className="bc-results">
        <div className="card bc-results-card">
          <p className="eyebrow" style={{ marginBottom: "18px" }}>Where You Stand</p>

          <div className="bc-leftover">
            <span className="bc-leftover-label">Left over each month</span>
            <span
              className={`bc-leftover-num${hasNumbers && leftover < 0 ? " bc-neg" : ""}`}
              aria-live="polite"
            >
              {incomeNum > 0 ? fmt(leftover) : "—"}
            </span>
          </div>

          <div className="bc-bars">
            {buckets.map((bucket) => {
              const actualPct = incomeNum > 0 ? (bucketTotals[bucket] / incomeNum) * 100 : 0;
              const target = BUCKET_META[bucket].target;
              const over = bucket !== "savings" && actualPct > target + 0.5;
              return (
                <div key={bucket} className="bc-bar-row">
                  <div className="bc-bar-meta">
                    <span>{BUCKET_META[bucket].label}</span>
                    <span className={over ? "bc-neg" : undefined}>
                      {incomeNum > 0 ? `${Math.round(actualPct)}%` : "—"}
                      <em> / {target}% guide</em>
                    </span>
                  </div>
                  <div className="bc-bar" role="presentation">
                    <div
                      className={`bc-bar-fill bc-bar-${bucket}${over ? " bc-bar-over" : ""}`}
                      style={{ width: `${Math.min(actualPct, 100)}%` }}
                    />
                    <div className="bc-bar-target" style={{ left: `${target}%` }} />
                  </div>
                </div>
              );
            })}
            <p className="bc-bars-note">Ticks show the 50/30/20 guideline — a starting point, not a report card.</p>
          </div>

          <div className="bc-verdict" aria-live="polite">
            {verdict ? (
              <>
                <h3 className={`bc-verdict-title bc-tone-${verdict.tone}`}>{verdict.title}</h3>
                <p>{verdict.body}</p>
                <p className="bc-verdict-sig">— Ralph</p>
              </>
            ) : (
              <p className="bc-verdict-empty">
                Enter your income and a few expenses, and I&apos;ll show you exactly where you stand — no
                judgment, just the numbers.
              </p>
            )}
          </div>
        </div>

        <div className="card bc-email-card">
          <h3>Want to keep this going?</h3>
          <p>
            Get the spreadsheet version of this budget plus one practical money tip each week — free,
            no fluff, no shame.
          </p>
          <EmailCaptureForm
            className="email-form-light"
            formAriaLabel="Budget spreadsheet signup"
            placeholder="Your email address"
            buttonLabel="Send It"
            successLabel="On its way! ✓"
            location="Budget Calculator"
            endpoint="/api/budget-calculator"
          />
        </div>
      </div>
    </div>
  );
}
