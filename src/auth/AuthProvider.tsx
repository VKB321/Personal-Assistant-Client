import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { clearStoredAuth, getStoredAuth, setStoredAuth } from "../lib/api";

interface AuthState {
  token: string;
  userId: string;
  isAuthenticated: boolean;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const stored = getStoredAuth();
    setToken(stored.token);
    setUserId(stored.user_id);
  }, []);

  const login = useCallback((nextToken: string, nextUserId: string) => {
    setStoredAuth(nextToken, nextUserId);
    setToken(nextToken);
    setUserId(nextUserId);
  }, []);

  const logout = useCallback(() => {
    clearStoredAuth();
    setToken("");
    setUserId("");
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      token,
      userId,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, userId, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}
