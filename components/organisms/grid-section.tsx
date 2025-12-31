"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/templates";
import { Button } from "@/components/atoms";

type BackgroundVariant = "cream" | "dark" | "parchment" | "blush" | "sage" | "honey";

const backgroundStyles: Record<BackgroundVariant, string> = {
  cream: "bg-background",
  dark: "bg-[#2D2520]",
  parchment: "bg-spiracle-parchment dark:bg-card",
  // Subtle tinted backgrounds - light mode uses brand colors, dark mode uses warm tinted browns
  blush: "bg-[#EBDEDB] dark:bg-[#3a2d2a]",
  sage: "bg-[#C0C9C2] dark:bg-[#2d3530]",
  honey: "bg-[#f6eecd] dark:bg-[#3a3525]",
};

const labelStyles: Record<BackgroundVariant, string> = {
  cream: "text-muted-foreground",
  dark: "text-white/50",
  parchment: "text-muted-foreground",
  blush: "text-foreground/60",
  sage: "text-foreground/60",
  honey: "text-foreground/60",
};

export interface GridSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section heading displayed in spaced caps */
  label: string;
  /** Optional link on the label */
  labelHref?: string;
  /** Background color variant */
  background?: BackgroundVariant;
  /** Number of columns on large screens */
  columns?: 2 | 3 | 4;
  /** Gap between grid items */
  gap?: "sm" | "md" | "lg";
  /** Optional "See more" link href */
  seeMoreHref?: string;
  /** Optional "See more" button label */
  seeMoreLabel?: string;
}

const columnStyles = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const gapStyles = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

function GridSection({
  label,
  labelHref,
  background = "cream",
  columns = 3,
  gap = "md",
  seeMoreHref,
  seeMoreLabel = "See more →",
  children,
  className,
  ...props
}: GridSectionProps) {
  const labelClassName = cn(
    "text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] font-medium",
    labelStyles[background],
    labelHref && "hover:underline underline-offset-4"
  );

  return (
    <section
      className={cn(
        "w-full py-12 sm:py-16",
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      <PageWrapper>
        {/* Section Label - Editorial flourish */}
        <header className="text-center mb-8 sm:mb-10">
          {labelHref ? (
            <Link href={labelHref} className={cn(labelClassName, "inline-flex items-center gap-3")}>
              <span className="w-8 h-px bg-current opacity-30" aria-hidden="true" />
              {label}
              <span className="w-8 h-px bg-current opacity-30" aria-hidden="true" />
            </Link>
          ) : (
            <span className={cn(labelClassName, "inline-flex items-center gap-3")}>
              <span className="w-8 h-px bg-current opacity-30" aria-hidden="true" />
              {label}
              <span className="w-8 h-px bg-current opacity-30" aria-hidden="true" />
            </span>
          )}
        </header>

        {/* Grid Content */}
        <div
          className={cn(
            "grid grid-cols-1 stagger-children",
            columnStyles[columns],
            gapStyles[gap]
          )}
        >
          {children}
        </div>

        {/* Optional "See more" button */}
        {seeMoreHref && (
          <footer className="flex justify-center pt-8">
            <Button
              variant="outline"
              size="sm"
              asChild
              className={cn(
                "bg-spiracle-parchment/60 dark:bg-card/60",
                "border-foreground/20 hover:border-foreground/30",
                "text-foreground/80 hover:text-foreground",
                "hover:bg-spiracle-parchment dark:hover:bg-card",
                "transition-all duration-200"
              )}
            >
              <Link href={seeMoreHref}>{seeMoreLabel}</Link>
            </Button>
          </footer>
        )}
      </PageWrapper>
    </section>
  );
}

export { GridSection };
