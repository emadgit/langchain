import { createTRPCRouter } from "~/server/api/trpc";

// Mutations
import { chat } from "./procedures/chat";

export const LangchainRouter = createTRPCRouter({
  chat,
});
