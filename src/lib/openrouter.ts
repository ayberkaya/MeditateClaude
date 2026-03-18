// Standard OpenAI fetch wrapper for OpenRouter
export async function generateChatCompletion(messages: { role: string; content: string }[], systemPrompt?: string) {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  const model = process.env.OPENROUTER_MODEL || "stepfun/step-3.5-flash:free";

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not set.");
  }

  const payload: any = {
    model,
    messages: [
      ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
      ...messages
    ],
    temperature: 0.7,
    max_tokens: 1024,
  };

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "X-Title": "MeditateClaude",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenRouter API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "";
}
