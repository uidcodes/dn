import { GoogleGenAI } from "@google/genai";

const b = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function ai(prom) {
  const response = await b.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prom,
  });
  return response.text;
}
