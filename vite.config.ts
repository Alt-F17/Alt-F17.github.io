import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite configuration for deployment to GitHub Pages
export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
});
