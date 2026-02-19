import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    // ✅ FIX : react() sans options invalides (fastRefresh n'existe pas)
    react(),

    // ✅ FIX : runtimeErrorOverlay et cartographer UNIQUEMENT en dev
    // Ces plugins ajoutent du code inutile dans le build de prod
    ...(process.env.NODE_ENV !== "production"
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
        ]
      : []),

    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  root: path.resolve(import.meta.dirname, "client"),

  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,

    // ✅ FIX PERFORMANCE : Configuration du build pour mobile
    target: "es2015", // Compatible avec les vieux Android (Chrome 51+)

    // ✅ FIX : Minification plus agressive avec esbuild (inclus dans Vite, pas besoin d'installer)
    minify: "esbuild",

    // ✅ FIX : Découpage du bundle en chunks pour un chargement plus rapide
    // Les vieux téléphones chargent mieux plusieurs petits fichiers qu'un seul gros
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare React du reste — mis en cache par le navigateur
          "vendor-react": ["react", "react-dom"],
          // Sépare les libs UI lourdes
          "vendor-ui": ["@tanstack/react-query", "wouter"],
        },
      },
    },

    // ✅ FIX : Limite d'avertissement chunk à 600kb (au lieu de 500kb)
    // Évite les faux warnings qui polluent les logs
    chunkSizeWarningLimit: 600,

    // ✅ FIX : Désactive les source maps en prod (réduit la taille du build de ~30%)
    sourcemap: false,

    // ✅ FIX : Compression CSS plus agressive
    cssMinify: true,
  },

  // ✅ FIX : Optimisation des dépendances au démarrage du serveur dev
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-query",
      "wouter",
    ],
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});