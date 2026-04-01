"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const THEME_CHANGE = "portfolio-theme-change";

function resolveDark(): boolean {
  if (typeof document === "undefined") return false;
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "dark") return true;
  if (explicit === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribeTheme(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onMq = () => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    onStoreChange();
  };
  const onCustom = () => onStoreChange();
  mq.addEventListener("change", onMq);
  window.addEventListener(THEME_CHANGE, onCustom);
  return () => {
    mq.removeEventListener("change", onMq);
    window.removeEventListener(THEME_CHANGE, onCustom);
  };
}

function getServerSnapshot(): boolean {
  return false;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeTheme, resolveDark, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !resolveDark();
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(THEME_CHANGE));
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="focus-ring inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
