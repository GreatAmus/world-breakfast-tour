import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every Markdown file in src/content/breakfasts/ becomes a post.
// If a post is missing a field or has a typo in one, the build stops and names the file.
const breakfasts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/breakfasts' }),
  schema: z.object({
    country: z.string(),
    dish: z.string(),
    date: z.coerce.date(),
    rating: z.number().min(0).max(5).optional(),
    ratingNote: z.string().optional(),
    flag: z.string().length(2).optional(),
    images: z.array(z.string()).default([]),
    about: z.string().optional(),
  }),
});

export const collections = { breakfasts };
