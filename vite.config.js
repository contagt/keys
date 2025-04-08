import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/Keys.js",
      fileName: "index",
      formats: ["es"],
    },
    minify: "esbuild",
  },
});
