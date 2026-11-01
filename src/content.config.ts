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
    draft: z.boolean().default(false),
    flag: z.string().length(2).optional(),
    images: z.array(z.string()).default([]),
    about: z.string().optional(),
    verdict: z.string().optional(),
    servings: z.string().optional(),
    recipeTime: z.string().optional(),
    activeTime: z.string().optional(),
    cookTime: z.string().optional(),
    waitingTime: z.string().optional(),
    advancePrep: z.string().optional(),
    beforeYouStart: z.array(z.string()).default([]),
    equipment: z.array(z.string()).default([]),
    mealStyle: z.array(z.enum(['sweet', 'savory'])).default([]),
    quick: z.boolean().default(false),
  }),
});

export const collections = { breakfasts };
