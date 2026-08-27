// Canonical site URL used for metadata, sitemap, and robots.
// TODO: update this to your real deployed domain (e.g. https://alekhyabulusu.com).
// Can also be overridden at build time via NEXT_PUBLIC_SITE_URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alekhyabulusu.vercel.app';

// Resume link, shared by the hero button and the command palette.
// This is the canonical Drive file: the currently deployed build hardcodes this
// same ID, so keep it stable and publish updates by uploading a new version of
// the file in Drive rather than by pointing at a different one.
export const RESUME_URL =
  'https://drive.google.com/file/d/18UMVCoEegXAwAUT_pvYaYSPUksIq_m0W/view?usp=sharing';
