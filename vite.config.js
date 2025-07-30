import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

export default defineConfig({
  plugins: [
    createSvgSpritePlugin({
      exportType: "vanilla", // or 'react' or 'vue'
      include: "**/icons/*.svg",
    }),
    [injectHTML(), FullReload(["./src/**/**.html"])],
  ],
});
