// prompts/dynamic.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function runDynamic(genAI, subject, topic) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const dynamicPrompt = `You are a ${subject} tutor. Explain ${topic} in 3 simple steps with examples suitable for high school students.`;

  console.log(`ℹ️  Running Dynamic Prompt for ${subject} - ${topic}...`);

  const result = await model.generateContent(dynamicPrompt);

  console.log("✅ Dynamic Prompt Output:\n" + result.response.text());
}
