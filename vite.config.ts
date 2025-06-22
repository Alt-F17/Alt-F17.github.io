/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// Vite configuration for deployment
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
});
