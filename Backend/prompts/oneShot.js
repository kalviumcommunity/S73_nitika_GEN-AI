// prompts/oneShot.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function runOneShot(genAI) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const oneShotPrompt = `
Example: "Summarize: ‘Water is essential for plants to survive…’ → ‘Plants need water to survive and grow.’"
Task: "Summarize: 'The Sun is the primary source of energy for life on Earth…'"
`;

  console.log("ℹ️  Running One-Shot Prompt...");

  const result = await model.generateContent(oneShotPrompt);

  console.log("✅ One-Shot Prompt Output:\n" + result.response.text());
}
