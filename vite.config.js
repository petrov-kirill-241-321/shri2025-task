import { defineConfig } from "vite";
import imagemin from "vite-plugin-imagemin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react(), imagemin({ gifsicle: { optimizationLevel: 3 } })], // Обработка JSX
  base: "/shri2025-task/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
