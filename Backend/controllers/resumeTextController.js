const { generateAIAnalysis } = require("../services/groqService");

async function analyzeResumeText(req, res) {
  try {
    const resumeText = req.body.resumeText;
    const role = req.body.role || "Software Developer";

    if (!resumeText || resumeText.trim().length < 30) {
      return res.status(400).json({
        success: false,
        message: "Resume text too short or missing."
      });
    }

    const aiResult = await generateAIAnalysis(resumeText, role);

    return res.json({
      success: true,
      matched: aiResult.matched || [],
      missing: aiResult.missing || [],
      roadmap: aiResult.roadmap || [],
      raw: aiResult
    });
  } catch (err) {
    console.error("Text Analysis Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message
    });
  }
}

module.exports = { analyzeResumeText };
