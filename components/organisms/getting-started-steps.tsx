"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  Headphones,
  BookOpen,
  Heart,
} from "lucide-react";

export interface Step {
  /** Step icon */
  icon: LucideIcon;
  /** Step heading */
  heading: string;
  /** Step description */
  description: string;
}

export interface GettingStartedStepsProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Section heading */
  heading?: string;
  /** Optional subheading */
  subheading?: string;
  /** Array of steps to display */
  steps?: Step[];
  /** Whether to show step numbers */
  showNumbers?: boolean;
}

const defaultSteps: Step[] = [
  {
    icon: BookOpen,
    heading: "Browse our collection",
    description:
      "Explore our carefully curated library of literary fiction and non-fiction audiobooks.",
  },
  {
    icon: Headphones,
    heading: "Listen anywhere",
    description:
      "Download the Spiracle app and enjoy your audiobooks offline, on any device.",
  },
  {
    icon: Heart,
    heading: "Join the community",
    description:
      "Become a member for exclusive access, discounts, and early releases.",
  },
];

// Background now uses CSS variables for dark mode support

function GettingStartedSteps({
  heading = "How it works",
  subheading,
  steps = defaultSteps,
  showNumbers = true,
  className,
  ...props
}: GettingStartedStepsProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - Editorial style */}
          <header className="text-center mb-14 sm:mb-18">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.15]">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
                {subheading}
              </p>
            )}
          </header>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 stagger-children">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={index}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Icon Container - Warm and inviting */}
                  <div
                    className={cn(
                      "relative flex items-center justify-center",
                      "w-18 h-18 sm:w-22 sm:h-22 rounded-full",
                      "bg-card border border-border/50",
                      "shadow-sm",
                      "transition-all duration-300 ease-out",
                      "group-hover:bg-spiracle-sand/40 group-hover:border-border group-hover:shadow-md group-hover:-translate-y-1",
                      "dark:group-hover:bg-muted/80"
                    )}
                  >
                    <Icon
                      className="size-8 sm:size-9 text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {/* Step Number */}
                    {showNumbers && (
                      <span
                        className={cn(
                          "absolute -top-1.5 -right-1.5",
                          "flex items-center justify-center",
                          "w-7 h-7 rounded-full",
                          "bg-foreground text-background",
                          "text-xs font-semibold shadow-sm"
                        )}
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 font-display text-xl sm:text-2xl text-foreground text-center">
                    {step.heading}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs text-left">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on mobile and after last item) */}
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "hidden md:block absolute top-8 sm:top-10 left-[calc(50%+40px)] sm:left-[calc(50%+48px)]",
                        "w-[calc(100%-80px)] sm:w-[calc(100%-96px)] h-px",
                        "bg-gradient-to-r from-border via-border/50 to-border"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { GettingStartedSteps };
