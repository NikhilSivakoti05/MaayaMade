import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "/",

  plugins: [
    react(),

    // ✅ Precompress only JS, CSS, and SVG (NOT images)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
      filter: (file) => /\.(js|css|svg)$/.test(file),
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
      filter: (file) => /\.(js|css|svg)$/.test(file),
    }),
  ],

  optimizeDeps: {
    exclude: ["lucide-react"],
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    target: "esnext",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // ✅ Proper cache-busting
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        manualChunks: undefined,
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "::",
    port: 8080,
  },
});
