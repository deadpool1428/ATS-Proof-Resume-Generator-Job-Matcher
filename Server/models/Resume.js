const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    linkedin: String
  },
  summary: String,
  skills: [String],
  experience: [
    {
      company: String,
      role: String,
      startDate: String,
      endDate: String,
      description: String
    }
  ],
  education: [
    {
      institution: String,
      degree: String,
      year: String
    }
  ],
  courses: [String],
  declaration: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Resume", ResumeSchema);
