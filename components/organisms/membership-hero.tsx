"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AdaptiveIllustration } from "@/components/molecules/adaptive-illustration";

export interface MembershipHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Main headline */
  headline?: string;
  /** Supporting description */
  description?: string;
  /** Light mode illustration URL */
  illustrationSrc?: string;
  /** Dark mode illustration URL */
  illustrationDarkSrc?: string;
  /** Decorative label above headline */
  label?: string;
}

function MembershipHero({
  headline = "Join the Spiracle Community",
  description = "Become part of a community that celebrates the art of listening. Discover handpicked audiobooks, exclusive narrations, and a library curated with love by people who care deeply about great writing.",
  illustrationSrc = "/illustrations/full-membership.png",
  illustrationDarkSrc = "/illustrations/full-membership-dark.png",
  label = "Membership",
  className,
  ...props
}: MembershipHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "py-16 sm:py-20 lg:py-24",
        "bg-gradient-to-b from-spiracle-honey/30 via-background to-background",
        "dark:from-spiracle-honey/10 dark:via-background dark:to-background",
        className
      )}
      {...props}
    >
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, var(--spiracle-blush) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, var(--spiracle-honey) 0%, transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Label */}
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/40" aria-hidden="true" />
                  {label}
                </span>
              </p>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1]">
                {headline}
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-serif max-w-xl mx-auto lg:mx-0">
                {description}
              </p>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/60" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/60" />
                  No commitment
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/60" />
                  Start free
                </span>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <AdaptiveIllustration
                  lightSrc={illustrationSrc}
                  darkSrc={illustrationDarkSrc}
                  alt="Join Spiracle membership"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                {/* Subtle glow behind illustration */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-30"
                  style={{
                    background: "radial-gradient(circle, var(--spiracle-honey) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MembershipHero };
