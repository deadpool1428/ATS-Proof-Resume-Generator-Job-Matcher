const express = require("express");
const Resume = require("../models/Resume");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

/* GET USER RESUME */
router.get("/", authMiddleware, async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.user.id });
    res.json(resume || {});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resume" });
  }
});

/* CREATE / UPDATE RESUME */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const existing = await Resume.findOne({ userId: req.user.id });

    if (existing) {
      const updated = await Resume.findOneAndUpdate(
        { userId: req.user.id },
        req.body,
        { new: true }
      );
      return res.json(updated);
    }

    const resume = await Resume.create({
      ...req.body,
      userId: req.user.id
    });

    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to save resume" });
  }
});

module.exports = router;
