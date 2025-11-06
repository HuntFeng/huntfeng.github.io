import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",
      source: "projects/**",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        description: z.string(),
        keywords: z.array(z.string()).optional(),
        github: z.string().optional(),
        paper: z.string().optional(),
      }),
    }),
  },
});
