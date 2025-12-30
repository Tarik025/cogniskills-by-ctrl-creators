const fs = require("fs");
const PDFParser = require("pdf2json");
const { generateAIAnalysis } = require("../services/groqService");

async function analyzeResume(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded!" });
    }

    const pdfParser = new PDFParser(null, 1); // 1 = text-only mode

    pdfParser.on("pdfParser_dataError", errData => {
      console.error(errData.parserError);
      res.status(500).json({ success: false, message: "Error parsing PDF" });
    });

    pdfParser.on("pdfParser_dataReady", async pdfData => {
      const resumeText = pdfParser.getRawTextContent();
      const role = req.body.role || "Software Developer";

      // Send the extracted text to your working Groq service
      const aiResult = await generateAIAnalysis(resumeText, role);

      // Cleanup
      fs.unlinkSync(req.file.path);

      return res.json({
        success: true,
        matched: aiResult.matched || [],
        missing: aiResult.missing || [],
        roadmap: aiResult.roadmap || []
      });
    });

    // Start the parsing process
    pdfParser.loadPDF(req.file.path);

  } catch (err) {
    console.error("FULL SYSTEM ERROR:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
}

module.exports = { analyzeResume };