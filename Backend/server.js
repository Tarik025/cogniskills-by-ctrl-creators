require("dotenv").config();
const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resumeRoutes");
const resumeTextRoutes = require("./routes/resumeTextRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/resume", resumeRoutes);      // Handles file uploads: /resume/analyze
app.use("/text", resumeTextRoutes);    // Handles raw text: /text/analyze-text

app.get("/", (req, res) => {
  res.send("CogniSkill Backend is Live!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server sprinting on port ${PORT}`));