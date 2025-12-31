"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AdaptiveIllustrationProps {
  /** Path to black line version (for light mode) */
  lightSrc: string;
  /** Path to white line version (for dark mode) */
  darkSrc: string;
  /** Alt text for the illustration */
  alt: string;
  /** Optional className for the container */
  className?: string;
  /** Image width (required for Next.js Image optimization) */
  width?: number;
  /** Image height (required for Next.js Image optimization) */
  height?: number;
  /** Whether to fill the container (alternative to width/height) */
  fill?: boolean;
  /** Sizes attribute for responsive images */
  sizes?: string;
  /** Priority loading */
  priority?: boolean;
}

/**
 * AdaptiveIllustration - Automatically swaps between light and dark mode illustrations
 *
 * Uses CSS to show/hide appropriate version based on the .dark class.
 * No JavaScript required for the swap, works with SSR.
 *
 * @example
 * <AdaptiveIllustration
 *   lightSrc="/images/building-black.png"
 *   darkSrc="/images/building-white.png"
 *   alt="Spiracle bookshop illustration"
 *   fill
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
function AdaptiveIllustration({
  lightSrc,
  darkSrc,
  alt,
  className,
  width,
  height,
  fill = false,
  sizes,
  priority = false,
}: AdaptiveIllustrationProps) {
  const imageProps = fill
    ? { fill: true as const, sizes }
    : { width, height };

  return (
    <div className={cn("relative", className)}>
      {/* Light mode version - hidden in dark mode */}
      <Image
        src={lightSrc}
        alt={alt}
        className={cn(
          "dark:hidden",
          fill && "object-contain"
        )}
        priority={priority}
        {...imageProps}
      />
      {/* Dark mode version - hidden in light mode */}
      <Image
        src={darkSrc}
        alt={alt}
        className={cn(
          "hidden dark:block",
          fill && "object-contain"
        )}
        priority={priority}
        {...imageProps}
      />
    </div>
  );
}

export { AdaptiveIllustration };
