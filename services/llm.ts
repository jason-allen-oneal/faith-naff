
import OpenAI from "openai";
import type { ResponseOutputItem } from "openai/resources/responses/responses";
import { SYSTEM_INSTRUCTION } from "../constants";
import { ChatMessage } from "../types";

const client = new OpenAI({dangerouslyAllowBrowser: true, });

type InputMessage = {
  role: "user" | "assistant" | "developer";
  content: [{ type: "input_text"; text: string }];
};

const formatHistory = (history: ChatMessage[]): InputMessage[] =>
  history.map((msg) => ({
    role: msg.role === "model" ? "assistant" : "user",
    content: [{ type: "input_text", text: msg.content }],
  }));

const extractTextOutput = (output?: ResponseOutputItem[]) => {
  if (!output) return null;
  for (const item of output) {
    if (item.type === "message") {
      const textPart = item.content.find(
        (part) => part.type === "output_text"
      );
      if (textPart && "text" in textPart) {
        return textPart.text;
      }
    }
  }
  return null;
};

export const chatWithFaith = async (history: ChatMessage[] = []) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5-nano",
      reasoning: { effort: "low" },
      input: [
        {
          role: "developer",
          content: [{ type: "input_text", text: SYSTEM_INSTRUCTION }],
        },
        ...formatHistory(history),
      ],
    });

    const textOutput =
      response.output_text ||
      extractTextOutput(response.output) ||
      null;

    return (
      textOutput ||
      "I'm sorry, I'm unable to answer that at the moment. Please reach out via the contact form."
    );
  } catch (error) {
    console.error("Error:", error);
    return "I'm experiencing some technical difficulties. Let's talk about our community vision instead. How can we grow together?";
  }
};
