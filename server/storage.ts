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

// ⚠️ Stockage en mémoire - Les données sont perdues au redémarrage
// Pour une persistance, utilisez PgStorage (voir pgStorage.ts)
export class MemoryStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private storage: Map<string, any> = new Map();

  constructor() {
    console.log('✅ Stockage en mémoire initialisé (TarotMystik)');
    console.log('⚠️  Les données seront perdues au redémarrage du serveur');
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    // ✅ Convertir Map.values() en Array pour éviter l'erreur TypeScript
    const usersArray = Array.from(this.users.values());
    for (const user of usersArray) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = {
      id,
      username: insertUser.username,
      email: insertUser.email,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    console.log(`👤 Utilisateur créé: ${user.username} (${user.id})`);
    return user;
  }

  async getItem(key: string): Promise<any> {
    const value = this.storage.get(key);
    console.log(`📥 GET storage["${key}"] → ${value !== undefined ? 'trouvé' : 'null'}`);
    return value !== undefined ? value : null;
  }

  async setItem(key: string, value: any): Promise<void> {
    this.storage.set(key, value);
    const preview = typeof value === 'string' 
      ? value.substring(0, 50) 
      : JSON.stringify(value).substring(0, 50);
    console.log(`📤 SET storage["${key}"] → ${preview}${preview.length >= 50 ? '...' : ''}`);
  }

  async deleteItem(key: string): Promise<void> {
    const existed = this.storage.has(key);
    this.storage.delete(key);
    console.log(`🗑️  DELETE storage["${key}"] → ${existed ? 'supprimé' : 'n\'existait pas'}`);
  }

  async close() {
    console.log('🔒 Fermeture du stockage en mémoire');
    this.users.clear();
    this.storage.clear();
  }

  // Méthodes utilitaires pour le développement
  getStats() {
    return {
      users: this.users.size,
      storageKeys: this.storage.size,
    };
  }

  clear() {
    this.users.clear();
    this.storage.clear();
    console.log('🧹 Stockage en mémoire vidé');
  }
}

// ✅ Export de l'instance par défaut
export const storage = new MemoryStorage();

// ✅ AJOUT : Fonctions utilitaires pour validation email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}