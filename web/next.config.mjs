/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://<user>.github.io/<repo>/,
// so every asset path needs that prefix. The workflow sets this; local
// `npm run dev` and `npm run build` leave it empty and serve from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  // Static export: `npm run build` writes a plain site to web/out/.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  // Pages serves /foo/ as /foo/index.html, so emit directories.
  trailingSlash: true,
  // The export has no image optimisation server.
  images: { unoptimized: true },
};

export default nextConfig;
