// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Bao Zixuan";
export const AUTHOR_NAME = "Bao Zixuan";
export const AUTHOR_INITIAL = "BZ";
export const SITE_DESCRIPTION =
  "Bao Zixuan's personal website for projects, notes, and AI experiments.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

// Base path helper for GitHub Pages project sites
// In dev: "/" — in prod with BASE_URL: "/ac-site-template/"
const BASE_PATH = import.meta.env.BASE_URL;
export const url = (path: string) => {
  const clean = path.replace(/^\//, "");
  return clean ? BASE_PATH + clean : BASE_PATH;
};
export { BASE_PATH };
