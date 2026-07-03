"use client";

import { useCallback, useRef, useState } from "react";

const RECIPIENT = "rvejrpa@gmail.com";
const SUBJECT = "Podcast Co-Host Application";

const SOUNDS_LIKE_YOU = [
  "I'm naturally curious",
  "I'm a great listener",
  "I'm authentic, relatable, and conversational",
  "I'm comfortable sharing personal experiences when it helps",
  "I'm better at asking questions than giving answers",
  "I'm reliable and professional",
  "I'm excited to help build something from the ground up",
];

const REMOTE_SETUP = [
  "Reliable high-speed internet",
  "A quiet place to record",
  "A working webcam",
  "A decent microphone or headset",
  "A dependable computer",
  "I'd need some help getting set up",
];

const WEEKDAY_COMMITMENT = ["Yes", "Yes, with some flexibility needed", "I'm not sure yet", "No"];

const EASTERN_TIME_FIT = [
  "Works great — I'm in or near Eastern time",
  "Workable — I can adjust to it",
  "Might be tough — let's talk about it",
  "Won't work for me",
];

const START_AVAILABILITY = ["Immediately", "Within 2 weeks", "Within a month"];

const COMFORTABLE_ROLE = ["Yes", "Yes, though I have some questions", "No"];

const HOW_DID_YOU_HEAR = [
  "Social media",
  "A friend or referral",
  "A Facebook group or online community",
  "The host or show directly",
];

const KEEP_ON_FILE = ["Yes", "No"];

type FieldKey =
  | "fullName" | "email" | "location" | "timezone"
  | "moneyStory" | "afraidToAsk" | "moneyJourney"
  | "whyExcited" | "cameraComfort" | "soundsLikeYou" | "scenarioQuestions"
  | "weekdayCommitment" | "easternTimeFit" | "remoteSetup" | "startAvailability" | "comfortableRole"
  | "howDidYouHear" | "keepOnFile";

type State = {
  fullName: string; preferredName: string; email: string; phone: string;
  location: string; timezone: string; links: string;
  moneyStory: string; afraidToAsk: string; moneyJourney: string;
  whyExcited: string; cameraComfort: string; soundsLikeYou: string[]; scenarioQuestions: string; videoLink: string;
  mediaExperience: string; audienceBuilding: string; followingBrand: string;
  weekdayCommitment: string; easternTimeFit: string; remoteSetup: string[];
  startAvailability: string; startAvailabilityOther: string; comfortableRole: string;
  howDidYouHear: string; howDidYouHearOther: string; anythingElse: string; keepOnFile: string;
};

const INITIAL_STATE: State = {
  fullName: "", preferredName: "", email: "", phone: "",
  location: "", timezone: "", links: "",
  moneyStory: "", afraidToAsk: "", moneyJourney: "",
  whyExcited: "", cameraComfort: "", soundsLikeYou: [], scenarioQuestions: "", videoLink: "",
  mediaExperience: "", audienceBuilding: "", followingBrand: "",
  weekdayCommitment: "", easternTimeFit: "", remoteSetup: [],
  startAvailability: "", startAvailabilityOther: "", comfortableRole: "",
  howDidYouHear: "", howDidYouHearOther: "", anythingElse: "", keepOnFile: "",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function CohostApplicationForm() {
  const [form, setForm] = useState<State>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy my answers");
  const bodyRef = useRef("");
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLDivElement | null>>>({});

  const set = useCallback(<K extends keyof State>(key: K, value: State[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleArrayValue = useCallback((key: "soundsLikeYou" | "remoteSetup", value: string) => {
    setForm((prev) => {
      const arr = prev[key];
      const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
      return { ...prev, [key]: next };
    });
  }, []);

  function validate(): FieldKey | null {
    const nextErrors: Partial<Record<FieldKey, boolean>> = {};
    let firstBad: FieldKey | null = null;

    function fail(key: FieldKey) {
      nextErrors[key] = true;
      if (!firstBad) firstBad = key;
    }

    if (!form.fullName.trim()) fail("fullName");
    if (!form.email.trim() || !isValidEmail(form.email)) fail("email");
    if (!form.location.trim()) fail("location");
    if (!form.timezone.trim()) fail("timezone");
    if (!form.moneyStory.trim()) fail("moneyStory");
    if (!form.afraidToAsk.trim()) fail("afraidToAsk");
    if (!form.moneyJourney.trim()) fail("moneyJourney");
    if (!form.whyExcited.trim()) fail("whyExcited");
    if (!form.cameraComfort) fail("cameraComfort");
    if (form.soundsLikeYou.length === 0) fail("soundsLikeYou");
    if (!form.scenarioQuestions.trim()) fail("scenarioQuestions");
    if (!form.weekdayCommitment) fail("weekdayCommitment");
    if (!form.easternTimeFit) fail("easternTimeFit");
    if (form.remoteSetup.length === 0) fail("remoteSetup");
    if (!form.startAvailability || (form.startAvailability === "__OTHER__" && !form.startAvailabilityOther.trim())) fail("startAvailability");
    if (!form.comfortableRole) fail("comfortableRole");
    if (!form.howDidYouHear || (form.howDidYouHear === "__OTHER__" && !form.howDidYouHearOther.trim())) fail("howDidYouHear");
    if (!form.keepOnFile) fail("keepOnFile");

    setErrors(nextErrors);
    return firstBad;
  }

  function buildBody(): string {
    const lines: string[] = [];
    const push = (label: string, value: string) => {
      lines.push("— " + label);
      lines.push(value && value.length ? value : "(no answer)");
      lines.push("");
    };

    lines.push("PODCAST CO-HOST APPLICATION");
    lines.push("Submitted: " + new Date().toLocaleString());
    lines.push("");

    lines.push("=== ABOUT YOU ===");
    push("Full name", form.fullName);
    push("Preferred name", form.preferredName);
    push("Email", form.email);
    push("Phone", form.phone);
    push("Location (city & country)", form.location);
    push("Time zone", form.timezone);
    push("Relevant links", form.links);

    lines.push("=== YOUR MONEY STORY ===");
    push("Financial challenge / turning point / lesson", form.moneyStory);
    push("Money question afraid/embarrassed to ask", form.afraidToAsk);
    push("Where they are on their money journey", form.moneyJourney);

    lines.push("=== YOUR STYLE & FIT ===");
    push("Why this excites them", form.whyExcited);
    push("Comfort on camera/mic (1-5)", form.cameraComfort);
    push("Which sound like you", form.soundsLikeYou.join("; "));
    push("Scenario — questions they'd ask", form.scenarioQuestions);
    push("Video link", form.videoLink);

    lines.push("=== EXPERIENCE (OPTIONAL) ===");
    push("Podcast/broadcast/content experience", form.mediaExperience);
    push("Built an online audience/community", form.audienceBuilding);
    push("Established following / personal brand", form.followingBrand);

    lines.push("=== AVAILABILITY & COMMITMENT ===");
    push("Weekday commitment", form.weekdayCommitment);
    push("Eastern-time fit", form.easternTimeFit);
    push("Remote setup they have", form.remoteSetup.join("; "));
    push("When they could start", form.startAvailability === "__OTHER__" ? "Other: " + form.startAvailabilityOther : form.startAvailability);
    push("Comfortable with part-time role", form.comfortableRole);

    lines.push("=== LAST FEW THINGS ===");
    push("How they heard", form.howDidYouHear === "__OTHER__" ? "Other: " + form.howDidYouHearOther : form.howDidYouHear);
    push("Anything else", form.anythingElse);
    push("May we keep on file / contact", form.keepOnFile);

    return lines.join("\n");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const firstBad = validate();
    if (firstBad) {
      setShowError(true);
      fieldRefs.current[firstBad]?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setShowError(false);

    const body = buildBody();
    bodyRef.current = body;

    try {
      await fetch("/api/cohost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, firstName: form.fullName.split(" ")[0], application: body }),
      });
    } catch (err) {
      console.error("Cohost application submit failed:", err);
    }

    const subject = SUBJECT + (form.fullName ? " — " + form.fullName : "");
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  async function handleCopy() {
    const payload = `To: ${RECIPIENT}\nSubject: ${SUBJECT}\n\n${bodyRef.current}`;
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = payload;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setCopyLabel("Copied! ✓");
    setTimeout(() => setCopyLabel("Copy my answers"), 2500);
  }

  function fieldClass(key: FieldKey) {
    return `cohost-field${errors[key] ? " invalid" : ""}`;
  }

  function setRef(key: FieldKey) {
    return (el: HTMLDivElement | null) => {
      fieldRefs.current[key] = el;
    };
  }

  if (submitted) {
    return (
      <main className="cohost-main">
        <div className="cohost-wrap" style={{ paddingTop: "48px" }}>
          <div className="cohost-confirm">
            <div className="check">✓</div>
            <h2>Thank you for sharing your story with us.</h2>
            <p>
              We read every application personally. If your voice and experience feel like a fit, we&rsquo;ll
              reach out to talk more about the role. We&rsquo;re grateful you took the time. Take care.
            </p>
            <div className="backup">
              <p>
                <strong>Didn&rsquo;t see your email app open?</strong> Copy your answers below and email them to{" "}
                <a href={`mailto:${RECIPIENT}`}>{RECIPIENT}</a>.
              </p>
              <button type="button" className="cohost-copy-btn" onClick={handleCopy}>
                {copyLabel}
              </button>
            </div>
          </div>
          <p className="cohost-footer-note">
            Your responses are sent directly by email to the show. We never share your information.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="cohost-main">
      <header className="cohost-hero">
        <div className="cohost-hero-glow" aria-hidden="true" />
        <div className="cohost-hero-inner">
          <div className="cohost-eyebrow">Now Accepting Applications</div>
          <h1>Podcast Co-Host Application</h1>
          <p>
            An opportunity for a real, relatable voice — someone who&rsquo;s faced money challenges, asked the
            hard questions, and is still figuring things out.
          </p>
          <div className="cohost-hero-note">⏱ About 10 minutes · Just be yourself</div>
        </div>
      </header>

      <div className="cohost-wrap">
        <div className="cohost-intro">
          <p>Thanks for your interest in a podcast co-host opportunity.</p>
          <p>
            Quick heads-up on what this is: this is <strong>NOT</strong> a financial expert role. We&rsquo;re
            looking for a relatable, curious, engaging person who represents the audience we want to serve —
            everyday people who&rsquo;ve faced real money challenges, asked hard questions, made mistakes,
            learned lessons, and are still figuring things out. If you can say &ldquo;I&rsquo;ve been
            there&rdquo; and you love asking the questions others are afraid to ask out loud, we&rsquo;d love
            to hear from you.
          </p>
          <p>
            You do <strong>NOT</strong> need to have your finances all figured out. Real beats perfect here.
            This takes about 10 minutes — just be yourself.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* SECTION 1 */}
          <section className="cohost-section">
            <div className="cohost-sec-head">
              <span className="cohost-sec-num">SECTION 1</span>
              <h2>About You</h2>
            </div>
            <p className="cohost-sec-sub">The basics, so we know who you are and how to reach you.</p>

            <div className={fieldClass("fullName")} ref={setRef("fullName")}>
              <label className="q">Your full name<span className="cohost-req">*</span></label>
              <input type="text" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className="cohost-field">
              <label className="q">What should we call you?</label>
              <p className="cohost-help">A nickname or preferred name, if different from above. Optional.</p>
              <input type="text" value={form.preferredName} onChange={(e) => set("preferredName", e.target.value)} />
            </div>

            <div className={fieldClass("email")} ref={setRef("email")}>
              <label className="q">Best email to reach you<span className="cohost-req">*</span></label>
              <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
              <div className="cohost-field-err">Please enter a valid email address.</div>
            </div>

            <div className="cohost-field">
              <label className="q">Phone number</label>
              <p className="cohost-help">Optional — only used if we move forward.</p>
              <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>

            <div className={fieldClass("location")} ref={setRef("location")}>
              <label className="q">Where are you based? (City &amp; country)<span className="cohost-req">*</span></label>
              <input type="text" value={form.location} onChange={(e) => set("location", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className={fieldClass("timezone")} ref={setRef("timezone")}>
              <label className="q">Your time zone<span className="cohost-req">*</span></label>
              <p className="cohost-help">For example: U.S. Eastern (ET), Central (CT), Pacific (PT), etc.</p>
              <input type="text" value={form.timezone} onChange={(e) => set("timezone", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className="cohost-field">
              <label className="q">Share any relevant links</label>
              <p className="cohost-help">
                Social media, podcast, YouTube, TikTok, website, portfolio — anything that shows who you are.
                One per line. Optional.
              </p>
              <textarea value={form.links} onChange={(e) => set("links", e.target.value)} />
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="cohost-section">
            <div className="cohost-sec-head">
              <span className="cohost-sec-num">SECTION 2</span>
              <h2>Your Money Story</h2>
            </div>
            <p className="cohost-sec-sub">This is the heart of it. Be honest and real — there are no wrong answers.</p>

            <div className={fieldClass("moneyStory")} ref={setRef("moneyStory")}>
              <label className="q">
                Tell us about a financial challenge, turning point, or lesson that shaped your relationship with
                money.<span className="cohost-req">*</span>
              </label>
              <p className="cohost-help">This is the most important question on the form. Take your time.</p>
              <textarea value={form.moneyStory} onChange={(e) => set("moneyStory", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className={fieldClass("afraidToAsk")} ref={setRef("afraidToAsk")}>
              <label className="q">
                What&rsquo;s a money question you&rsquo;ve been afraid or embarrassed to ask out
                loud?<span className="cohost-req">*</span>
              </label>
              <p className="cohost-help">The kind of question a lot of people are quietly wondering too.</p>
              <textarea value={form.afraidToAsk} onChange={(e) => set("afraidToAsk", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className={fieldClass("moneyJourney")} ref={setRef("moneyJourney")}>
              <label className="q">Where are you on your own money journey right now?<span className="cohost-req">*</span></label>
              <p className="cohost-help">You do NOT need to have it all figured out — we&rsquo;re looking for real, not perfect.</p>
              <textarea value={form.moneyJourney} onChange={(e) => set("moneyJourney", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="cohost-section">
            <div className="cohost-sec-head">
              <span className="cohost-sec-num">SECTION 3</span>
              <h2>Your Style &amp; Fit</h2>
            </div>
            <p className="cohost-sec-sub">A little about how you show up and why this excites you.</p>

            <div className={fieldClass("whyExcited")} ref={setRef("whyExcited")}>
              <label className="q">Why does this opportunity excite you?<span className="cohost-req">*</span></label>
              <textarea value={form.whyExcited} onChange={(e) => set("whyExcited", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className={fieldClass("cameraComfort")} ref={setRef("cameraComfort")}>
              <label className="q">
                How comfortable are you speaking on camera or into a microphone?<span className="cohost-req">*</span>
              </label>
              <div className="cohost-scale-row">
                {["1", "2", "3", "4", "5"].map((n) => (
                  <label key={n} className={`cohost-scale-opt${form.cameraComfort === n ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="cameraComfort"
                      value={n}
                      checked={form.cameraComfort === n}
                      onChange={() => set("cameraComfort", n)}
                    />
                    {n}
                  </label>
                ))}
              </div>
              <div className="cohost-scale-labels">
                <span>Brand new to it</span>
                <span>Totally comfortable</span>
              </div>
              <div className="cohost-field-err">Please choose a number.</div>
            </div>

            <div className={fieldClass("soundsLikeYou")} ref={setRef("soundsLikeYou")}>
              <label className="q">Which of these sound like you? (Check all that apply)<span className="cohost-req">*</span></label>
              <div className="cohost-opt-list">
                {SOUNDS_LIKE_YOU.map((option) => {
                  const checked = form.soundsLikeYou.includes(option);
                  return (
                    <label key={option} className={`cohost-opt${checked ? " checked" : ""}`}>
                      <input type="checkbox" checked={checked} onChange={() => toggleArrayValue("soundsLikeYou", option)} />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
              <div className="cohost-field-err">Please check at least one.</div>
            </div>

            <div className={fieldClass("scenarioQuestions")} ref={setRef("scenarioQuestions")}>
              <label className="q">A quick scenario — what questions would you ask?<span className="cohost-req">*</span></label>
              <p className="cohost-help">
                A close friend tells you they just added up their credit card debt for the first time. It&rsquo;s
                $18,000, and they&rsquo;re not sure how it got that bad. You&rsquo;re the audience&rsquo;s voice in
                that moment. What are the first few questions you&rsquo;d want to ask them?
              </p>
              <textarea value={form.scenarioQuestions} onChange={(e) => set("scenarioQuestions", e.target.value)} />
              <div className="cohost-field-err">Please fill this in.</div>
            </div>

            <div className="cohost-field">
              <label className="q">Optional but encouraged: link to a short video of you talking</label>
              <p className="cohost-help">
                60–90 seconds of you being you — your money story, why you, or just saying hi. Paste a link
                (YouTube, Loom, Google Drive, Instagram, etc.). This helps us hear your voice.
              </p>
              <input type="text" value={form.videoLink} onChange={(e) => set("videoLink", e.target.value)} />
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="cohost-section">
            <div className="cohost-sec-head">
              <span className="cohost-sec-num">SECTION 4</span>
              <h2>Experience <span className="optional-tag">(Optional Bonus)</span></h2>
            </div>
            <p className="cohost-sec-sub">Nice to have, but absolutely not required. Skip anything that doesn&rsquo;t apply.</p>

            <div className="cohost-field">
              <label className="q">Any podcast, broadcast, livestream, or content-creation experience?</label>
              <p className="cohost-help">Tell us about it. Optional.</p>
              <textarea value={form.mediaExperience} onChange={(e) => set("mediaExperience", e.target.value)} />
            </div>

            <div className="cohost-field">
              <label className="q">Have you built an online audience or community before?</label>
              <p className="cohost-help">Optional.</p>
              <textarea value={form.audienceBuilding} onChange={(e) => set("audienceBuilding", e.target.value)} />
            </div>

            <div className="cohost-field">
              <label className="q">Do you have an established following or personal brand?</label>
              <p className="cohost-help">If so, where, and roughly how large? Optional.</p>
              <input type="text" value={form.followingBrand} onChange={(e) => set("followingBrand", e.target.value)} />
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="cohost-section">
            <div className="cohost-sec-head">
              <span className="cohost-sec-num">SECTION 5</span>
              <h2>Availability &amp; Commitment</h2>
            </div>
            <p className="cohost-sec-sub">This is a daily live show, so the schedule matters. Please be candid.</p>

            <div className={fieldClass("weekdayCommitment")} ref={setRef("weekdayCommitment")}>
              <label className="q">
                Can you commit to a live show every weekday (Mon–Fri), about 1.5–2 hours each morning including
                prep and show time, plus a weekly planning meeting?<span className="cohost-req">*</span>
              </label>
              <div className="cohost-opt-list">
                {WEEKDAY_COMMITMENT.map((option) => (
                  <label key={option} className={`cohost-opt${form.weekdayCommitment === option ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="weekdayCommitment"
                      checked={form.weekdayCommitment === option}
                      onChange={() => set("weekdayCommitment", option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div className="cohost-field-err">Please choose one.</div>
            </div>

            <div className={fieldClass("easternTimeFit")} ref={setRef("easternTimeFit")}>
              <label className="q">
                The show records live on weekday mornings, U.S. Eastern time. How does that fit your
                schedule?<span className="cohost-req">*</span>
              </label>
              <div className="cohost-opt-list">
                {EASTERN_TIME_FIT.map((option) => (
                  <label key={option} className={`cohost-opt${form.easternTimeFit === option ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="easternTimeFit"
                      checked={form.easternTimeFit === option}
                      onChange={() => set("easternTimeFit", option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div className="cohost-field-err">Please choose one.</div>
            </div>

            <div className={fieldClass("remoteSetup")} ref={setRef("remoteSetup")}>
              <label className="q">What do you have for a remote live show? (Check all that apply)<span className="cohost-req">*</span></label>
              <div className="cohost-opt-list">
                {REMOTE_SETUP.map((option) => {
                  const checked = form.remoteSetup.includes(option);
                  return (
                    <label key={option} className={`cohost-opt${checked ? " checked" : ""}`}>
                      <input type="checkbox" checked={checked} onChange={() => toggleArrayValue("remoteSetup", option)} />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
              <div className="cohost-field-err">Please check at least one.</div>
            </div>

            <div className={fieldClass("startAvailability")} ref={setRef("startAvailability")}>
              <label className="q">If selected, when could you start?<span className="cohost-req">*</span></label>
              <div className="cohost-opt-list">
                {START_AVAILABILITY.map((option) => (
                  <label key={option} className={`cohost-opt${form.startAvailability === option ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="startAvailability"
                      checked={form.startAvailability === option}
                      onChange={() => set("startAvailability", option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
                <label className={`cohost-opt${form.startAvailability === "__OTHER__" ? " checked" : ""}`}>
                  <input
                    type="radio"
                    name="startAvailability"
                    checked={form.startAvailability === "__OTHER__"}
                    onChange={() => set("startAvailability", "__OTHER__")}
                  />
                  <span>Other…</span>
                </label>
              </div>
              <input
                type="text"
                className={`cohost-other-input${form.startAvailability === "__OTHER__" ? " show" : ""}`}
                placeholder="Tell us when"
                value={form.startAvailabilityOther}
                onChange={(e) => set("startAvailabilityOther", e.target.value)}
              />
              <div className="cohost-field-err">Please choose one.</div>
            </div>

            <div className={fieldClass("comfortableRole")} ref={setRef("comfortableRole")}>
              <label className="q">
                This is an ongoing, part-time role — not a full-time salaried job. Are you comfortable with
                that?<span className="cohost-req">*</span>
              </label>
              <div className="cohost-opt-list">
                {COMFORTABLE_ROLE.map((option) => (
                  <label key={option} className={`cohost-opt${form.comfortableRole === option ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="comfortableRole"
                      checked={form.comfortableRole === option}
                      onChange={() => set("comfortableRole", option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div className="cohost-field-err">Please choose one.</div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section className="cohost-section">
            <div className="cohost-sec-head">
              <span className="cohost-sec-num">SECTION 6</span>
              <h2>Last Few Things</h2>
            </div>
            <p className="cohost-sec-sub">Almost done — thank you for sticking with it.</p>

            <div className={fieldClass("howDidYouHear")} ref={setRef("howDidYouHear")}>
              <label className="q">How did you hear about this opportunity?<span className="cohost-req">*</span></label>
              <div className="cohost-opt-list">
                {HOW_DID_YOU_HEAR.map((option) => (
                  <label key={option} className={`cohost-opt${form.howDidYouHear === option ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="howDidYouHear"
                      checked={form.howDidYouHear === option}
                      onChange={() => set("howDidYouHear", option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
                <label className={`cohost-opt${form.howDidYouHear === "__OTHER__" ? " checked" : ""}`}>
                  <input
                    type="radio"
                    name="howDidYouHear"
                    checked={form.howDidYouHear === "__OTHER__"}
                    onChange={() => set("howDidYouHear", "__OTHER__")}
                  />
                  <span>Other…</span>
                </label>
              </div>
              <input
                type="text"
                className={`cohost-other-input${form.howDidYouHear === "__OTHER__" ? " show" : ""}`}
                placeholder="How did you hear?"
                value={form.howDidYouHearOther}
                onChange={(e) => set("howDidYouHearOther", e.target.value)}
              />
              <div className="cohost-field-err">Please choose one.</div>
            </div>

            <div className="cohost-field">
              <label className="q">Anything else you&rsquo;d like us to know?</label>
              <p className="cohost-help">Optional.</p>
              <textarea value={form.anythingElse} onChange={(e) => set("anythingElse", e.target.value)} />
            </div>

            <div className={fieldClass("keepOnFile")} ref={setRef("keepOnFile")}>
              <label className="q">May we keep your application on file and contact you about this opportunity?<span className="cohost-req">*</span></label>
              <div className="cohost-opt-list">
                {KEEP_ON_FILE.map((option) => (
                  <label key={option} className={`cohost-opt${form.keepOnFile === option ? " checked" : ""}`}>
                    <input
                      type="radio"
                      name="keepOnFile"
                      checked={form.keepOnFile === option}
                      onChange={() => set("keepOnFile", option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div className="cohost-field-err">Please choose one.</div>
            </div>
          </section>

          <div className="cohost-submit-card">
            <button type="submit" className="cohost-submit-btn">Submit Application</button>
            {showError && (
              <div className="cohost-error-banner">
                Please review the highlighted questions above — a few required answers are missing.
              </div>
            )}
            <p className="cohost-submit-note">
              When you submit, your email app will open with your application ready to send. Just hit send and
              you&rsquo;re done.
            </p>
          </div>
        </form>

        <p className="cohost-footer-note">
          Your responses are sent directly by email to the show. We never share your information.
        </p>
      </div>
    </main>
  );
}
