import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  // ✅ Servir les images statiques en développement
  const imagePath = path.resolve(import.meta.dirname, "..", "client", "public", "Image");
  if (fs.existsSync(imagePath)) {
    app.use("/Image", express.static(imagePath));
    log(`📸 Images servies depuis: ${imagePath}`, "vite");
  } else {
    log(`⚠️ Dossier Image non trouvé: ${imagePath}`, "vite");
  }

  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // Toujours recharger index.html depuis le disque
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// ✅ Servir les fichiers statiques en production
export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "..", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `❌ Dossier de build introuvable: ${distPath}. Compilez d'abord avec 'npm run build'`,
    );
  }

  log(`📦 Serving static files from: ${distPath}`, "static");

  // ✅ Servir le dossier Image spécifiquement
  const imagePath = path.resolve(distPath, "Image");
  if (fs.existsSync(imagePath)) {
    app.use("/Image", express.static(imagePath, {
      maxAge: '1d', // Cache les images pendant 1 jour
      etag: true,
    }));
    log(`📸 Images servies depuis: ${imagePath}`, "static");
  } else {
    log(`⚠️ Dossier Image non trouvé: ${imagePath}`, "static");
  }

  // Servir les autres fichiers statiques avec cache
  app.use(express.static(distPath, {
    maxAge: '1h',
    etag: true,
  }));

  // Fallback vers index.html pour le routing côté client
  app.use("*", (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}