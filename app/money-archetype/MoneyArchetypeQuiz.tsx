"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { HandHeart, HardHat, Sprout, type LucideIcon } from "lucide-react";

type Screen = "welcome" | "quiz" | "results";
type ArchetypeType = "believer" | "builder" | "steward";

interface AnswerOption {
  value: string;
  label: string;
  archetype: ArchetypeType;
}

interface QuizQuestion {
  id: number;
  type: "multiple-choice" | "open-ended";
  question: string;
  subtitle?: string;
  options?: AnswerOption[];
  placeholder?: string;
}

interface ArchetypeData {
  type: ArchetypeType;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  growthPath: string;
}

interface EmailDay {
  day: number;
  subject: string;
}

const ARCHETYPES: Record<ArchetypeType, ArchetypeData> = {
  believer: {
    type: "believer",
    icon: HandHeart,
    name: "The Believer",
    tagline: "Faith-centered. Values-driven. Divinely provided for.",
    description:
      "You see money as a tool for blessing others and living out your calling. Your faith guides your financial decisions, and you find peace knowing that provision comes from a higher source.",
    strengths: [
      "Generous spirit — you give freely",
      "Peace during financial uncertainty",
      "Strong moral compass in money matters",
      "Community-minded — you lift others",
    ],
    growthPath:
      "Learn to balance faith with practical financial planning. When you combine spiritual wisdom with strategic action, your capacity to give and bless others multiplies.",
  },
  builder: {
    type: "builder",
    icon: HardHat,
    name: "The Builder",
    tagline: "Action-oriented. Entrepreneurial. Wealth and freedom.",
    description:
      "You're wired to create, grow, and scale. Money is energy that fuels your vision. You see opportunities where others see obstacles, and you're not afraid to take calculated risks to build something meaningful.",
    strengths: [
      "High tolerance for calculated risk",
      "Innovative problem-solving mindset",
      "Resilience in the face of failure",
      "Natural vision-casting ability",
    ],
    growthPath:
      "Build sustainable systems and teams so your creations outlast your direct involvement. True wealth is what works when you're not working.",
  },
  steward: {
    type: "steward",
    icon: Sprout,
    name: "The Steward",
    tagline: "Legacy-focused. Protective. Generational thinking.",
    description:
      "You think in decades and generations, not days. Money is a sacred trust to safeguard and grow for those who come after you. Your patience and long-term perspective are rare gifts in a short-term world.",
    strengths: [
      "Exceptional long-term planning ability",
      "Protective instinct for what matters",
      "Wisdom that comes from patience",
      "Disciplined and consistent approach",
    ],
    growthPath:
      "Learn to take calculated risks so your legacy can grow beyond mere preservation. The best stewards don't just protect wealth — they multiply it for future generations.",
  },
};

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "When you think about money, what feeling comes up first?",
    options: [
      { value: "peace", label: "Peace — I trust there's a bigger plan", archetype: "believer" },
      { value: "excitement", label: "Excitement — I see opportunities everywhere", archetype: "builder" },
      { value: "responsibility", label: "Responsibility — I need to protect my family's future", archetype: "steward" },
    ],
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "What's your biggest financial priority right now?",
    options: [
      { value: "faithful-means", label: "Living faithfully within my means", archetype: "believer" },
      { value: "income-streams", label: "Building multiple income streams", archetype: "builder" },
      { value: "generational-wealth", label: "Securing wealth for the next generation", archetype: "steward" },
    ],
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "How do you typically respond to a financial setback?",
    options: [
      { value: "pray-trust", label: "I pray and trust things will work out", archetype: "believer" },
      { value: "pivot", label: "I pivot quickly and find another path", archetype: "builder" },
      { value: "review-protect", label: "I review my plan and protect what I have", archetype: "steward" },
    ],
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "What does true financial success look like to you?",
    options: [
      { value: "give-generously", label: "Having enough to give generously", archetype: "believer" },
      { value: "build-vision", label: "Having the freedom to build my vision", archetype: "builder" },
      { value: "family-secure", label: "Knowing my family is secure for generations", archetype: "steward" },
    ],
  },
  {
    id: 5,
    type: "open-ended",
    question: "Describe your relationship with money in one sentence.",
    subtitle: "Your answer helps personalize your archetype and email sequence.",
    placeholder: "For example: I see money as a tool to build a secure future for my family...",
  },
];

const SEQUENCES: Record<ArchetypeType, EmailDay[]> = {
  believer: [
    { day: 1, subject: "Welcome. Your money story matters." },
    { day: 2, subject: "The lie that faithful people can't build wealth" },
    { day: 3, subject: "What Scripture actually says about prosperity" },
    { day: 4, subject: "Your giving capacity IS your wealth capacity" },
    { day: 5, subject: "The peace that passes financial understanding" },
    { day: 6, subject: "Building a budget that honors your calling" },
    { day: 7, subject: "Your next step: Get notified when BFC launches" },
  ],
  builder: [
    { day: 1, subject: "Welcome. Let's build something that lasts." },
    { day: 2, subject: "The entrepreneur's edge: Vision meets action" },
    { day: 3, subject: "Systems that scale your impact (while you sleep)" },
    { day: 4, subject: "From side hustle to generational asset" },
    { day: 5, subject: "The ownership mindset that changes everything" },
    { day: 6, subject: "Your first 6-figure income blueprint" },
    { day: 7, subject: "Your next step: Get notified when BFC launches" },
  ],
  steward: [
    { day: 1, subject: "Welcome. Your legacy starts today." },
    { day: 2, subject: "The generational wealth blueprint" },
    { day: 3, subject: "Protecting what matters most" },
    { day: 4, subject: "Teaching your children financial wisdom" },
    { day: 5, subject: "Estate planning for people of faith" },
    { day: 6, subject: "The 100-year family vision" },
    { day: 7, subject: "Your next step: Get notified when BFC launches" },
  ],
};

const KEYWORDS: Record<ArchetypeType, string[]> = {
  believer: [
    "faith", "god", "trust", "bless", "provide", "pray", "believe", "spiritual",
    "generous", "gift", "church", "tithe", "divine", "provision", "calling", "purpose",
  ],
  builder: [
    "build", "grow", "create", "hustle", "opportunity", "business", "invest", "scale",
    "income", "freedom", "vision", "entrepreneur", "wealth", "venture", "startup",
  ],
  steward: [
    "family", "legacy", "protect", "save", "future", "generation", "children", "secure",
    "preserve", "heritage", "generational", "safeguard", "plan", "nest", "grandchildren",
  ],
};

function computeScores(answers: Record<number, string>): Record<ArchetypeType, number> {
  const scores: Record<ArchetypeType, number> = {
    believer: 0,
    builder: 0,
    steward: 0,
  };

  for (let i = 0; i < 4; i++) {
    const answer = answers[i];
    if (!answer) continue;
    const option = QUESTIONS[i].options?.find((opt) => opt.value === answer);
    if (option) {
      scores[option.archetype] += 1;
    }
  }

  const openText = (answers[4] ?? "").toLowerCase().trim();
  if (openText) {
    (Object.keys(KEYWORDS) as ArchetypeType[]).forEach((archetype) => {
      KEYWORDS[archetype].forEach((keyword) => {
        if (openText.includes(keyword)) {
          scores[archetype] += 0.5;
        }
      });
    });
  }

  return scores;
}

function pickArchetype(scores: Record<ArchetypeType, number>): ArchetypeType {
  let result: ArchetypeType = "believer";
  let maxScore = -1;
  (Object.keys(scores) as ArchetypeType[]).forEach((key) => {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
      result = key;
    }
  });
  return result;
}

function toPercentages(scores: Record<ArchetypeType, number>): Record<ArchetypeType, number> {
  const total = scores.believer + scores.builder + scores.steward;
  if (total <= 0) return { believer: 0, builder: 0, steward: 0 };

  const keys: ArchetypeType[] = ["believer", "builder", "steward"];
  const rounded = keys.map((key) => Math.round((scores[key] / total) * 100));
  const drift = 100 - rounded.reduce((sum, val) => sum + val, 0);
  const topIndex = keys.reduce(
    (best, key, i) => (scores[key] > scores[keys[best]] ? i : best),
    0
  );
  rounded[topIndex] += drift;

  return { believer: rounded[0], builder: rounded[1], steward: rounded[2] };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function MoneyArchetypeQuiz() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [archetype, setArchetype] = useState<ArchetypeType | null>(null);
  const [scorePercentages, setScorePercentages] = useState<Record<ArchetypeType, number> | null>(null);
  const [welcomeError, setWelcomeError] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  const progress = useMemo(() => {
    if (screen === "welcome") return 0;
    if (screen === "results") return 100;
    return Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100);
  }, [screen, currentQuestion]);

  const currentAnswer = answers[currentQuestion] ?? "";

  const handleStartQuiz = useCallback(() => {
    setWelcomeError(null);
    const trimmedName = userName.trim();
    const trimmedEmail = userEmail.trim();

    if (!trimmedName) {
      setWelcomeError("Please enter your first name.");
      return;
    }
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      setWelcomeError("Please enter a valid email address.");
      return;
    }

    fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage: "started", name: trimmedName, email: trimmedEmail }),
    }).catch((err) => console.error("Quiz lead capture failed:", err));

    setScreen("quiz");
  }, [userName, userEmail]);

  const handleSelectOption = useCallback((value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));
  }, [currentQuestion]);

  const handleOpenEndedChange = useCallback((value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (!currentAnswer.trim()) return;
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const scores = computeScores(answers);
      const result = pickArchetype(scores);
      setArchetype(result);
      setScorePercentages(toPercentages(scores));
      setScreen("results");
      fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stage: "completed",
          name: userName.trim(),
          email: userEmail.trim(),
          archetype: result,
        }),
      }).catch((err) => console.error("Quiz completion sync failed:", err));
    }
  }, [currentAnswer, currentQuestion, answers, userName, userEmail]);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleRetake = useCallback(() => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setAnswers({});
    setArchetype(null);
    setScorePercentages(null);
    setWelcomeError(null);
  }, []);

  const shareText = archetype
    ? `I just found out I'm ${ARCHETYPES[archetype].name} on Ralph Estep Jr.'s Money Archetype quiz. Take the free 2-minute quiz to find yours:`
    : "";

  const handleCopyLink = useCallback(() => {
    if (typeof window === "undefined") return;
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopyStatus("copied");
        setTimeout(() => setCopyStatus("idle"), 2000);
      })
      .catch((err) => console.error("Copy link failed:", err));
  }, []);

  const handleShare = useCallback(
    (network: "x" | "facebook") => {
      if (typeof window === "undefined") return;
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(shareText);
      const shareUrl =
        network === "x"
          ? `https://twitter.com/intent/tweet?text=${text}&url=${url}`
          : `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
    },
    [shareText]
  );

  const canProceed = currentAnswer.trim().length > 0;
  const question = QUESTIONS[currentQuestion];

  return (
    <main className="quiz-main">
      {/* ══ WELCOME SCREEN ══ */}
      {screen === "welcome" && (
        <div className="quiz-screen welcome-grid">
          <div className="welcome-hero">
            <div className="welcome-hero-glow-1" aria-hidden="true" />
            <div className="welcome-hero-glow-2" aria-hidden="true" />
            <p className="eyebrow hero-in" style={{ animationDelay: "0.1s" }}>Free Quiz · 2 Minutes</p>
            <h1 className="hero-in" style={{ animationDelay: "0.25s" }}>
              Discover Your
              <br />
              <em>Money Archetype</em>
            </h1>
            <p className="hero-in" style={{ animationDelay: "0.4s" }}>
              Uncover how you&apos;re wired to relate to wealth, work, and legacy — then
              get a personalized 7-day email sequence built just for you.
            </p>
          </div>

          <div className="welcome-form">
            <p className="eyebrow">Get started</p>
            <h2>Enter your details</h2>
            <p className="welcome-form-sub">
              We&apos;ll send your results and a personalized 7-day email sequence.
            </p>

            <div className="welcome-fields">
              <div>
                <label htmlFor="quiz-name">First Name</label>
                <input
                  id="quiz-name"
                  type="text"
                  className="quiz-input"
                  placeholder="Your first name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="quiz-email">Email Address</label>
                <input
                  id="quiz-email"
                  type="email"
                  className="quiz-input"
                  placeholder="you@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
            </div>

            {welcomeError && <p className="quiz-error" role="alert">{welcomeError}</p>}

            <button type="button" onClick={handleStartQuiz} className="btn-primary gold btn-block">
              Start the Quiz &nbsp;→
            </button>

            <p className="welcome-disclaimer">Your information is secure and never sold.</p>
          </div>
        </div>
      )}

      {/* ══ QUIZ SCREEN ══ */}
      {screen === "quiz" && question && (
        <div className="quiz-screen quiz-body">
          <div>
            <div className="quiz-progress-row">
              <span className="quiz-progress-label">Question {currentQuestion + 1} of {QUESTIONS.length}</span>
              <span className="quiz-progress-pct">{progress}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="quiz-question">
            <h2>{question.question}</h2>
            {question.subtitle && <p>{question.subtitle}</p>}
          </div>

          {question.type === "multiple-choice" && question.options && (
            <div className="opt-list">
              {question.options.map((option) => {
                const isSelected = currentAnswer === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelectOption(option.value)}
                    className={`opt-card${isSelected ? " selected" : ""}`}
                  >
                    <span className="opt-radio" aria-hidden="true" />
                    <span className="opt-label">{option.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {question.type === "open-ended" && (
            <div style={{ marginBottom: "48px" }}>
              <textarea
                className="quiz-input"
                value={currentAnswer}
                onChange={(e) => handleOpenEndedChange(e.target.value)}
                placeholder={question.placeholder}
              />
              <p className="open-ended-hint">This helps personalize your 7-day email sequence.</p>
            </div>
          )}

          <div className="quiz-nav-row">
            <button type="button" onClick={handleBack} disabled={currentQuestion === 0} className="btn-outline">
              ← Back
            </button>
            <button type="button" onClick={handleNext} disabled={!canProceed} className="btn-primary">
              {currentQuestion === QUESTIONS.length - 1 ? "See My Results" : "Next"} →
            </button>
          </div>
        </div>
      )}

      {/* ══ RESULTS SCREEN ══ */}
      {screen === "results" && archetype && (() => {
        const ArchetypeIcon = ARCHETYPES[archetype].icon;
        return (
        <div className="quiz-screen">
          <div className="result-hero-section">
            <div className="result-hero-glow" aria-hidden="true" />
            <div className="result-hero">
              <p className="result-kicker">{userName || "You"}, you are…</p>
              <div className="result-emoji">
                <ArchetypeIcon size={56} strokeWidth={1.5} />
              </div>
              <h1>{ARCHETYPES[archetype].name}</h1>
              <p className="result-tagline">{ARCHETYPES[archetype].tagline}</p>
              <p className="result-description">{ARCHETYPES[archetype].description}</p>
            </div>
          </div>

          <div className="result-details">
            <div className="result-detail-grid">
              <div className="result-card result-card-surface">
                <span className="gold-rule-left gold-rule" style={{ width: "32px", margin: "0 0 16px" }} />
                <h3>Your Money Strengths</h3>
                {ARCHETYPES[archetype].strengths.map((strength, index) => (
                  <div key={index} className="strength-item">
                    <span className="strength-check" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{strength}</span>
                  </div>
                ))}
              </div>

              <div className="result-card result-card-alt">
                <span className="gold-rule-left gold-rule" style={{ width: "32px", margin: "0 0 16px" }} />
                <h3>Your Growth Path</h3>
                <p style={{ fontSize: "16px", lineHeight: 1.82 }}>{ARCHETYPES[archetype].growthPath}</p>
              </div>
            </div>

            {scorePercentages && (
              <div className="result-card breakdown-card">
                <span className="gold-rule-left gold-rule" style={{ width: "32px", margin: "0 0 16px" }} />
                <h3>Your Full Breakdown</h3>
                <div className="breakdown-list">
                  {(Object.keys(ARCHETYPES) as ArchetypeType[])
                    .sort((a, b) => scorePercentages[b] - scorePercentages[a])
                    .map((key) => {
                      const RowIcon = ARCHETYPES[key].icon;
                      return (
                      <div key={key} className="breakdown-row">
                        <div className="breakdown-row-label">
                          <span className="breakdown-row-name"><RowIcon size={15} strokeWidth={1.75} /> {ARCHETYPES[key].name}</span>
                          <span className="breakdown-pct">{scorePercentages[key]}%</span>
                        </div>
                        <div className="breakdown-track">
                          <div
                            className={`breakdown-fill${key === archetype ? " is-primary" : ""}`}
                            style={{ width: `${scorePercentages[key]}%` }}
                          />
                        </div>
                      </div>
                      );
                    })}
                </div>
              </div>
            )}

            <div className="share-card">
              <span className="gold-rule" style={{ width: "32px" }} />
              <h3>Share Your Results</h3>
              <p className="share-card-sub">Know someone who&apos;d benefit from finding their archetype?</p>
              <div className="share-buttons">
                <button type="button" onClick={() => handleShare("x")} className="btn-outline share-btn">
                  Share on X
                </button>
                <button type="button" onClick={() => handleShare("facebook")} className="btn-outline share-btn">
                  Share on Facebook
                </button>
                <button type="button" onClick={handleCopyLink} className="btn-outline share-btn">
                  {copyStatus === "copied" ? "Link Copied ✓" : "Copy Link"}
                </button>
              </div>
            </div>

            <div className="sequence-card">
              <div className="sequence-header">
                <div>
                  <span className="gold-rule-left gold-rule" style={{ width: "32px", margin: "0 0 14px" }} />
                  <h3>Your 7-Day Email Sequence</h3>
                </div>
                <div className="sequence-sent-badge">
                  <span>Sent to {userEmail || "your email"}</span>
                </div>
              </div>
              <div className="seq-item">
                <span className="seq-num">
                  <span>{SEQUENCES[archetype][0].day}</span>
                </span>
                <div>
                  <p>{SEQUENCES[archetype][0].subject}</p>
                  <span className="seq-today-tag">Sending now</span>
                </div>
              </div>
              <div className="seq-locked-row">
                <span className="seq-lock-icon" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </span>
                <p>
                  Plus {SEQUENCES[archetype].length - 1} more emails built for{" "}
                  {ARCHETYPES[archetype].name}, one a day for the rest of the week.
                </p>
              </div>
            </div>

            <div className="result-cta-row">
              <button type="button" onClick={handleRetake} className="btn-outline">
                ↺ Retake Quiz
              </button>
              <Link href="/shows#bfc" className="btn-primary gold">
                Get Notified at Launch →
              </Link>
            </div>
          </div>
        </div>
        );
      })()}
    </main>
  );
}
