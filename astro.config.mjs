import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://til.viseshprasad.com",
  integrations: [pagefind()],
  markdown: { shikiConfig: { theme: "material-theme-palenight" } },
  vite: { resolve: { preserveSymlinks: true } },
});
