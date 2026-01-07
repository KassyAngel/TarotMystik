// ========================================
// ⚠️ FICHIER EN SOMMEIL - TarotMystik
// ========================================
// Ce fichier est conservé pour une utilisation future éventuelle
// mais n'est PAS utilisé actuellement
//
// L'app TarotMystik utilise uniquement RevenueCat pour le premium
// et ne stocke pas de données côté serveur
// ========================================

import { Pool } from 'pg';
import { randomUUID } from "crypto";

export interface User {
  id: string;
  username: string;
  email?: string;
  createdAt: Date;
}

export interface InsertUser {
  username: string;
  email?: string;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getItem(key: string): Promise<any>;
  setItem(key: string, value: any): Promise<void>;
  deleteItem(key: string): Promise<void>;
  close?(): Promise<void>;
}

// ❌ NON UTILISÉ ACTUELLEMENT
export class PgStorage implements IStorage {
  private pool: Pool;
  private isInitialized: boolean = false;

  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      console.error('❌ DATABASE_URL non définie dans .env !');
      throw new Error('DATABASE_URL est requise pour PostgreSQL');
    }

    this.pool = new Pool({
      connectionString: databaseUrl,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    console.log('✅ Pool PostgreSQL initialisée (EN SOMMEIL)');
    this.initTables();
  }

  private async initTables() {
    if (this.isInitialized) return;

    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          username TEXT UNIQUE NOT NULL,
          email TEXT,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `);

      await this.pool.query(`
        CREATE INDEX IF NOT EXISTS idx_users_username ON users(username)
      `);

      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS storage (
          key TEXT PRIMARY KEY,
          value JSONB NOT NULL,
          updated_at TIMESTAMP DEFAULT NOW()
        )
      `);

      await this.pool.query(`
        CREATE INDEX IF NOT EXISTS idx_storage_key ON storage(key)
      `);

      this.isInitialized = true;
      console.log('✅ Tables PostgreSQL créées/vérifiées (EN SOMMEIL)');
    } catch (error) {
      console.error('❌ Erreur initialisation tables PostgreSQL:', error);
      throw error;
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    try {
      const result = await this.pool.query(
        'SELECT id, username, email, created_at as "createdAt" FROM users WHERE id = $1',
        [id]
      );
      return result.rows[0] || undefined;
    } catch (error) {
      console.error(`❌ Erreur getUser(${id}):`, error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.pool.query(
        'SELECT id, username, email, created_at as "createdAt" FROM users WHERE username = $1',
        [username]
      );
      return result.rows[0] || undefined;
    } catch (error) {
      console.error(`❌ Erreur getUserByUsername(${username}):`, error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    try {
      const result = await this.pool.query(
        'INSERT INTO users (id, username, email) VALUES ($1, $2, $3) RETURNING id, username, email, created_at as "createdAt"',
        [id, insertUser.username, insertUser.email || null]
      );
      console.log(`👤 Utilisateur créé: ${insertUser.username} (${id})`);
      return result.rows[0];
    } catch (error) {
      console.error(`❌ Erreur createUser(${insertUser.username}):`, error);
      throw error;
    }
  }

  async getItem(key: string): Promise<any> {
    try {
      const result = await this.pool.query(
        'SELECT value FROM storage WHERE key = $1',
        [key]
      );

      if (result.rows.length === 0) {
        return null;
      }

      return result.rows[0].value;
    } catch (error) {
      console.error(`❌ Erreur GET storage["${key}"]:`, error);
      return null;
    }
  }

  async setItem(key: string, value: any): Promise<void> {
    try {
      await this.pool.query(
        `INSERT INTO storage (key, value, updated_at) 
         VALUES ($1, $2::jsonb, NOW()) 
         ON CONFLICT (key) 
         DO UPDATE SET value = $2::jsonb, updated_at = NOW()`,
        [key, JSON.stringify(value)]
      );
    } catch (error) {
      console.error(`❌ Erreur SET storage["${key}"]:`, error);
      throw error;
    }
  }

  async deleteItem(key: string): Promise<void> {
    try {
      await this.pool.query('DELETE FROM storage WHERE key = $1', [key]);
    } catch (error) {
      console.error(`❌ Erreur DELETE storage["${key}"]:`, error);
      throw error;
    }
  }

  async close() {
    console.log('🔒 Fermeture de la pool PostgreSQL...');
    await this.pool.end();
    console.log('✅ Pool PostgreSQL fermée');
  }
}

// ❌ NE PAS EXPORTER - fichier en sommeil
// Pour réactiver : décommentez la ligne ci-dessous
// export const storage = new PgStorage();

console.log('⚠️ pgStorage.ts chargé mais NON UTILISÉ (fichier en sommeil)');