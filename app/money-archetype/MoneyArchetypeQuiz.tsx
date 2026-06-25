"use client";

import { useState, useCallback, useMemo } from "react";

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
  emoji: string;
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
    emoji: "🙏",
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
    emoji: "🏗️",
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
    emoji: "🌱",
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
    { day: 7, subject: "Your next step: Join the BFC community" },
  ],
  builder: [
    { day: 1, subject: "Welcome. Let's build something that lasts." },
    { day: 2, subject: "The entrepreneur's edge: Vision meets action" },
    { day: 3, subject: "Systems that scale your impact (while you sleep)" },
    { day: 4, subject: "From side hustle to generational asset" },
    { day: 5, subject: "The ownership mindset that changes everything" },
    { day: 6, subject: "Your first 6-figure income blueprint" },
    { day: 7, subject: "Your next step: Join the BFC community" },
  ],
  steward: [
    { day: 1, subject: "Welcome. Your legacy starts today." },
    { day: 2, subject: "The generational wealth blueprint" },
    { day: 3, subject: "Protecting what matters most" },
    { day: 4, subject: "Teaching your children financial wisdom" },
    { day: 5, subject: "Estate planning for people of faith" },
    { day: 6, subject: "The 100-year family vision" },
    { day: 7, subject: "Your next step: Join the BFC community" },
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

function calculateArchetype(answers: Record<number, string>): ArchetypeType {
  const scores: Record<ArchetypeType, number> = {
    believer: 0,
    builder: 0,
    steward: 0,
  };

  // Score multiple choice answers (questions 0-3)
  for (let i = 0; i < 4; i++) {
    const answer = answers[i];
    if (!answer) continue;
    const option = QUESTIONS[i].options?.find((opt) => opt.value === answer);
    if (option) {
      scores[option.archetype] += 1;
    }
  }

  // Score open-ended answer (question 4) with keyword matching
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

  // Determine winner (ties resolve to first in order: believer > builder > steward)
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
  const [welcomeError, setWelcomeError] = useState<string | null>(null);

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
      setWelcomeError("Please enter your name.");
      return;
    }
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      setWelcomeError("Please enter a valid email address.");
      return;
    }

    // TODO: wire to email provider / CRM to capture the partial lead
    // immediately (name + email) so abandoned quizzes can still be followed up.
    console.log("Lead captured (quiz started):", { name: trimmedName, email: trimmedEmail });

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
      const result = calculateArchetype(answers);
      setArchetype(result);
      setScreen("results");
      // TODO: wire to email provider / CRM to send the full lead (name,
      // email, archetype, answers) and trigger the personalized 7-day
      // sequence from SEQUENCES[result].
      console.log("Quiz completed:", {
        name: userName.trim(),
        email: userEmail.trim(),
        archetype: result,
        answers,
      });
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
    setWelcomeError(null);
  }, []);

  const canProceed = currentAnswer.trim().length > 0;
  const question = QUESTIONS[currentQuestion];

  return (
    <div className="quiz-wrap">
      {/* Progress bar — visible during quiz and results */}
      {(screen === "quiz" || screen === "results") && (
        <div className="mb-4">
          <div className="quiz-progress-label">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="quiz-progress-track">
            <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* Welcome Screen */}
      {screen === "welcome" && (
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4">
              <div className="quiz-icon-circle" aria-hidden="true">🎯</div>
              <h2>Discover Your Money Archetype</h2>
              <p>
                Take this 2-minute quiz to uncover how you&apos;re wired to relate to wealth,
                work, and legacy.
              </p>
            </div>

            <div className="photo-placeholder quiz-video-placeholder">
              <span className="photo-placeholder-icon">▶️</span>
              Ralph&apos;s 90-second intro video
              <br />
              <small>Video placeholder</small>
            </div>

            <div className="form-group">
              <label htmlFor="quiz-name">First Name</label>
              <input
                id="quiz-name"
                type="text"
                placeholder="Enter your first name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="quiz-email">Email Address</label>
              <input
                id="quiz-email"
                type="email"
                placeholder="you@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            {welcomeError && (
              <p className="quiz-error" role="alert">{welcomeError}</p>
            )}

            <button
              type="button"
              onClick={handleStartQuiz}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Start the Quiz →
            </button>

            <p className="quiz-disclaimer">
              Your information is secure. We&apos;ll send your results and a personalized
              7-day email sequence.
            </p>
          </div>
        </div>
      )}

      {/* Quiz Screen */}
      {screen === "quiz" && question && (
        <div className="card">
          <div className="card-body">
            <p className="eyebrow" style={{ marginBottom: "8px" }}>
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </p>
            <h3>{question.question}</h3>
            {question.subtitle && (
              <p className="mb-3" style={{ fontSize: "0.9rem" }}>{question.subtitle}</p>
            )}

            {question.type === "multiple-choice" && question.options && (
              <div className="quiz-options mt-3">
                {question.options.map((option) => {
                  const isSelected = currentAnswer === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelectOption(option.value)}
                      className={`quiz-option${isSelected ? " selected" : ""}`}
                    >
                      <span className="quiz-option-dot" aria-hidden="true">
                        {isSelected ? "✓" : ""}
                      </span>
                      <span className="quiz-option-label">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {question.type === "open-ended" && (
              <div className="form-group mt-3">
                <textarea
                  value={currentAnswer}
                  onChange={(e) => handleOpenEndedChange(e.target.value)}
                  placeholder={question.placeholder}
                  style={{ minHeight: "120px" }}
                />
                <p className="quiz-textarea-hint">
                  This helps us personalize your 7-day email sequence.
                </p>
              </div>
            )}

            <div className="quiz-actions">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="btn btn-outline-navy"
                style={{ opacity: currentQuestion === 0 ? 0.5 : 1 }}
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                className="btn btn-primary"
                style={{ opacity: canProceed ? 1 : 0.5 }}
              >
                {currentQuestion === QUESTIONS.length - 1 ? "See My Results" : "Next"} →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Screen */}
      {screen === "results" && archetype && (
        <div>
          {/* Archetype Hero */}
          <div className="card quiz-result-hero">
            <div className="card-body">
              <div className="quiz-archetype-emoji" aria-hidden="true">
                {ARCHETYPES[archetype].emoji}
              </div>
              <p className="quiz-result-kicker">You are...</p>
              <h2>{ARCHETYPES[archetype].name}</h2>
              <p className="quiz-result-tagline">{ARCHETYPES[archetype].tagline}</p>
              <p className="mt-3">{ARCHETYPES[archetype].description}</p>
            </div>
          </div>

          {/* Strengths */}
          <div className="card quiz-section">
            <div className="card-body">
              <h3>Your Money Strengths</h3>
              <ul className="check-list">
                {ARCHETYPES[archetype].strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Growth Path */}
          <div className="card quiz-section">
            <div className="card-body">
              <h3>Your Growth Path</h3>
              <p>{ARCHETYPES[archetype].growthPath}</p>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="notice-banner quiz-section quiz-email-confirm">
            <span className="quiz-email-confirm-icon" aria-hidden="true">✓</span>
            <div>
              <strong>Email confirmed</strong>
              <span>Your personalized results will be sent to {userEmail || "your email"}.</span>
            </div>
          </div>

          {/* 7-Day Email Sequence */}
          <div className="card quiz-section">
            <div className="card-body">
              <h3>Your 7-Day Email Sequence</h3>
              <p className="mb-3" style={{ fontSize: "0.88rem" }}>
                A personalized message delivered each day leading up to the BFC launch.
              </p>
              <div className="quiz-day-list">
                {SEQUENCES[archetype].map((day) => (
                  <div key={day.day} className="quiz-day-item">
                    <span className="quiz-day-num" aria-hidden="true">{day.day}</span>
                    <span className="quiz-day-subject">{day.subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Retake CTA */}
          <div className="quiz-actions quiz-section">
            <button type="button" onClick={handleRetake} className="btn btn-outline-navy">
              ↺ Take Quiz Again
            </button>
            <a href="/shows#bfc" className="btn btn-primary">
              Join the BFC Launch →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
