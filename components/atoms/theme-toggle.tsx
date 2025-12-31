"use client";

import * as React from "react";
import { Sun, Moon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

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
      return <Sun size={iconSize} weight="regular" />;
    }
    return theme === "light" ? (
      <Sun size={iconSize} weight="regular" />
    ) : (
      <Moon size={iconSize} weight="regular" />
    );
  };

  const getLabel = () => {
    return theme === "light" ? "Switch to dark mode" : "Switch to light mode";
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-md text-foreground hover:bg-secondary transition-colors",
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
