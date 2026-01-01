"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ThemeToggle - Multi-Platform Excellence
 *
 * Touch targets: 44px minimum
 * Hover states: Scoped to desktop via CSS @media (hover: hover) in globals.css
 */

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "spiracle-theme";

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export interface ThemeToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Size of the icon in pixels */
  iconSize?: number;
}

function ThemeToggle({
  iconSize = 20,
  className,
  ...props
}: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<Theme>("light");
  const [mounted, setMounted] = React.useState(false);

  // Load saved theme on mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  const getIcon = () => {
    if (!mounted) {
      // Render a placeholder during SSR to avoid hydration mismatch
      return <Sun size={iconSize} strokeWidth={1.5} />;
    }
    return theme === "light" ? (
      <Sun size={iconSize} strokeWidth={1.5} />
    ) : (
      <Moon size={iconSize} strokeWidth={1.5} />
    );
  };

  const getLabel = () => {
    return theme === "light" ? "Switch to dark mode" : "Switch to light mode";
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-slot="theme-toggle"
      className={cn(
        // 44px minimum touch target
        "min-w-[44px] min-h-[44px] flex items-center justify-center",
        "rounded-md text-foreground transition-colors",
        // Focus states (work on all devices)
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={getLabel()}
      title={getLabel()}
      {...props}
    >
      {getIcon()}
    </button>
  );
}

export { ThemeToggle };
