import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { createServer } from "http";

dotenv.config();

const app = express();
app.use(cookieParser());

// Middleware JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger des requêtes API
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

// Démarrage du serveur
(async () => {
  const serverRoutes = await registerRoutes(app);

  // Gestionnaire d'erreurs global
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error("❌ Erreur serveur:", err);
  });

  // Configuration Vite (dev) ou fichiers statiques (prod)
  if (app.get("env") === "development") {
    await setupVite(app, serverRoutes);
  } else {
    serveStatic(app);
  }

  // Création du serveur HTTP
  const httpServer = createServer(app);

  // Configuration du port
  const PORT = Number(process.env.PORT) || 5000;

  console.log("========================================");
  console.log("🔮 TarotMystik - Serveur de développement");
  console.log("========================================");
  console.log(`📱 App mobile uniquement`);
  console.log(`💎 Gestion Premium via RevenueCat`);
  console.log(`🚫 Pas de base de données`);
  console.log(`🔑 Identification par email uniquement`);
  console.log("========================================");
  console.log(`🌐 Serveur local: http://localhost:${PORT}`);
  console.log(`📲 Pour mobile: http://[VOTRE_IP_LOCALE]:${PORT}`);
  console.log("========================================");

  httpServer.listen(PORT, "0.0.0.0", () => {
    log(`✅ Serveur TarotMystik démarré sur le port ${PORT}`);

    // Vérifier la configuration RevenueCat
    if (!process.env.REVENUECAT_API_KEY) {
      console.warn("⚠️  ATTENTION: REVENUECAT_API_KEY non configurée !");
      console.warn("   Ajoutez-la dans votre fichier .env");
    } else {
      console.log("✅ RevenueCat API configurée");
    }
  });

  httpServer.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      console.error(`❌ Le port ${PORT} est déjà utilisé !`);
      console.error("💡 Solutions:");
      console.error("   1. Changez le PORT dans votre fichier .env");
      console.error(`   2. Tuez le processus utilisant le port ${PORT}`);
      process.exit(1);
    } else {
      console.error("❌ Erreur serveur:", err);
      process.exit(1);
    }
  });

  return httpServer;
})();