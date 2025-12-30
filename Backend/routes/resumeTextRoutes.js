const express = require("express");
const router = express.Router();
const { analyzeResumeText } = require("../controllers/resumeTextController");

router.post("/analyze-text", analyzeResumeText);

module.exports = router;
