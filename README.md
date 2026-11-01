# World Breakfast Tour

One family exploring the world through breakfast, with honest reviews and recipes.

## Replace files in GitHub

Extract the ZIP and copy the **contents** of its `world-breakfast-tour/` folder into the root of your existing repository. Replace matching files, including `src/`, `public/`, the Astro configuration, and `new-breakfast-template.md`. Keep your repository’s `.git` directory and any unrelated files. All photos and the existing Netlify configuration are included. Commit and push through your normal GitHub workflow.

## Run and deploy

Requires Node 22 or later. Run `npm install`, then `npm run dev` for local development. Run `npm run build` to create `dist/`; `npm run preview` serves that build. Existing Netlify configuration is retained. This source update does not change the existing site's hosting or domain.

## Add a breakfast

Copy `new-breakfast-template.md` into `src/content/breakfasts/<country-slug>.md`. Keep `draft: true` until it is ready. Store photos under `public/images/`, update the image path and two-letter flag code, and add the recipe and family review. Set `draft: false` to publish on the next build.

The content schema in `src/content.config.ts` validates metadata. Scores must be between 0 and 5. Missing optional fields are omitted from the rendered page.

- `rating` is the recorded overall family score. Average adults and kids separately, then combine with roughly 60% adult / 40% kid weight. The site acknowledges that historical scoring was approximate; no existing overall score has been recalculated.
- `servings` is the yield. `recipeTime`, `activeTime`, `cookTime`, and `waitingTime` are estimates based on the written recipe. Hands-on includes attended cooking and therefore overlaps with cooking time; do not add the two together. Show cooling, resting, and advance preparation in the elapsed/waiting fields. Keep a multi-day recipe’s serving-day work distinct from the overnight or multi-day wait.
- `beforeYouStart` and `equipment` are lists of practical preparation notes and special equipment.
- `mealStyle` contains `sweet`, `savory`, or both. `quick: true` means the recorded elapsed time is 45 minutes or less and no advance preparation is required.

Keep the exact heading `## Recipe`: it creates the jump destination and explicit recipe container used by print styling and ingredient checkboxes. For a multipart meal, use `### Component`, then `#### Ingredients` and `#### Directions`. Ingredient subgroups use `##### Group`. For a single component, use `### Ingredients`, `### Directions`, and optional `#### Group`.

The narrative uses “Our choice for [country]”, “At our table”, optional “What I learned”, and “Breakfast context: [country]”. Each location has several sentences of background, and each dish has a complete descriptive paragraph. Keep these as plain prose, without external reading links. Separate tested observations from future experiments. Unusual ingredient and substitution notes belong with the relevant recipe component.

## Reader tools

- Recipe pages: jump, print, planning facts, before-you-start notes, and ingredient checkboxes. Checking an ingredient affects only the current page; printing restores full ingredient text.
- Breakfasts: completed recipes only, country/dish/ingredient search, sweet/savory/quick/prepare-ahead/overnight filters, and country/newest/family-score sorting.
- Passport: the full itinerary, including countries not cooked yet.
- Leaderboard: overall family scores. Scores below 2.5 mean wouldn’t eat again; 2.5–3.9 means would eat again but unlikely to enter the rotation; 4.0–5.0 means a repeat breakfast idea. There are no separate adult/kid or make-again scores.

Recipe content and links work without JavaScript; filtering, ingredient checking, and the print button use JavaScript. The browser's own Print command also uses the recipe print stylesheet.

## Editorial work

See `EDITORIAL_CHECKLIST.md` for optional review refinements, unresolved recipe clarifications, all 36 timing estimates. The requested ratings, source, shopping, and timing decisions are already applied.

## Verification for this update

Content checks compare the update against the preceding source archive: all reviews, overall scores, recipes, and photos are preserved. Timing, quick-filter eligibility, removed metadata, and country/dish paragraph lengths are checked separately. Script checks exercise search, combined filtering, sorting, reset, empty results, accent-insensitive matching, and print/ingredient interaction with a simulated DOM. These checks do not replace an Astro build or visual browser review.

The editing environment could not install Astro because its package registry request was denied (HTTP 403). A complete Astro build and visual browser review remain to be run in an environment with the dependency installed. No new runtime dependencies were added.
