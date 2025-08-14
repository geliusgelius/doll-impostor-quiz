import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@backend": fileURLToPath(new URL("../backend", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true,

    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      strict: false,
      allow: [
        fileURLToPath(new URL("./src", import.meta.url)),
        fileURLToPath(new URL("./public", import.meta.url)),
        fileURLToPath(new URL("../backend", import.meta.url)),
        "/node_modules/",
      ],
    },
  },
  build: {
    assetsInlineLimit: 0,
  },
});
