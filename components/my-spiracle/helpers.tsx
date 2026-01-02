"use client";

// =============================================================================
// MY SPIRACLE - SHARED HELPER COMPONENTS
// Reusable building blocks for My Spiracle sections
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Check, Star } from "lucide-react";

// =============================================================================
// SECTION WRAPPER
// =============================================================================

export type SectionBackground =
  | "cream"
  | "parchment"
  | "blush"
  | "sage"
  | "honey"
  | "dark"
  | "transparent";

export interface SectionProps {
  children: React.ReactNode;
  background?: SectionBackground;
  className?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  cream: "bg-spiracle-cream dark:bg-background",
  parchment: "bg-spiracle-parchment dark:bg-card",
  blush: "bg-[#EBDEDB] dark:bg-[#3D2D2A]",
  sage: "bg-[#C0C9C2] dark:bg-[#2A3330]",
  honey: "bg-[#f6eecd] dark:bg-[#3D3820]",
  dark: "bg-[#2D2520] dark:bg-[#1A1512] text-spiracle-cream",
  transparent: "",
};

export function Section({ children, background = "transparent", className }: SectionProps) {
  return (
    <section className={cn(
      "px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
      backgroundClasses[background],
      className
    )}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}

// =============================================================================
// SECTION LABEL
// =============================================================================

export interface SectionLabelProps {
  children: React.ReactNode;
  href?: string;
}

export function SectionLabel({ children, href }: SectionLabelProps) {
  const labelContent = (
    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="group flex items-center gap-2 mb-4 sm:mb-6">
        {labelContent}
        <ChevronRight className="size-3 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
      </Link>
    );
  }

  return <div className="mb-4 sm:mb-6">{labelContent}</div>;
}

// =============================================================================
// BOOK COVER (Standard book shape)
// =============================================================================

export interface BookCoverProps {
  title: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BookCover({ title, size = "md", className }: BookCoverProps) {
  const sizeClasses = {
    sm: "w-12 h-[72px]",
    md: "w-16 h-24",
    lg: "w-24 h-36",
  };

  const colors = [
    "bg-spiracle-forest",
    "bg-spiracle-burgundy",
    "bg-spiracle-terracotta",
    "bg-spiracle-slate",
    "bg-spiracle-navy",
  ];
  const colorIndex = title.length % colors.length;

  return (
    <div
      className={cn(
        sizeClasses[size],
        colors[colorIndex],
        "rounded-sm flex items-end p-1.5 shadow-sm",
        className
      )}
    >
      <span className="text-[8px] text-white/80 font-serif leading-tight line-clamp-2">
        {title}
      </span>
    </div>
  );
}

// =============================================================================
// SQUARE BOOK COVER (Audiobook format)
// =============================================================================

export interface SquareBookCoverProps {
  title: string;
  size?: "sm" | "md" | "lg";
  status?: "completed" | "in_progress" | "abandoned";
  progress?: number;
  className?: string;
}

export function SquareBookCover({
  title,
  size = "md",
  status,
  progress,
  className,
}: SquareBookCoverProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  };

  const colors = [
    "bg-spiracle-forest",
    "bg-spiracle-burgundy",
    "bg-spiracle-terracotta",
    "bg-spiracle-slate",
    "bg-spiracle-navy",
  ];
  const colorIndex = title.length % colors.length;

  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          sizeClasses[size],
          colors[colorIndex],
          "rounded-md flex items-end p-2 shadow-sm transition-transform",
          status === "abandoned" && "opacity-60",
          "group-hover:scale-[1.02]"
        )}
      >
        <span className="text-[9px] text-white/80 font-serif leading-tight line-clamp-2">
          {title}
        </span>
      </div>

      {status === "completed" && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-spiracle-forest dark:bg-primary rounded-full flex items-center justify-center shadow-sm">
          <Check className="size-3 text-white" strokeWidth={2.5} />
        </div>
      )}

      {status === "in_progress" && progress !== undefined && (
        <div className="absolute -top-1 -right-1 w-6 h-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-spiracle-sand dark:text-secondary"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${(progress / 100) * 62.83} 62.83`}
              className="text-spiracle-terracotta dark:text-spiracle-honey"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[8px] font-medium text-foreground">
            {progress}
          </span>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// USER AVATAR (Social features)
// =============================================================================

export interface UserAvatarProps {
  initials: string;
  name: string;
  color?: string;
  size?: "xs" | "sm" | "md";
  className?: string;
}

export function UserAvatar({
  initials,
  name,
  color,
  size = "sm",
  className,
}: UserAvatarProps) {
  const sizeClasses = {
    xs: "w-5 h-5 text-[8px]",
    sm: "w-6 h-6 text-[9px]",
    md: "w-8 h-8 text-xs",
  };

  return (
    <button
      className={cn(
        sizeClasses[size],
        color || "bg-spiracle-slate",
        "rounded-full flex items-center justify-center text-white font-medium",
        "ring-2 ring-spiracle-cream dark:ring-card",
        "hover:ring-spiracle-terracotta dark:hover:ring-spiracle-honey transition-all",
        "cursor-pointer",
        className
      )}
      aria-label={`View ${name}'s profile`}
      title={name}
    >
      {initials}
    </button>
  );
}

// =============================================================================
// PROGRESS BAR
// =============================================================================

export interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div
      className={cn(
        "h-1.5 bg-spiracle-sand dark:bg-secondary rounded-full overflow-hidden",
        className
      )}
    >
      <div
        className="h-full bg-spiracle-forest dark:bg-primary rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// =============================================================================
// WATERCOLOR BAR (Organic brushstroke effect)
// =============================================================================

export interface WatercolorBarProps {
  percentage: number;
  color: string;
  className?: string;
}

export function WatercolorBar({ percentage, color, className }: WatercolorBarProps) {
  const colorMap: Record<string, { base: string; edge: string }> = {
    "bg-spiracle-forest": {
      base: "var(--watercolor-forest-base, #4a9e5b)",
      edge: "var(--watercolor-forest-edge, #266D36)",
    },
    "bg-spiracle-burgundy": {
      base: "var(--watercolor-burgundy-base, #a33333)",
      edge: "var(--watercolor-burgundy-edge, #730000)",
    },
    "bg-spiracle-terracotta": {
      base: "var(--watercolor-terracotta-base, #c66a2d)",
      edge: "var(--watercolor-terracotta-edge, #9F4300)",
    },
    "bg-spiracle-slate": {
      base: "var(--watercolor-slate-base, #6b7db0)",
      edge: "var(--watercolor-slate-edge, #47507C)",
    },
  };

  const colors = colorMap[color] || colorMap["bg-spiracle-forest"];
  const barId = `watercolor-bar-${color.replace(/[^a-z]/gi, "")}-${percentage}`;

  return (
    <div className={cn("relative h-3", className)}>
      <div className="absolute inset-0 bg-spiracle-sand/50 dark:bg-secondary/50 rounded-full" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={`${barId}-filter`} x="-20%" y="-50%" width="140%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08"
              numOctaves="3"
              seed={percentage * 7}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="0.3" />
          </filter>
          <linearGradient id={`${barId}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.edge} stopOpacity="0.7" />
            <stop offset="15%" stopColor={colors.base} stopOpacity="0.85" />
            <stop offset="50%" stopColor={colors.base} stopOpacity="0.9" />
            <stop offset="85%" stopColor={colors.base} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.edge} stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d={`
            M 0 6
            Q ${percentage * 0.1} ${4 + Math.sin(percentage * 0.1) * 1.5}
              ${percentage * 0.3} ${5 + Math.sin(percentage * 0.2) * 1}
            Q ${percentage * 0.5} ${6 + Math.cos(percentage * 0.15) * 1.5}
              ${percentage * 0.7} ${5.5 + Math.sin(percentage * 0.25) * 1}
            Q ${percentage * 0.9} ${6 + Math.cos(percentage * 0.1) * 1}
              ${percentage} ${5.5 + Math.sin(percentage * 0.3) * 0.5}
            L ${percentage} ${7.5 + Math.cos(percentage * 0.2) * 0.5}
            Q ${percentage * 0.9} ${7 + Math.sin(percentage * 0.15) * 1}
              ${percentage * 0.7} ${7.5 + Math.cos(percentage * 0.2) * 1}
            Q ${percentage * 0.5} ${7 + Math.sin(percentage * 0.1) * 1.5}
              ${percentage * 0.3} ${7.5 + Math.cos(percentage * 0.25) * 1}
            Q ${percentage * 0.1} ${8 + Math.sin(percentage * 0.2) * 1}
              0 6
            Z
          `}
          fill={`url(#${barId}-gradient)`}
          filter={`url(#${barId}-filter)`}
        />
        <path
          d={`
            M ${percentage * 0.05} 6
            Q ${percentage * 0.3} ${5.5 + Math.sin(percentage * 0.12) * 0.8}
              ${percentage * 0.6} ${6 + Math.cos(percentage * 0.18) * 0.8}
            Q ${percentage * 0.8} ${5.8 + Math.sin(percentage * 0.22) * 0.5}
              ${percentage * 0.95} 6
            L ${percentage * 0.95} 7
            Q ${percentage * 0.7} ${7 + Math.cos(percentage * 0.15) * 0.6}
              ${percentage * 0.4} ${6.8 + Math.sin(percentage * 0.2) * 0.7}
            Q ${percentage * 0.2} ${7.2 + Math.cos(percentage * 0.1) * 0.5}
              ${percentage * 0.05} 6
            Z
          `}
          fill={colors.edge}
          opacity="0.25"
          filter={`url(#${barId}-filter)`}
        />
      </svg>
    </div>
  );
}

// =============================================================================
// STAR RATING
// =============================================================================

export interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "size-3",
            star <= rating
              ? "fill-spiracle-terracotta text-spiracle-terracotta"
              : "text-spiracle-sand dark:text-muted"
          )}
        />
      ))}
    </div>
  );
}
