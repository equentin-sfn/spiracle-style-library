"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/templates";

type BackgroundVariant = "cream" | "dark" | "white" | "blush" | "sage" | "honey";

const backgroundStyles: Record<BackgroundVariant, string> = {
  cream: "bg-background",
  dark: "bg-[#2D2520]",
  white: "bg-white dark:bg-card",
  // Subtle tinted backgrounds - light mode uses brand colors, dark mode uses warm tinted browns
  blush: "bg-[#EBDEDB] dark:bg-[#3a2d2a]",
  sage: "bg-[#C0C9C2] dark:bg-[#2d3530]",
  honey: "bg-[#f6eecd] dark:bg-[#3a3525]",
};

const labelStyles: Record<BackgroundVariant, string> = {
  cream: "text-muted-foreground",
  dark: "text-white/50",
  white: "text-muted-foreground",
  blush: "text-foreground/60",
  sage: "text-foreground/60",
  honey: "text-foreground/60",
};

export interface QuoteSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section heading displayed in spaced caps */
  label: string;
  /** Optional link on the label */
  labelHref?: string;
  /** Background color variant */
  background?: BackgroundVariant;
  /** Number of columns on large screens */
  columns?: 2 | 3;
}

const columnStyles = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

function QuoteSection({
  label,
  labelHref,
  background = "cream",
  columns = 3,
  children,
  className,
  ...props
}: QuoteSectionProps) {
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
        {/* Section Label */}
        <header className="text-center mb-6 sm:mb-8">
          {labelHref ? (
            <Link href={labelHref} className={labelClassName}>
              {label} →
            </Link>
          ) : (
            <span className={labelClassName}>{label}</span>
          )}
        </header>

        {/* Quote Cards Grid */}
        <div
          className={cn(
            "grid grid-cols-1 gap-6 lg:gap-8 stagger-children",
            columnStyles[columns]
          )}
        >
          {children}
        </div>
      </PageWrapper>
    </section>
  );
}

export { QuoteSection };
