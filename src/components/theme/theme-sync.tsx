"use client";

import { useEffect } from "react";

/** Applies saved/system theme after mount to avoid hydration mismatches. */
export function ThemeSync() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return null;
}
