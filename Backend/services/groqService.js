require("dotenv").config();
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function generateAIAnalysis(resumeText, role) {
  // 1. Clean and limit text size (LLMs have limits)
  const cleanResumeText = resumeText.replace(/[^\x20-\x7E]/g, '').substring(0, 3500);

  const prompt = `
    Analyze this resume for the role: ${role}.
    You must return ONLY a JSON object with these EXACT keys: "matched", "missing", and "roadmap".
    - "matched": Array of technical skills found in the resume.
    - "missing": Array of technical skills required for ${role} but NOT in the resume.
    - "roadmap": Array of 3 strings for Day 1, Day 2, and Day 3.
    
    Resume Text: ${cleanResumeText}`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // 🔥 Updated to the most stable current model
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1,
      response_format: { "type": "json_object" } 
    });

    const rawContent = chatCompletion.choices[0]?.message?.content ?? "{}";
    
    // Clean any accidental markdown wrap
    const cleanJson = rawContent.replace(/```json|```/g, "").trim();

    return JSON.parse(cleanJson);
  } catch (err) {
    console.error("GROQ_API_ERROR_DETAILS:", err.response?.data || err.message);
    // Return visible error data for Postman debugging
    return { 
        matched: ["Error: AI Connection Issue"], 
        missing: [err.message], 
        roadmap: ["Check terminal logs for full error details"] 
    };
  }
}

module.exports = { generateAIAnalysis };