"use client";

import { useState } from "react";

type BioKey = "short" | "long";

const BIOS: { key: BioKey; label: string; wordCount: string; body: React.ReactNode; plain: string }[] = [
  {
    key: "short",
    label: "Short Bio",
    wordCount: "(~50 words)",
    body: (
      <p>
        Ralph Estep Jr. is a Licensed Public Accountant, business coach, author, and
        podcaster with over 30 years of experience helping everyday people build real
        financial confidence. He is the host of four shows and founder of Saggio
        Management Group, based in Middletown, Delaware.
      </p>
    ),
    plain:
      "Ralph Estep Jr. is a Licensed Public Accountant, business coach, author, and podcaster with over 30 years of experience helping everyday people build real financial confidence. He is the host of four shows and founder of Saggio Management Group, based in Middletown, Delaware.",
  },
  {
    key: "long",
    label: "Long Bio",
    wordCount: "(~150 words)",
    body: (
      <>
        <p>
          Ralph Estep Jr. is a Licensed Public Accountant (LPA), business coach,
          author, and podcaster with more than 30 years of experience in accounting,
          financial planning, and personal finance education.
        </p>
        <p>
          Ralph is the founder of Saggio Management Group, based in Middletown,
          Delaware, where he has served individuals, families, and businesses across a
          wide range of financial situations. His work is rooted in empathy — the
          belief that real financial change begins when people feel seen, not judged.
        </p>
        <p>
          He is the host of four active shows — including <em>Becoming Financially
          Confident</em>, <em>Financially Confident Christian</em>, <em>Truth Unveiled
          with Ralph</em>, and <em>The Content Creator&apos;s Accountant</em> — and has
          grown a YouTube audience of over 540,000 subscribers. His signature message:{" "}
          <strong>&quot;Not just informed. Equipped.&quot;</strong>
        </p>
      </>
    ),
    plain:
      'Ralph Estep Jr. is a Licensed Public Accountant (LPA), business coach, author, and podcaster with more than 30 years of experience in accounting, financial planning, and personal finance education.\n\nRalph is the founder of Saggio Management Group, based in Middletown, Delaware, where he has served individuals, families, and businesses across a wide range of financial situations. His work is rooted in empathy — the belief that real financial change begins when people feel seen, not judged.\n\nHe is the host of four active shows — including Becoming Financially Confident, Financially Confident Christian, Truth Unveiled with Ralph, and The Content Creator\'s Accountant — and has grown a YouTube audience of over 540,000 subscribers. His signature message: "Not just informed. Equipped."',
  },
];

export default function PressBios() {
  const [copied, setCopied] = useState<BioKey | null>(null);

  function handleCopy(bio: (typeof BIOS)[number]) {
    navigator.clipboard.writeText(bio.plain).then(() => {
      setCopied(bio.key);
      setTimeout(() => setCopied((c) => (c === bio.key ? null : c)), 2000);
    });
  }

  return (
    <>
      {BIOS.map((bio, i) => (
        <div key={bio.key} className={`bio-block rv${i > 0 ? ` d${i}` : ""}`}>
          <div className="bio-block-header">
            <h3>
              {bio.label} <span>{bio.wordCount}</span>
            </h3>
            <button
              type="button"
              className={`copy-btn${copied === bio.key ? " copied" : ""}`}
              onClick={() => handleCopy(bio)}
            >
              {copied === bio.key ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="bio-text">{bio.body}</div>
        </div>
      ))}
    </>
  );
}
