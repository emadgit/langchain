import { LangchainRouter } from "~/server/api/routers/langchain";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  langchain: LangchainRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
