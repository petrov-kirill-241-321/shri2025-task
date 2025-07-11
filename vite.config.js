import { defineConfig } from "vite";
import imagemin from "vite-plugin-imagemin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), imagemin({ gifsicle: { optimizationLevel: 3 } })], // Обработка JSX
  base: "/shri2025-task/",
  build: {
    outDir: "docs", // Куда складывать сборку
    emptyOutDir: true, // Очищать папку перед сборкой
  },
});
