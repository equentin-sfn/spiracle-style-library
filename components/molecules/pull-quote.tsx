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
      {/* Decorative opening quote */}
      <span
        className={cn(
          "absolute font-serif text-spiracle-terracotta/20 select-none pointer-events-none",
          isLarge
            ? "-top-6 -left-2 text-[8rem] leading-none"
            : "-top-4 -left-1 text-[5rem] leading-none",
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
            "block w-12 h-px bg-spiracle-terracotta/40 mb-3",
            isCentered && "mx-auto"
          )}
          aria-hidden="true"
        />

        <span className="text-sm uppercase tracking-wider text-muted-foreground">
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
