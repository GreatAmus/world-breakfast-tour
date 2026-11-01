import { defineConfig } from 'astro/config';
import remarkRecipe from './src/remark-recipe.mjs';

// The site's live address. Used for links shared on social media.
export default defineConfig({
  markdown: { remarkPlugins: [remarkRecipe] },
  site: 'https://breakfast.world-food-tour.com',
});
