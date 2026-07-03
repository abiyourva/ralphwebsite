export type ParsedQA = { question: string; answer: string };
export type ParsedSection = { title: string; items: ParsedQA[] };

// Parses the plain-text blob stored in Kit's "cohost_application" custom
// field (built by CohostApplicationForm's buildBody()) back into
// structured sections for readable rendering.
export function parseApplication(raw: string): { submittedAt: string | null; sections: ParsedSection[] } {
  const lines = raw.split("\n");
  const sections: ParsedSection[] = [];
  let submittedAt: string | null = null;
  let currentSection: ParsedSection | null = null;
  let currentQuestion: string | null = null;
  let currentAnswerLines: string[] = [];

  function flushQuestion() {
    if (currentSection && currentQuestion !== null) {
      currentSection.items.push({ question: currentQuestion, answer: currentAnswerLines.join("\n").trim() });
    }
    currentQuestion = null;
    currentAnswerLines = [];
  }

  for (const line of lines) {
    const submittedMatch = line.match(/^Submitted:\s*(.+)$/);
    if (submittedMatch) {
      submittedAt = submittedMatch[1];
      continue;
    }
    const sectionMatch = line.match(/^===\s*(.+?)\s*===$/);
    if (sectionMatch) {
      flushQuestion();
      currentSection = { title: sectionMatch[1], items: [] };
      sections.push(currentSection);
      continue;
    }
    if (line.startsWith("— ")) {
      flushQuestion();
      currentQuestion = line.slice(2);
      continue;
    }
    if (line.trim() === "") {
      flushQuestion();
      continue;
    }
    if (currentQuestion !== null) {
      currentAnswerLines.push(line);
    }
  }
  flushQuestion();

  return { submittedAt, sections };
}
