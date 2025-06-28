import { GoogleGenAI } from "@google/genai";

const b = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function ai(prom) {
    const basePrompt = `
I’m working on academic multiple-choice questions from subjects like Math, Chemistry, Biology, Physics, English, and SAT-level content. For each question, please give me:

1. The correct answer, indicated with the letter (A, B, C, or D)
2. A brief academic explanation (1–2 sentences max)

Please use this format:

Q: What is the derivative of f(x) = x^2?
A) x  
B) 2x  
C) x^2  
D) 2  

Answer: B – The derivative of x^2 with respect to x is 2x.

Follow this style for each question I provide next.

Here is the question:
`;
  const response = await b.models.generateContent({
    model: "gemini-2.0-flash",
    contents:basePrompt + prom,
  });
  return response.text;
}
