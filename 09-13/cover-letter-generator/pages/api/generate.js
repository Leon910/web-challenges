import OpenAI from "openai";

export default function handler(request, response) {
  response.status(200).json({ message: "Hello neuefische!" });
}

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});
