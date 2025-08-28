// prompts/chainOfThought.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function runChainOfThought(genAI) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const cotPrompt = "Solve this problem step by step: If a train travels 60 km in 1 hour, how far will it travel in 4 hours?";

  console.log("ℹ️  Running Chain-of-Thought Prompt...");

  const result = await model.generateContent(cotPrompt);

  console.log("✅ Chain-of-Thought Output:\n" + result.response.text());
}
