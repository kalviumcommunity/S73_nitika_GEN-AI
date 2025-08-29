import { GoogleGenerativeAI } from "@google/generative-ai";

// prompts/temperature.js
export async function runTemperature(genAI) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      temperature: 0.9, // change this value to see creativity difference
    },
  });

  const prompt = "Write a short creative story about a robot learning to dance.";

  const result = await model.generateContent(prompt);
  console.log("Temperature Demo Output:\n");
  console.log(result.response.text());
}
