"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  Headphones,
  BookOpen,
  Heart,
} from "@phosphor-icons/react";

export interface Step {
  /** Step icon */
  icon: PhosphorIcon;
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
  /** Background variant */
  variant?: "default" | "cream" | "white";
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

const variantStyles = {
  default: "bg-spiracle-cream",
  cream: "bg-spiracle-parchment",
  white: "bg-white",
};

function GettingStartedSteps({
  heading = "How it works",
  subheading,
  steps = defaultSteps,
  showNumbers = true,
  variant = "default",
  className,
  ...props
}: GettingStartedStepsProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", variantStyles[variant], className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-left">
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
                  {/* Icon Container */}
                  <div
                    className={cn(
                      "relative flex items-center justify-center",
                      "w-16 h-16 sm:w-20 sm:h-20 rounded-full",
                      "bg-spiracle-sand/50 border border-spiracle-terracotta/20",
                      "transition-all duration-300 ease-out",
                      "group-hover:bg-spiracle-honey/30 group-hover:border-spiracle-terracotta/40"
                    )}
                  >
                    <Icon
                      className="size-7 sm:size-8 text-spiracle-forest"
                      weight="regular"
                      aria-hidden="true"
                    />
                    {/* Step Number */}
                    {showNumbers && (
                      <span
                        className={cn(
                          "absolute -top-1 -right-1",
                          "flex items-center justify-center",
                          "w-6 h-6 rounded-full",
                          "bg-spiracle-terracotta text-white",
                          "text-xs font-semibold"
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
                        "bg-gradient-to-r from-spiracle-terracotta/30 via-spiracle-terracotta/20 to-spiracle-terracotta/30"
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
