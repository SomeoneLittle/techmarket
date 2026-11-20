"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Demo-only auth. There is no backend: a single hard-coded test account
 * (login "111", password "111") is accepted and the session lives in localStorage.
 */
export const DEMO_LOGIN = "111";
export const DEMO_PASSWORD = "111";
const KEY = "tm_demo_session";
const EVENT = "tm-session";

export type DemoUser = { name: string; email: string; since: string };

const DEMO_USER: DemoUser = { name: "111", email: "111@demo.local", since: "November 2026" };

function read(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function signIn(login: string, password: string): boolean {
  if (login.trim() !== DEMO_LOGIN || password !== DEMO_PASSWORD) return false;
  try {
    window.localStorage.setItem(KEY, "1");
  } catch {
    /* storage unavailable: session will not persist */
  }
  window.dispatchEvent(new Event(EVENT));
  return true;
}

export function signOut() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Returns the demo user, null for guests, or undefined before hydration. */
export function useSession(): DemoUser | null | undefined {
  const raw = useSyncExternalStore(subscribe, read, () => "__server__");
  if (raw === "__server__") return undefined;
  return raw ? DEMO_USER : null;
}

export function useSignOut() {
  return useCallback(() => signOut(), []);
}
