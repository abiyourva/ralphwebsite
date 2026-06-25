"use client";

import { useState } from "react";

type BioKey = "short" | "medium" | "long";

// Press bios in three lengths with tab switching and copy-to-clipboard —
// ports the switchBio()/copyBio() behavior from the original press.html inline
// scripts into React state. The plain-text copy uses each bio's text content.
const bios: { key: BioKey; tabLabel: string; body: React.ReactNode; plain: string }[] = [
  {
    key: "short",
    tabLabel: "Short (50 words)",
    body: (
      <>
        Ralph Estep Jr. is a Licensed Public Accountant (LPA) with 30+ years of
        experience, the host of four podcasts reaching hundreds of thousands of
        listeners, and a business coach dedicated to helping everyday people build real
        financial confidence. His mission: not just informed — equipped.
      </>
    ),
    plain:
      "Ralph Estep Jr. is a Licensed Public Accountant (LPA) with 30+ years of experience, the host of four podcasts reaching hundreds of thousands of listeners, and a business coach dedicated to helping everyday people build real financial confidence. His mission: not just informed — equipped.",
  },
  {
    key: "medium",
    tabLabel: "Medium (150 words)",
    body: (
      <>
        Ralph Estep Jr. is a Licensed Public Accountant (LPA), business coach, author,
        and podcaster with over 30 years of experience helping individuals and small
        businesses in Middletown, Delaware and beyond. He is the host of four active
        shows — including Becoming Financially Confident, Truth Unveiled with Ralph (400K+
        YouTube subscribers), Financially Confident Christian, and The Content Creator&apos;s
        Accountant — reaching hundreds of thousands of listeners across personal finance,
        faith, and creator business topics.
        <br />
        <br />
        Ralph&apos;s origin in finance traces to age 8, when family circumstances placed him
        in a position of significant financial responsibility. That experience shaped his
        core mission: to be the person who puts an arm around someone, tells them the
        truth about their situation, and equips them with the real tools to change it.
        His approach is warm, non-judgmental, and built around the conviction that
        everyone deserves financial confidence — not just information.
      </>
    ),
    plain:
      "Ralph Estep Jr. is a Licensed Public Accountant (LPA), business coach, author, and podcaster with over 30 years of experience helping individuals and small businesses in Middletown, Delaware and beyond. He is the host of four active shows — including Becoming Financially Confident, Truth Unveiled with Ralph (400K+ YouTube subscribers), Financially Confident Christian, and The Content Creator's Accountant — reaching hundreds of thousands of listeners across personal finance, faith, and creator business topics.\n\nRalph's origin in finance traces to age 8, when family circumstances placed him in a position of significant financial responsibility. That experience shaped his core mission: to be the person who puts an arm around someone, tells them the truth about their situation, and equips them with the real tools to change it. His approach is warm, non-judgmental, and built around the conviction that everyone deserves financial confidence — not just information.",
  },
  {
    key: "long",
    tabLabel: "Full Bio",
    body: (
      <>
        Ralph Estep Jr. is a Licensed Public Accountant (LPA), business coach, author, and
        podcaster headquartered in Middletown, Delaware, where he has operated Saggio
        Management Group for over three decades.
        <br />
        <br />
        His work spans accounting, coaching, and media. As the host of four active shows —
        Becoming Financially Confident (launching September 2026), Truth Unveiled with
        Ralph (400,000+ YouTube subscribers), Financially Confident Christian, and The
        Content Creator&apos;s Accountant — Ralph reaches hundreds of thousands of listeners
        with practical, judgment-free financial guidance.
        <br />
        <br />
        Ralph&apos;s origin in finance is as personal as it gets. At age 8, family
        circumstances placed him in a position of financial responsibility that most
        adults never face. Rather than letting that experience leave him bitter or
        avoidant, it ignited a lifelong mission: to be the person who puts an arm around
        someone in a difficult financial moment and says, &quot;It&apos;s going to be okay — and
        here&apos;s how we&apos;re going to get there.&quot;
        <br />
        <br />
        His approach is a deliberate counterpoint to shame-based financial media. Where
        others lecture, Ralph listens. Where others judge, Ralph equips. His upcoming
        budgeting book and 10-part audio/video course, launching alongside Becoming
        Financially Confident in September 2026, reflect the same philosophy: not just
        informed, but equipped.
        <br />
        <br />
        Ralph lives on a compound in Delaware with his wife, rides motorcycles, exercises
        daily, and recently became a grandfather for the first time. He is available for
        podcast guest appearances, conference speaking, and media interviews on personal
        finance, creator economics, and faith-based stewardship.
      </>
    ),
    plain:
      'Ralph Estep Jr. is a Licensed Public Accountant (LPA), business coach, author, and podcaster headquartered in Middletown, Delaware, where he has operated Saggio Management Group for over three decades.\n\nHis work spans accounting, coaching, and media. As the host of four active shows — Becoming Financially Confident (launching September 2026), Truth Unveiled with Ralph (400,000+ YouTube subscribers), Financially Confident Christian, and The Content Creator\'s Accountant — Ralph reaches hundreds of thousands of listeners with practical, judgment-free financial guidance.\n\nRalph\'s origin in finance is as personal as it gets. At age 8, family circumstances placed him in a position of financial responsibility that most adults never face. Rather than letting that experience leave him bitter or avoidant, it ignited a lifelong mission: to be the person who puts an arm around someone in a difficult financial moment and says, "It\'s going to be okay — and here\'s how we\'re going to get there."\n\nHis approach is a deliberate counterpoint to shame-based financial media. Where others lecture, Ralph listens. Where others judge, Ralph equips. His upcoming budgeting book and 10-part audio/video course, launching alongside Becoming Financially Confident in September 2026, reflect the same philosophy: not just informed, but equipped.\n\nRalph lives on a compound in Delaware with his wife, rides motorcycles, exercises daily, and recently became a grandfather for the first time. He is available for podcast guest appearances, conference speaking, and media interviews on personal finance, creator economics, and faith-based stewardship.',
  },
];

export default function PressBios() {
  const [active, setActive] = useState<BioKey>("short");
  const [copied, setCopied] = useState<BioKey | null>(null);

  function copyBio(bio: (typeof bios)[number]) {
    navigator.clipboard.writeText(bio.plain).then(() => {
      setCopied(bio.key);
      setTimeout(() => setCopied((c) => (c === bio.key ? null : c)), 2000);
    });
  }

  return (
    <>
      <div className="bio-tabs" role="tablist">
        {bios.map((bio) => (
          <button
            key={bio.key}
            className={`bio-tab${active === bio.key ? " active" : ""}`}
            role="tab"
            aria-selected={active === bio.key}
            onClick={() => setActive(bio.key)}
          >
            {bio.tabLabel}
          </button>
        ))}
      </div>
      {bios.map((bio) => (
        <div
          key={bio.key}
          className={`bio-content${active === bio.key ? " active" : ""}`}
          id={`bio-${bio.key}`}
          role="tabpanel"
        >
          {bio.body}
          <br />
          <button className="btn btn-outline-navy copy-btn" onClick={() => copyBio(bio)}>
            {copied === bio.key ? "Copied! ✓" : "Copy This Bio"}
          </button>
        </div>
      ))}
    </>
  );
}
