"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/templates";

type BackgroundVariant = "cream" | "dark" | "white";

const backgroundStyles: Record<BackgroundVariant, string> = {
  cream: "bg-spiracle-cream",
  dark: "bg-[#2D2520]",
  white: "bg-white",
};

const labelStyles: Record<BackgroundVariant, string> = {
  cream: "text-foreground",
  dark: "text-white/60",
  white: "text-foreground",
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
  children,
  className,
  ...props
}: GridSectionProps) {
  const LabelWrapper = labelHref ? Link : "span";

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
          <LabelWrapper
            {...(labelHref ? { href: labelHref } : {})}
            className={cn(
              "text-xs sm:text-sm uppercase tracking-[0.2em]",
              labelStyles[background],
              labelHref && "hover:underline"
            )}
          >
            {label}
            {labelHref && " →"}
          </LabelWrapper>
        </header>

        {/* Grid Content */}
        <div
          className={cn(
            "grid grid-cols-1",
            columnStyles[columns],
            gapStyles[gap]
          )}
        >
          {children}
        </div>
      </PageWrapper>
    </section>
  );
}

export { GridSection };
