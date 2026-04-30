import axios from "axios";

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "http://localhost:8000";

export const api = axios.create({ baseURL: API_BASE_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }
  return config;
});

export function getStoredAuth() {
  return {
    token: localStorage.getItem("token") ?? "",
    user_id: localStorage.getItem("user_id") ?? "",
  };
}

export function clearStoredAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
}

export function setStoredAuth(token: string, userId: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", userId);
}
