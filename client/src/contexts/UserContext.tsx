import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ZodiacSign as BaseZodiacSign } from '@shared/schema';

// ✅ On étend le type ZodiacSign pour ajouter les dates
export interface ZodiacSign extends BaseZodiacSign {
  dates?: {
    start: { month: number; day: number };
    end: { month: number; day: number };
  };
}

// ✅ AJOUT : Support Premium
export interface UserSession {
  name: string;
  birthDate: string;
  gender: string;
  zodiacSign?: ZodiacSign;
  // ✅ NOUVEAUX CHAMPS PREMIUM
  email?: string; // Pour RevenueCat
  isPremium?: boolean; // Statut premium local (cache)
  premiumUntil?: string; // Date d'expiration
}

interface UserContextType {
  user: UserSession;
  setUser: (user: UserSession) => void;
  updateUser: (updates: Partial<UserSession>) => void;
  clearUser: () => void;
  // ✅ NOUVEAUX : Gestion Premium
  updatePremiumStatus: (isPremium: boolean, premiumUntil?: string) => void;
  setUserEmail: (email: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// ✅ MODIFIÉ : Nouvelle clé pour TarotMystik
const USER_STORAGE_KEY = 'tarotmystik_user_session';

const loadUserFromStorage = (): UserSession => {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('❌ Erreur chargement user:', error);
  }
  return { name: '', birthDate: '', gender: '' };
};

const saveUserToStorage = (user: UserSession) => {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    console.log('✅ User sauvegardé:', { 
      name: user.name, 
      email: user.email, 
      isPremium: user.isPremium 
    });
  } catch (error) {
    console.error('❌ Erreur sauvegarde user:', error);
  }
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserSession>(loadUserFromStorage);

  // ✅ Sauvegarder automatiquement à chaque changement
  useEffect(() => {
    if (user.name || user.birthDate || user.gender || user.email) {
      saveUserToStorage(user);
    }
  }, [user]);

  const setUser = (newUser: UserSession) => {
    setUserState(newUser);
  };

  const updateUser = (updates: Partial<UserSession>) => {
    setUserState(prev => ({ ...prev, ...updates }));
  };

  const clearUser = () => {
    setUserState({ name: '', birthDate: '', gender: '' });
    localStorage.removeItem(USER_STORAGE_KEY);
    console.log('🗑️ User session effacée');
  };

  // ✅ NOUVEAU : Mettre à jour le statut premium
  const updatePremiumStatus = (isPremium: boolean, premiumUntil?: string) => {
    setUserState(prev => ({
      ...prev,
      isPremium,
      premiumUntil: isPremium ? premiumUntil : undefined,
    }));
    console.log(`💎 Premium mis à jour: ${isPremium ? 'Actif' : 'Inactif'}`);
  };

  // ✅ NOUVEAU : Définir l'email (pour RevenueCat)
  const setUserEmail = (email: string) => {
    const normalizedEmail = email.toLowerCase().trim();
    setUserState(prev => ({
      ...prev,
      email: normalizedEmail,
    }));
    console.log('📧 Email défini:', normalizedEmail);
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      updateUser, 
      clearUser,
      updatePremiumStatus,
      setUserEmail,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser doit être utilisé dans un UserProvider');
  }
  return context;
}