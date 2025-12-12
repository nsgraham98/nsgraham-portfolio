import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { resumeData } from "@/lib/data/resumeData";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { messages = [], pageContext } = await req.json();

  const systemPrompt = `
You are Nick's Portfolio Explainer AI.

You ONLY answer questions based on the project data provided below.
Your goals:
- Help recruiters and devs understand Nick's projects, skills, and decisions.
- Explain things clearly at the level the user seems to be at.
- When relevant, mention specific projects, tech stack, and challenges he solved.
- If you're not sure about something, say you're not sure rather than making it up.

Resume data (JSON):
${JSON.stringify(resumeData, null, 2)}

If user asks “which project best shows X”, choose from these.
If user asks about your role, responsibilities, or impact, use the "role", "challenges", and "notableFeatures" fields.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini", // or any model you like
    messages: [{ role: "system", content: systemPrompt }, ...messages],
  });

  const answer = response.choices[0]?.message ?? {
    role: "assistant",
    content: "Sorry, I couldn't generate a response.",
  };
  console.log("AI Assistant Response:", answer);

  return NextResponse.json({ reply: answer });
}
