const express = require("express");
const Resume = require("../models/Resume");

const router = express.Router();

/**
 * SAVE RESUME
 * POST /api/resume
 */
router.post("/", async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({
      message: "Failed to save resume",
      error: error.message
    });
  }
});

/**
 * GET ALL RESUMES
 * GET /api/resume
 */
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch resumes"
    });
  }
});

module.exports = router;
