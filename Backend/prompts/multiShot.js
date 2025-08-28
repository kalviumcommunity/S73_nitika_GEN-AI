// prompts/multiShot.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function runMultiShot(genAI) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const multiShotPrompt = `
Example 1: "Paragraph: 'Cats are small animals…' → Summary: 'Cats are small, cute animals.'"
Example 2: "Paragraph: 'Dogs are loyal…' → Summary: 'Dogs are loyal companions.'"
Task: "Paragraph: 'Elephants are huge mammals living in Africa and Asia…' → Summary: ?"
`;

  console.log("ℹ️  Running Multi-Shot Prompt...");

  const result = await model.generateContent(multiShotPrompt);

  console.log("✅ Multi-Shot Prompt Output:\n" + result.response.text());
}
