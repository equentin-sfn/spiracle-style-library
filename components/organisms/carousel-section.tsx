"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/templates";
import { ScrollCarousel } from "@/components/molecules";

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

const fadeColors: Record<BackgroundVariant, string> = {
  cream: "from-spiracle-cream",
  dark: "from-[#2D2520]",
  white: "from-white",
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
        <ScrollCarousel
          className={cn(
            "[&_.bg-gradient-to-l]:from-transparent",
            `[&_.bg-gradient-to-l]:${fadeColors[background]}`
          )}
        >
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
