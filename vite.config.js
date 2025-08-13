import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["@material-tailwind/react"],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@material-tailwind/react", "react-icons"],
          carousel: ["swiper", "react-slick", "slick-carousel"],
        },
      },
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
  server: {
    host: true,
    port: 3000,
  },
});
