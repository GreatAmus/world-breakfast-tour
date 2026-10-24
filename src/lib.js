import { getCollection } from 'astro:content';

const byCountry = (a, b) => a.data.country.localeCompare(b.data.country, 'en');

// All posts, alphabetical by country.
export async function getBreakfasts() {
  return (await getCollection('breakfasts')).sort(byCountry);
}

export const postUrl = (post) => `/breakfasts/${post.id}/`;

// Flag images from the open-source flag-icons project. `code` is the two-letter country code.
export const flagUrl = (code) => `https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/${code.toLowerCase()}.svg`;

export const formatScore = (n) => (n === undefined ? '–' : Number(n).toFixed(1));

export const formatDate = (d) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
