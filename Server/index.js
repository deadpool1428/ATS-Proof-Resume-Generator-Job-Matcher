const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json());

/* ---------------- MONGODB ---------------- */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Failed");
    console.error(err);
    process.exit(1);
  });

/* ---------------- ROUTES ---------------- */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/resume", require("./routes/resumeRoutes"));
app.use("/api/ats", require("./routes/atsRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (req, res) => {
  res.send("CareerForge Backend Running");
});

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
