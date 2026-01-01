"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// ============================================
// Tag System for Spiracle
// ============================================
// Three styles:
// 1. MinimalDotTag (Default) - Subtle dot + text, for card footers
// 2. BelowCoverTag (Bold) - Solid background pill, for emphasis
// 3. CornerBadge (Accent) - On-cover badge for strong promotions
// ============================================

export type TagVariant =
  | "staff-pick"
  | "spiracle-special"
  | "spiracle-edition"
  | "new-release"
  | "new"
  | "free"
  | "included"
  | "best-value"
  | "editors-choice"
  | "pick-of-week"
  | "pick-of-month"
  | "limited"
  | "exclusive"
  | "offer"
  | "coming-soon"
  | "preorder";

export type TagColor = "dark" | "burgundy" | "terracotta" | "forest" | "gold" | "slate";

export interface TagProps {
  variant: TagVariant;
  color?: TagColor;
  children?: React.ReactNode;
  className?: string;
}

// Default labels
const defaultLabels: Record<TagVariant, string> = {
  "staff-pick": "Staff Pick",
  "spiracle-special": "Spiracle Special",
  "spiracle-edition": "Spiracle Edition",
  "new-release": "New Release",
  "new": "New",
  "free": "Free",
  "included": "Included",
  "best-value": "Best Value",
  "editors-choice": "Editor's Choice",
  "pick-of-week": "Pick of the Week",
  "pick-of-month": "Pick of the Month",
  "limited": "Limited",
  "exclusive": "Exclusive",
  "offer": "Offer",
  "coming-soon": "Coming Soon",
  "preorder": "Pre-order",
};

// Default colors for each variant
const variantColors: Record<TagVariant, TagColor> = {
  "staff-pick": "dark",
  "spiracle-special": "burgundy",
  "spiracle-edition": "burgundy",
  "new-release": "terracotta",
  "new": "terracotta",
  "free": "forest",
  "included": "slate",
  "best-value": "forest",
  "editors-choice": "forest",
  "pick-of-week": "terracotta",
  "pick-of-month": "terracotta",
  "limited": "burgundy",
  "exclusive": "burgundy",
  "offer": "gold",
  "coming-soon": "slate",
  "preorder": "gold",
};

// Dot colors for MinimalDotTag
const dotColors: Record<TagColor, string> = {
  dark: "bg-[#2D2520] dark:bg-[#F4EEDC]",
  burgundy: "bg-[#730000] dark:bg-[#a82222]",
  terracotta: "bg-[#9F4300] dark:bg-[#b54d00]",
  forest: "bg-[#266D36] dark:bg-[#2d7d40]",
  gold: "bg-[#C9A227] dark:bg-[#d4a84b]",
  slate: "bg-[#47507C] dark:bg-[#5a6590]",
};

// Background colors for BelowCoverTag (Bold)
const boldColors: Record<TagColor, { bg: string; text: string }> = {
  dark: {
    bg: "bg-[#2D2520] dark:bg-[#F4EEDC]",
    text: "text-[#F4EEDC] dark:text-[#2D2520]",
  },
  burgundy: {
    bg: "bg-[#730000] dark:bg-[#8a1a1a]",
    text: "text-white",
  },
  terracotta: {
    bg: "bg-[#9F4300] dark:bg-[#b54d00]",
    text: "text-white",
  },
  forest: {
    bg: "bg-[#266D36] dark:bg-[#2d7d40]",
    text: "text-white",
  },
  gold: {
    bg: "bg-[#C9A227] dark:bg-[#d4a84b]",
    text: "text-[#2D2520]",
  },
  slate: {
    bg: "bg-[#47507C] dark:bg-[#5a6590]",
    text: "text-white",
  },
};

// ============================================
// 1. MinimalDotTag (Default)
// Subtle dot + text, elegant and readable
// ============================================
export interface MinimalDotTagProps extends TagProps {}

function MinimalDotTag({
  variant,
  color,
  children,
  className,
}: MinimalDotTagProps) {
  const label = children ?? defaultLabels[variant];
  const tagColor = color ?? variantColors[variant];

  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", dotColors[tagColor])}
        aria-hidden="true"
      />
      <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-foreground/80 dark:text-foreground/70">
        {label}
      </span>
    </span>
  );
}

// ============================================
// 2. BelowCoverTag (Bold) - KEEP AS IS
// Solid background pill for emphasis
// ============================================
export interface BelowCoverTagProps extends TagProps {}

function BelowCoverTag({
  variant,
  color,
  children,
  className,
}: BelowCoverTagProps) {
  const label = children ?? defaultLabels[variant];
  const tagColor = color ?? variantColors[variant];
  const colors = boldColors[tagColor];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1",
        "text-[10px] font-medium uppercase tracking-[0.12em]",
        "rounded-sm",
        colors.bg,
        colors.text,
        className
      )}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-60" aria-hidden="true" />
      {label}
    </span>
  );
}

// ============================================
// 3. CornerBadge (Accent) - REDESIGNED
// Solid dark background, white text, always readable
// Use ONLY for: "FREE", "50% OFF", "LIMITED"
// ============================================
export type CornerPosition = "top-left" | "top-right";

export interface CornerBadgeProps extends TagProps {
  position?: CornerPosition;
}

// Always use dark solid backgrounds for maximum readability
const badgeColors: Record<TagColor, { bg: string; text: string }> = {
  dark: { bg: "bg-[#2D2520]", text: "text-white" },
  burgundy: { bg: "bg-[#5a0000]", text: "text-white" },
  terracotta: { bg: "bg-[#7a3300]", text: "text-white" },
  forest: { bg: "bg-[#1a4d24]", text: "text-white" },
  gold: { bg: "bg-[#2D2520]", text: "text-[#E8D48A]" },
  slate: { bg: "bg-[#3a4260]", text: "text-white" },
};

const positionClasses: Record<CornerPosition, string> = {
  "top-left": "top-2 left-2",
  "top-right": "top-2 right-2",
};

function CornerBadge({
  variant,
  color,
  position = "top-left",
  children,
  className,
}: CornerBadgeProps) {
  const label = children ?? defaultLabels[variant];
  const tagColor = color ?? variantColors[variant];
  const colors = badgeColors[tagColor];

  return (
    <span
      className={cn(
        "absolute z-10",
        positionClasses[position],
        "inline-flex items-center px-2 py-1",
        "text-[9px] font-bold uppercase tracking-[0.08em]",
        "rounded-sm",
        "shadow-md",
        colors.bg,
        colors.text,
        className
      )}
    >
      {label}
    </span>
  );
}

// ============================================
// Exports
// ============================================

// Tag is an alias for MinimalDotTag (default style)
const Tag = MinimalDotTag;

export {
  Tag,
  MinimalDotTag,
  BelowCoverTag,
  CornerBadge,
};
