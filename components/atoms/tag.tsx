"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TagVariant =
  | "spiracle-special"
  | "spiracle-edition"
  | "best-value"
  | "new"
  | "new-release"
  | "offer"
  | "staff-pick"
  | "pick-of-week"
  | "pick-of-month"
  | "editors-choice"
  | "limited"
  | "exclusive"
  | "free"
  | "included"
  | "coming-soon"
  | "preorder";

export type TagStyle = "pill" | "flag" | "ribbon";
export type TagSize = "sm" | "md";
export type FlagDirection = "left" | "right";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic variant determining color and default label */
  variant: TagVariant;
  /** Visual style of the tag */
  tagStyle?: TagStyle;
  /** Size of the tag */
  size?: TagSize;
  /** Direction of flag point (only for flag style) */
  flagDirection?: FlagDirection;
  /** Custom label text (overrides default) */
  children?: React.ReactNode;
}

// Default labels for each variant
const defaultLabels: Record<TagVariant, string> = {
  "spiracle-special": "Spiracle Special",
  "spiracle-edition": "Spiracle Edition",
  "best-value": "Best Value",
  "new": "New",
  "new-release": "New Release",
  "offer": "Offer",
  "staff-pick": "Staff Pick",
  "pick-of-week": "Pick of the Week",
  "pick-of-month": "Pick of the Month",
  "editors-choice": "Editor's Choice",
  "limited": "Limited",
  "exclusive": "Exclusive",
  "free": "Free",
  "included": "Included in Premium",
  "coming-soon": "Coming Soon",
  "preorder": "Pre-order",
};

// Color configurations for each variant
// Format: [bgLight, textLight, bgDark, textDark]
const variantColors: Record<TagVariant, [string, string, string, string]> = {
  // Burgundy variants - white text
  "spiracle-special": ["bg-[#730000]", "text-white", "dark:bg-[#730000]", "dark:text-white"],
  "spiracle-edition": ["bg-[#730000]", "text-white", "dark:bg-[#730000]", "dark:text-white"],
  "limited": ["bg-[#730000]", "text-white", "dark:bg-[#8a1a1a]", "dark:text-white"],
  "exclusive": ["bg-[#730000]", "text-white", "dark:bg-[#730000]", "dark:text-white"],

  // Forest green variants - white text
  "best-value": ["bg-[#266D36]", "text-white", "dark:bg-[#2d7d40]", "dark:text-white"],
  "editors-choice": ["bg-[#266D36]", "text-white", "dark:bg-[#2d7d40]", "dark:text-white"],
  "free": ["bg-[#266D36]", "text-white", "dark:bg-[#2d7d40]", "dark:text-white"],

  // Terracotta variants - white text
  "new": ["bg-[#9F4300]", "text-white", "dark:bg-[#b54d00]", "dark:text-white"],
  "new-release": ["bg-[#9F4300]", "text-white", "dark:bg-[#b54d00]", "dark:text-white"],
  "pick-of-week": ["bg-[#9F4300]", "text-white", "dark:bg-[#b54d00]", "dark:text-white"],
  "pick-of-month": ["bg-[#9F4300]", "text-white", "dark:bg-[#b54d00]", "dark:text-white"],

  // Soft/pale variants - dark text
  "staff-pick": ["bg-[#C0C9C2]", "text-[#2D2520]", "dark:bg-[#8a9a8d]", "dark:text-[#1a1815]"],
  "included": ["bg-[#C0C9C2]", "text-[#2D2520]", "dark:bg-[#8a9a8d]", "dark:text-[#1a1815]"],

  // Yellow/amber variants - dark text
  "offer": ["bg-[#F1E5A3]", "text-[#5a4a00]", "dark:bg-[#d4a84b]", "dark:text-[#2D2520]"],
  "preorder": ["bg-[#F1E5A3]", "text-[#5a4a00]", "dark:bg-[#d4a84b]", "dark:text-[#2D2520]"],

  // Neutral variants
  "coming-soon": ["bg-[#F4EEDC]", "text-[#5a5347]", "dark:bg-[#4a443a]", "dark:text-[#e8e2d0]"],
};

function Tag({
  variant,
  tagStyle = "pill",
  size = "md",
  flagDirection = "right",
  children,
  className,
  ...props
}: TagProps) {
  const label = children ?? defaultLabels[variant];
  const [bgLight, textLight, bgDark, textDark] = variantColors[variant];

  // Size classes
  const sizeClasses = {
    sm: tagStyle === "ribbon"
      ? "text-[9px] py-1 px-6"
      : "text-[10px] py-0.5 px-2",
    md: tagStyle === "ribbon"
      ? "text-[10px] py-1.5 px-8"
      : "text-[11px] py-1 px-2.5",
  };

  // Base classes shared across all styles
  const baseClasses = cn(
    "inline-flex items-center justify-center font-semibold uppercase tracking-[0.08em]",
    bgLight,
    textLight,
    bgDark,
    textDark,
    sizeClasses[size]
  );

  // Pill style - rounded, inline
  if (tagStyle === "pill") {
    return (
      <span
        className={cn(
          baseClasses,
          "rounded-full",
          className
        )}
        {...props}
      >
        {label}
      </span>
    );
  }

  // Flag style - angled edge like a bookmark ribbon
  if (tagStyle === "flag") {
    return (
      <span
        className={cn(
          "relative inline-flex items-center",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            baseClasses,
            "relative",
            flagDirection === "right" ? "rounded-l-sm pr-4" : "rounded-r-sm pl-4",
            "shadow-sm"
          )}
          style={{
            clipPath: flagDirection === "right"
              ? "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)"
              : "polygon(8px 0, 100% 0, 100% 100%, 8px 100%, 0 50%)",
          }}
        >
          {label}
        </span>
      </span>
    );
  }

  // Ribbon style - 45° corner banner
  if (tagStyle === "ribbon") {
    return (
      <span
        className={cn(
          "absolute -right-[1px] -top-[1px] overflow-hidden",
          "w-24 h-24 pointer-events-none",
          className
        )}
        aria-label={typeof label === "string" ? label : undefined}
        {...props}
      >
        <span
          className={cn(
            baseClasses,
            "absolute w-32 text-center",
            "shadow-md",
            // Position and rotate the ribbon
            "top-[18px] -right-[32px]",
            "rotate-45 origin-center"
          )}
        >
          {label}
        </span>
      </span>
    );
  }

  return null;
}

// Convenience wrapper for ribbon that includes proper positioning context
function TagRibbon({
  variant,
  size = "md",
  children,
  className,
  ...props
}: Omit<TagProps, "tagStyle" | "flagDirection">) {
  return (
    <Tag
      variant={variant}
      tagStyle="ribbon"
      size={size}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}

export { Tag, TagRibbon };
