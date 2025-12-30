// Load API key
require("dotenv").config();

// Import Gemini SDK
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Test function
async function testGemini() {
  try {
    console.log("Starting Gemini test...");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Use the correct model for 2025
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
// const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




    const result = await model.generateContent("Write only: Gemini connection success.");

    console.log("\nGemini replied:");
    console.log(result.response.text());
    
  } catch (error) {
    console.error("\nERROR:", error);
  }
}

testGemini();
