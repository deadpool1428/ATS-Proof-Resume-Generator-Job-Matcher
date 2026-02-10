import { useState } from "react";
import { useResume } from "../context/ResumeContext";

/* =========================
   STOP WORDS
========================= */
const STOP_WORDS = new Set([
  "we","are","looking","for","a","an","the","and","or",
  "to","of","with","in","on","at","by","is","be","as",
  "that","this","it","should","will","have","has","had",
  "candidate","experience","knowledge","skills","able","required"
]);

/* =========================
   NORMALIZE TEXT
========================= */
const normalizeText = (text) => {
  if (typeof text !== "string") return [];
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
};

/* =========================
   BUILD RESUME TEXT
========================= */
const buildResumeText = (resume) => {
  if (!resume) return "";

  const experienceText = Array.isArray(resume.experience)
    ? resume.experience.map(e => `${e.role} ${e.company} ${e.description}`).join(" ")
    : "";

  const educationText = Array.isArray(resume.education)
    ? resume.education.map(e => `${e.degree} ${e.institution} ${e.year}`).join(" ")
    : "";

  const coursesText = Array.isArray(resume.courses)
    ? resume.courses.join(" ")
    : "";

  return `
    ${resume.personal?.name || ""}
    ${resume.personal?.email || ""}
    ${resume.personal?.phone || ""}
    ${resume.personal?.linkedin || ""}

    ${resume.summary || ""}

    Skills:
    ${resume.skills || ""}

    Experience:
    ${experienceText}

    Education:
    ${educationText}

    Courses:
    ${coursesText}

    ${resume.declaration || ""}
  `;
};

export default function ATSAnalyzer() {
  const { resume } = useResume();
  const [jdText, setJdText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = () => {
    const resumeText = buildResumeText(resume);

    const resumeWords = new Set(normalizeText(resumeText));
    const jdWords = Array.from(new Set(normalizeText(jdText)));

    const matchedKeywords = jdWords.filter(w => resumeWords.has(w));
    const missingKeywords = jdWords.filter(w => !resumeWords.has(w));

    const atsScore = jdWords.length
      ? Math.round((matchedKeywords.length / jdWords.length) * 100)
      : 0;

    /* ===== HEATMAP ===== */
    const freq = {};
    normalizeText(resumeText).forEach(w => {
      freq[w] = (freq[w] || 0) + 1;
    });

    const heatmap = {};
    jdWords.forEach(w => {
      if (!freq[w]) heatmap[w] = "missing";
      else if (freq[w] === 1) heatmap[w] = "weak";
      else heatmap[w] = "strong";
    });

    /* ===== COMPLETENESS ===== */
    let completeness = 0;
    if (resumeText.length >= 300) completeness++;
    if (/skills/i.test(resumeText)) completeness++;
    if (/experience|project/i.test(resumeText)) completeness++;
    if (/education/i.test(resumeText)) completeness++;
    if (/@|phone|linkedin/i.test(resumeText)) completeness++;

    const resumeCompleteness = Math.round((completeness / 5) * 100);

    const jobReadinessScore = Math.round(
      atsScore * 0.7 + resumeCompleteness * 0.3
    );

    setResult({
      atsScore,
      resumeCompleteness,
      jobReadinessScore,
      missingKeywords,
      heatmap
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>ATS Analyzer</h3>

      {/* JOB DESCRIPTION */}
      <textarea
        rows="5"
        placeholder="Paste Job Description here"
        value={jdText}
        onChange={(e) => setJdText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          marginBottom: "14px"
        }}
      />

      {/* ANALYZE BUTTON — SAME AS SAVE, SECONDARY COLOR */}
      <button
        onClick={analyzeResume}
        disabled={!jdText}
        style={{
          padding: "10px 24px",
          borderRadius: "6px",
          border: "none",
          fontSize: "14px",
          fontWeight: "600",
          backgroundColor: jdText ? "#0ea5e9" : "#94a3b8", // secondary color
          color: "#ffffff",
          cursor: jdText ? "pointer" : "not-allowed",
          transition: "background-color 0.2s ease"
        }}
      >
        Analyze Resume
      </button>

      {result && (
        <div style={{ marginTop: "24px" }}>
          <p><strong>ATS Match Score:</strong> {result.atsScore}%</p>
          <p><strong>Resume Completeness:</strong> {result.resumeCompleteness}%</p>
          <p><strong>Job Readiness Score:</strong> {result.jobReadinessScore}%</p>

          <p><strong>Missing Keywords:</strong></p>
          <ul>
            {result.missingKeywords.map(word => (
              <li key={word}>{word}</li>
            ))}
          </ul>

          <p><strong>Keyword Heatmap:</strong></p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {Object.entries(result.heatmap).map(([word, strength]) => (
              <span
                key={word}
                style={{
                  padding: "6px 14px",
                  borderRadius: "14px",
                  fontSize: "12px",
                  color: "#fff",
                  backgroundColor:
                    strength === "strong"
                      ? "#16a34a"
                      : strength === "weak"
                      ? "#facc15"
                      : "#dc2626"
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
