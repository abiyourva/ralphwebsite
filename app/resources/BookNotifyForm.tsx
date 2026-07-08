"use client";

import { useEffect, useRef, useState } from "react";

// Real notify flow for the book cards (previously an inert label): click
// reveals an inline email field, submit posts to /api/book-notify, which
// tags the subscriber for that book's launch list in Kit.
export default function BookNotifyForm({ book }: { book: "bfc" | "cca" }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/book-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, book }),
      });
      if (!res.ok) throw new Error("notify failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="book-notify-done">You&apos;re on the list ✓</p>;
  }

  if (!open) {
    return (
      <button type="button" className="book-notify-btn" onClick={() => setOpen(true)}>
        Notify Me When Available →
      </button>
    );
  }

  return (
    <>
      <form className="book-notify-form" aria-label="Book launch notification signup" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "sending"}
        />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "…" : "Notify Me"}
        </button>
      </form>
      {status === "error" && (
        <p role="alert" className="book-notify-error">
          Something went wrong — please try again.
        </p>
      )}
    </>
  );
}
