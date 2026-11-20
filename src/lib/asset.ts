/** Base path the site is served under (e.g. "/techmarket" on GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public/ asset path with the deployment base path. */
export function asset(path: string): string {
  return BASE_PATH + path;
}
