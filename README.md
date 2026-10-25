# World Breakfast Tour

One breakfast from every country in the world, cooked in alphabetical order and rated by my family.

This is a free static website built with [Astro](https://astro.build). It includes 32 posts (Afghanistan through Cameroon) moved over from Instagram, with the recipes that were posted in the comments.

Each country page shows, in order: the flag and country name, the dish and its score, the photo, an About the country box, the dish, what we thought, and the ingredients and directions.

Flags load from the free flag-icons library on jsDelivr, so they need no files in this project.

## Put it online (one time, about 15 minutes)

1. Create a free account at [github.com](https://github.com).
2. Click **New repository**, name it `world-breakfast-tour`, and create it.
3. On the new repository page, click **uploading an existing file**, then drag in everything inside this folder (not the folder itself). Click **Commit changes**.
4. Create a free account at [Cloudflare](https://dash.cloudflare.com/sign-up). Go to **Workers & Pages**, choose to create a **Pages** project, and connect it to your GitHub repository.
5. Use these build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click **Save and Deploy**. After a minute or two the site is live at an address like `world-breakfast-tour.pages.dev`.
7. Put that address in `astro.config.mjs` (the `site:` line) so links shared on social media show the right photo.

Netlify works the same way if you prefer it. The included `netlify.toml` already has the settings.

## Add a new breakfast

Everything can be done in the GitHub website. No software to install.

1. Upload the photo to `public/images/`. Name it after the country, all lowercase with dashes, like `canada.jpg`. Keep photos under about 2 MB.
2. Go to `src/content/breakfasts/` and click **Add file > Create new file**. Name it the same way, like `canada.md`.
3. Copy the contents of `new-breakfast-template.md` into it and fill it in.
4. Click **Commit changes**. The site rebuilds itself and the post appears in a minute or two.

The home page, A to Z progress bar, leaderboard, and passport all update automatically.

### Fields at the top of each post

| Field | What it is |
| --- | --- |
| `country` | Must match the spelling in `src/data/countries.js` so the passport can check it off |
| `dish` | Name of the breakfast |
| `date` | The date you posted it, as `YYYY-MM-DD` |
| `rating` | Family average out of 5. Delete the line if there is no score |
| `ratingNote` | Optional short note shown next to the score |
| `draft` | Add `draft: true` to hide a post from the whole site while you finish it. Delete the line to publish it |
| `flag` | The country's two-letter code, like `ca` for Canada. Look it up at [flagicons.lipis.dev](https://flagicons.lipis.dev) |
| `images` | One or more photos, each on its own line starting with `  - /images/` |
| `about` | The "About the country" box. Every line indented two spaces |

Below the fields, each post has three sections in this order: **The dish**, **What we thought**, and **Ingredients and directions**. Keep those headings so every page reads the same way.

If a post has a mistake in these fields, the build stops and Cloudflare's build log names the file and the problem. The live site stays as it was until it's fixed.

## Front page text

The About the project text, the three goals, and the How we rate box are all in `src/pages/index.astro`. Open it in GitHub, click the pencil, and edit the words between the tags. The full list of breakfasts lives at `/breakfasts/` (file: `src/pages/breakfasts/index.astro`).

## Score colors

Scores are colored everywhere they appear (home page, post pages, leaderboard, passport): **green** at 4.0 and up, **yellow** from 2.5 to 3.9, and **red** under 2.5. To move those cutoffs, edit the two numbers `RED_BELOW` and `GREEN_FROM` near the top of `src/lib.js`. The colors themselves are at the top of `src/styles/global.css`. If you change a cutoff, also update the one-line color note in the footer in `src/layouts/Base.astro` and the legend text in `src/pages/leaderboard.astro` shows the new numbers automatically.

## Working on it from your own computer (optional)

Install [Node.js](https://nodejs.org) 20 or newer, then in this folder run:

```
npm install
npm run dev
```

and open http://localhost:4321.
