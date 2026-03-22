import { crx } from "@crxjs/vite-plugin";
import path from "node:path";
import { defineConfig } from "vite";
import zip from "vite-plugin-zip-pack";
import manifest from "./manifest.config.js";
import { name, version } from "./package.json";
import addImportant from "./postcss-add-important.js";

export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
  },
  plugins: [
    crx({ manifest }),
    zip({ outDir: "release", outFileName: `crx-${name}-${version}.zip` }),
  ],
  css: {
    postcss: {
      plugins: [
        addImportant({
          includes: ["src/assets/css/highlightjs/*.css*"],
        }),
      ],
    },
  },
  experimental: {
    // fix for font-face src:
    // https://github.com/crxjs/chrome-extension-tools/issues/842#issuecomment-1849035997
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === "css") {
        return `chrome-extension://__MSG_@@extension_id__/${filename}`;
      }
    },
  },
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
});
