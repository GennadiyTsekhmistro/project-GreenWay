'use client';
// Власник: Олександр (TL). Після перезавантаження сторінки підтягує користувача (TECH: сесія зберігається).
import { useEffect } from 'react';

import { getMe } from '@/lib/api/auth';
import { useAuthStore } from '@/lib/store/authStore';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);

  useEffect(() => {
    getMe()
      .then(setUser)
      .catch(() => clearIsAuthenticated());
  }, [setUser, clearIsAuthenticated]);

  return children;
}
