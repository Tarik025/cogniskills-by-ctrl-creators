require("dotenv").config();
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function testConnection() {
  try {
    // Change the model line in your test-ai.js to this:
const chatCompletion = await groq.chat.completions.create({
  messages: [{ role: "user", content: "Say 'Groq is Live!'" }],
  model: "llama-3.1-8b-instant", // Use this updated model name
});
    console.log("SUCCESS ✅:", chatCompletion.choices[0].message.content);
  } catch (err) {
    console.error("FAILED ❌:", err.message);
  }
}
testConnection();

