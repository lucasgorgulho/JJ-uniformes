// Sistema de autenticação simples usando localStorage
const AUTH_KEY = "admin_authenticated";
const AUTH_USER = "admin"; // Em produção, use variáveis de ambiente
const AUTH_PASSWORD = "admin"; // Em produção, use variáveis de ambiente

export function login(email: string, password: string): boolean {
  if (email === AUTH_USER && password === AUTH_PASSWORD) {
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_KEY, "true");
    }
    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return localStorage.getItem(AUTH_KEY) === "true";
}
