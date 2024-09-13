import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { personalInfo, jobDescription } = request.body;

    const prompt = `Write a cover letter for a job application. Some info about the company and the position: ${jobDescription}. Some info about myself: ${personalInfo}.`;

    console.log(prompt);

    const data = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    console.log(data);

    response.status(200).json({ output: data });
  }
}
