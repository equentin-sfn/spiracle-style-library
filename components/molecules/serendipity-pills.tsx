"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";

export interface SerendipityPill {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
}

export interface SerendipityPillsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /** Array of suggestion pills */
  pills: SerendipityPill[];
  /** Label text above the pills */
  label?: string;
  /** Callback when a pill is clicked */
  onPillClick?: (pill: SerendipityPill) => void;
  /** Callback when shuffle button is clicked */
  onShuffle?: () => void;
  /** Whether shuffle is currently loading */
  isShuffling?: boolean;
}

// Seeded random for consistent rotations per pill
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return (hash % 100) / 100;
}

function SerendipityPills({
  pills,
  label = "I'm in the mood for...",
  onPillClick,
  onShuffle,
  isShuffling = false,
  className,
  ...props
}: SerendipityPillsProps) {
  const [shuffleKey, setShuffleKey] = React.useState(0);

  const handleShuffle = () => {
    setShuffleKey((prev) => prev + 1);
    onShuffle?.();
  };

  return (
    <section
      className={cn("flex flex-col items-center gap-4 sm:gap-5", className)}
      aria-label="Discovery suggestions"
      {...props}
    >
      {/* Label with decorative flourishes */}
      <header className="flex items-center gap-3 sm:gap-4">
        {/* Left flourish */}
        <svg
          className="w-8 sm:w-12 h-3 text-border"
          viewBox="0 0 48 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 6C8 6 8 2 16 2C24 2 24 10 32 10C40 10 40 6 48 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <h2 className="font-display text-lg sm:text-xl text-foreground italic tracking-wide">
          {label}
        </h2>

        {/* Right flourish */}
        <svg
          className="w-8 sm:w-12 h-3 text-border"
          viewBox="0 0 48 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 6C8 6 8 10 16 10C24 10 24 2 32 2C40 2 40 6 48 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </header>

      {/* Pills container */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl">
        {pills.map((pill, index) => {
          // Generate subtle random rotation for organic feel (-2 to 2 degrees)
          const rotation =
            (seededRandom(pill.id + shuffleKey.toString()) - 0.5) * 4;

          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => onPillClick?.(pill)}
              className={cn(
                // Base styles - aged paper/index card aesthetic
                "relative px-4 py-2 sm:px-5 sm:py-2.5",
                "text-sm sm:text-base text-foreground/90",
                "bg-[#faf8f0] dark:bg-[#4a423a]",
                "border border-[#d4c9b8] dark:border-[#5a524a]",
                "rounded-sm shadow-sm",
                // Handwritten/library card texture
                "before:absolute before:inset-0 before:rounded-sm",
                "before:bg-[linear-gradient(135deg,transparent_40%,rgba(0,0,0,0.02)_50%,transparent_60%)]",
                "dark:before:bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.02)_50%,transparent_60%)]",
                // Hover state - lift and warm
                "transition-all duration-200 ease-out",
                "hover:-translate-y-0.5 hover:shadow-md",
                "hover:bg-[#f7f3e8] dark:hover:bg-[#554d44]",
                "hover:border-spiracle-terracotta/40 dark:hover:border-spiracle-terracotta/30",
                // Active state
                "active:translate-y-0 active:shadow-sm",
                // Focus state
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-spiracle-terracotta/50 focus-visible:ring-offset-2",
                // Animation entrance
                "animate-in fade-in-0 slide-in-from-bottom-2",
                "cursor-pointer"
              )}
              style={{
                transform: `rotate(${rotation}deg)`,
                animationDelay: `${index * 50}ms`,
                animationFillMode: "backwards",
              }}
              aria-label={`Discover ${pill.label}`}
            >
              {/* Decorative corner marks like index cards */}
              <span
                className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#c4b9a8]/40 dark:border-[#6a625a]/40"
                aria-hidden="true"
              />
              <span
                className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#c4b9a8]/40 dark:border-[#6a625a]/40"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#c4b9a8]/40 dark:border-[#6a625a]/40"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#c4b9a8]/40 dark:border-[#6a625a]/40"
                aria-hidden="true"
              />

              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Shuffle button */}
      <button
        type="button"
        onClick={handleShuffle}
        disabled={isShuffling}
        className={cn(
          "group flex items-center gap-2 px-4 py-2",
          "font-sans text-xs sm:text-sm text-[#6b5d4d] dark:text-[#b8a890]",
          "transition-all duration-200 ease-out",
          "hover:text-[#4a3f35] dark:hover:text-[#e8dfd0]",
          "focus:outline-none focus-visible:text-[#4a3f35] dark:focus-visible:text-[#e8dfd0]",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        aria-label="Shuffle suggestions"
      >
        <RefreshCw
          strokeWidth={1.5}
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            "group-hover:rotate-180",
            isShuffling && "animate-spin"
          )}
        />
        <span className="link-underline">Show me more</span>
      </button>
    </section>
  );
}

export { SerendipityPills };
