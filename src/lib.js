import { getCollection } from 'astro:content';

const byCountry = (a, b) => a.data.country.localeCompare(b.data.country, 'en');

// All posts, alphabetical by country.
export async function getBreakfasts() {
  return (await getCollection('breakfasts', ({ data }) => !data.draft)).sort(byCountry);
}

export const postUrl = (post) => `/breakfasts/${post.id}/`;

// Flag images from the open-source flag-icons project. `code` is the two-letter country code.
export const flagUrl = (code) => `https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/${code.toLowerCase()}.svg`;

// Score colors. Change the two cutoffs here to move the red / yellow / green bands.
//   below 2.5 = red, 2.5 up to (not including) 4.0 = yellow, 4.0 and above = green
export const RED_BELOW = 2.5;
export const GREEN_FROM = 4.0;
export function scoreTone(value) {
  if (value === undefined) return 'none';
  if (value < RED_BELOW) return 'low';
  if (value < GREEN_FROM) return 'mid';
  return 'high';
}

export const formatScore = (n) => (n === undefined ? '–' : Number(n).toFixed(1));

export const formatDate = (d) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
