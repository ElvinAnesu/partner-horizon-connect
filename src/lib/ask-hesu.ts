import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { HESU_SYSTEM_PROMPT } from "@/lib/hesu-knowledge";

const chatInputSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(12),
});

const GEMINI_MODEL = "gemini-2.0-flash";

type GeminiPart = { text?: string };
type GeminiResponse = {
  error?: { message?: string };
  candidates?: Array<{
    content?: { parts?: GeminiPart[] };
  }>;
};

function geminiKey() {
  return process.env.GEMINI_API_KEY?.trim() ?? "";
}

export const askHesu = createServerFn({ method: "POST" })
  .validator((input) => chatInputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = geminiKey();
    if (!key) {
      return {
        error:
          "The assistant is not configured yet. Email info@hesu.co.tz and our team will help.",
      };
    }

    const contents = data.messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(key)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: HESU_SYSTEM_PROMPT }] },
            contents,
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 512,
            },
          }),
        },
      );

      const json = (await res.json()) as GeminiResponse;
      if (!res.ok) {
        return {
          error:
            "We could not reach the assistant just now. Email info@hesu.co.tz and our team will help.",
        };
      }

      const text = json.candidates?.[0]?.content?.parts
        ?.map((p) => p.text ?? "")
        .join("")
        .trim();

      if (!text) {
        return {
          error:
            "The assistant had nothing to add. Email info@hesu.co.tz and our team will help.",
        };
      }

      return { text };
    } catch {
      return {
        error:
          "We could not reach the assistant just now. Email info@hesu.co.tz and our team will help.",
      };
    }
  });
