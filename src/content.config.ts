import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "./posts/*.mdx", base: "./src/pages/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    image: z.object({
      internal: z.boolean(),
      src: z.string(),
    }),
    draft: z.boolean(),
  }),
});

export const collections = { posts };
