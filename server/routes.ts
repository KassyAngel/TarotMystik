import type { Express } from "express";
import { createServer, type Server } from "http";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export async function registerRoutes(app: Express): Promise<Server> {
  // ===== CONFIGURATION CORS =====
  app.use(
    cors({
      origin: true,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "x-user-email"],
    })
  );

  app.options("*", (_, res) => res.status(200).end());

  // ========================================
  // 📊 ROUTE DE SANTÉ
  // ========================================
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      app: "TarotMystik",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      revenueCatConfigured: !!process.env.REVENUECAT_API_KEY,
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}