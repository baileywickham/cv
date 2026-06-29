import { defineConfig } from "vite";

// Static CV site served by GitHub Pages straight from the repo root, so vite is
// used only as the local dev server (`pnpm dev`). Disable the special-cased
// public/ dir so links like public/wickham.pdf resolve as normal paths in dev.
export default defineConfig({
	publicDir: false,
});
