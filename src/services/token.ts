const AUTH_TOKEN_KEY = 'six-cities-token';

export function saveToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function removeToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function getToken(): string {
  return localStorage.getItem(AUTH_TOKEN_KEY) || '';
}
