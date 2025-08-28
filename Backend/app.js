import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import { runSystemUser } from "./prompts/systemUser.js";
// import { runZeroShot } from "./prompts/zeroShot.js";
// import { runOneShot } from "./prompts/oneShot.js";
import { runMultiShot } from "./prompts/multiShot.js";
// later import others...

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// choose which one to run
// await runSystemUser(genAI);

// await runZeroShot(genAI);
// await runOneShot(genAI);
await runMultiShot(genAI);