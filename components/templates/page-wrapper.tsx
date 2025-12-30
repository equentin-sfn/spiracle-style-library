"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * When true, removes the inner 1280px constraint.
   * Use for hero sections, full-width backgrounds, etc.
   */
  fullBleed?: boolean;
  /**
   * Custom max-width for the inner content area.
   * Defaults to max-w-7xl (1280px).
   * Use max-w-5xl or max-w-6xl for text-heavy content.
   */
  innerMaxWidth?: "max-w-5xl" | "max-w-6xl" | "max-w-7xl";
  /**
   * Remove horizontal padding from inner content.
   * Useful when child components handle their own padding.
   */
  noPadding?: boolean;
}

/**
 * PageWrapper - Layout container for consistent page structure
 *
 * Provides a two-layer layout system:
 * - Outer: max-w-[1440px] - constrains entire page width
 * - Inner: max-w-7xl (1280px) - constrains content with padding
 *
 * @example
 * // Standard content section
 * <PageWrapper>
 *   <MyContent />
 * </PageWrapper>
 *
 * @example
 * // Full-bleed hero section
 * <PageWrapper fullBleed>
 *   <HeroWithBackground />
 * </PageWrapper>
 *
 * @example
 * // Narrower text content
 * <PageWrapper innerMaxWidth="max-w-5xl">
 *   <ArticleContent />
 * </PageWrapper>
 */
function PageWrapper({
  children,
  fullBleed = false,
  innerMaxWidth = "max-w-7xl",
  noPadding = false,
  className,
  ...props
}: PageWrapperProps) {
  return (
    <div
      className={cn("w-full max-w-[1440px] mx-auto", className)}
      {...props}
    >
      {fullBleed ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto",
            innerMaxWidth,
            !noPadding && "px-4 sm:px-6 lg:px-8"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export { PageWrapper };
