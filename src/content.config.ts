import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/docs",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string().optional(),

    group: z.string(),

    sidebar: z.object({
      label: z.string(),
      order: z.number(),
    }),
  }),
});

export const collections = {
  docs,
};
