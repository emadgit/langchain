import { publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { ChatOllama } from "@langchain/ollama";
import { env } from "~/env.mjs";

export const chat = publicProcedure
  .input(
    z.object({
      prompt: z.string(),
    }),
  )
  .mutation<string>(async ({ input }) => {
    try {
      const llm = new ChatOllama({
        model: "llama3",
        temperature: 0,
        maxRetries: 2,
        // baseUrl: env.LANGCHAIN_ENDPOINT,
      });

      const aiMsg = await llm.invoke([
        [
          "system",
          "You are a helpful therapist that help user in mental health. Therapy for the user and give the best advice for the user sentence.",
        ],
        ["human", input.prompt],
      ]);

      console.log(aiMsg.content);

      return aiMsg.content as string;
    } catch (error) {
      console.error(error);
      return "Sorry, I am having trouble understanding you. Please try again.";
    }
  });
