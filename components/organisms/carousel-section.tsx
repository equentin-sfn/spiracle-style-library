"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/templates";
import { ScrollCarousel } from "@/components/molecules";

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
  cream: "text-foreground",
  dark: "text-white/60",
  white: "text-foreground",
  blush: "text-foreground",
  sage: "text-foreground",
  honey: "text-foreground",
};

const fadeColors: Record<BackgroundVariant, string> = {
  cream: "from-background",
  dark: "from-[#2D2520]",
  white: "from-white dark:from-card",
  blush: "from-[#EBDEDB] dark:from-[#3a2d2a]",
  sage: "from-[#C0C9C2] dark:from-[#2d3530]",
  honey: "from-[#f6eecd] dark:from-[#3a3525]",
};

export interface CarouselSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Section heading displayed in spaced caps */
  label: string;
  /** Optional link on the label */
  labelHref?: string;
  /** Background color variant */
  background?: BackgroundVariant;
  /** Gap between carousel items */
  gap?: "sm" | "md" | "lg";
}

const gapStyles = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

function CarouselSection({
  label,
  labelHref,
  background = "cream",
  gap = "md",
  children,
  className,
  ...props
}: CarouselSectionProps) {
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
      <PageWrapper noPadding>
        {/* Section Label */}
        <header className="text-center mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8">
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

        {/* Carousel Content */}
        <ScrollCarousel fadeFromClass={fadeColors[background]}>
          <div
            className={cn(
              "flex px-4 sm:px-6 lg:px-8 pb-2",
              gapStyles[gap]
            )}
          >
            {children}
          </div>
        </ScrollCarousel>
      </PageWrapper>
    </section>
  );
}

export { CarouselSection };
