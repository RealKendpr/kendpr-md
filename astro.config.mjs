import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "houston",
    },
  },
  site: "https://realkendpr.github.io",
  base: "/kendpr-md",
  vite: {
    plugins: [tailwindcss()],
  },
});
