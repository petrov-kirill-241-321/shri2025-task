import { defineConfig } from "vite";
import imagemin from "vite-plugin-imagemin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), imagemin({ gifsicle: { optimizationLevel: 3 } })], // Обработка JSX
  base: "https://petrov-kirill-241-321.github.io/shri2025-task/",
});
