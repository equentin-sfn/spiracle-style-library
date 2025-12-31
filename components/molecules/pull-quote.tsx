"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** The quote text */
  quote: string;
  /** Attribution (person or publication name) */
  attribution: string;
  /** Optional secondary attribution (e.g., "The Irish Times") */
  source?: string;
  /** Size variant */
  size?: "default" | "large";
  /** Alignment */
  align?: "left" | "center";
}

function PullQuote({
  quote,
  attribution,
  source,
  size = "default",
  align = "left",
  className,
  ...props
}: PullQuoteProps) {
  const isLarge = size === "large";
  const isCentered = align === "center";

  return (
    <figure
      className={cn(
        "relative",
        isCentered && "text-center",
        className
      )}
      {...props}
    >
      {/* Decorative opening quote - literary flourish */}
      <span
        className={cn(
          "absolute font-display text-primary/15 dark:text-primary/10 select-none pointer-events-none",
          isLarge
            ? "-top-8 -left-3 text-[10rem] leading-none"
            : "-top-5 -left-2 text-[6rem] leading-none",
          isCentered && "left-1/2 -translate-x-1/2"
        )}
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote text */}
      <blockquote
        className={cn(
          "relative font-serif text-foreground leading-relaxed",
          isLarge
            ? "text-2xl sm:text-3xl lg:text-4xl"
            : "text-xl sm:text-2xl",
          isCentered ? "max-w-2xl mx-auto" : "max-w-xl"
        )}
      >
        <p className="italic">{quote}</p>
      </blockquote>

      {/* Attribution */}
      <figcaption
        className={cn(
          "mt-4 sm:mt-6",
          isCentered && "flex flex-col items-center"
        )}
      >
        {/* Decorative line */}
        <span
          className={cn(
            "block w-12 h-px bg-primary/40 mb-3",
            isCentered && "mx-auto"
          )}
          aria-hidden="true"
        />

        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          — {attribution}
        </span>

        {source && (
          <span className="block text-xs text-muted-foreground/70 mt-1 italic">
            {source}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

export { PullQuote };
