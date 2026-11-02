import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Modern baselines: Vite handles legacy bracing itself; these controls keep
    // the output lean and reproducible.
    target: "es2022",
    sourcemap: true,
    cssTarget: "chrome117",
  },
  server: {
    port: 4173,
    open: false,
  },
  preview: {
    port: 4173,
  },
});
