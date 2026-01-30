const express = require("express");
const router = express.Router();

/* Keyword extractor */
const extractKeywords = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(word => word.length > 2);
};

router.post("/analyze", (req, res) => {
  const { resume, jobDescription } = req.body;

  if (!resume || !jobDescription || !jobDescription.trim()) {
    return res.status(400).json({
      message: "Job Description is required for ATS analysis"
    });
  }

  /* Extract JD keywords */
  const jdKeywords = [...new Set(extractKeywords(jobDescription))];

  /* Resume sections with weights */
  const summaryKeywords = extractKeywords(resume.summary || "");
  const skillsKeywords = extractKeywords(resume.skills.join(" "));
  const experienceKeywords = extractKeywords(
    resume.experience.map(e => e.description || "").join(" ")
  );

  /* Weighted matching */
  let matchedScore = 0;
  let totalScore = jdKeywords.length * 3; // max possible

  const matchedKeywords = [];

  jdKeywords.forEach(word => {
    if (skillsKeywords.includes(word)) {
      matchedScore += 3;
      matchedKeywords.push(word);
    } else if (experienceKeywords.includes(word)) {
      matchedScore += 2;
      matchedKeywords.push(word);
    } else if (summaryKeywords.includes(word)) {
      matchedScore += 1;
      matchedKeywords.push(word);
    }
  });

  const atsScore = Math.min(
    100,
    Math.round((matchedScore / totalScore) * 100)
  );

  const missingKeywords = jdKeywords.filter(
    word => !matchedKeywords.includes(word)
  );

  res.json({
    atsScore,
    matchedKeywords: [...new Set(matchedKeywords)],
    missingKeywords
  });
});

module.exports = router;
