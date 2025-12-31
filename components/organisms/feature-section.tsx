"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { CheckCircle } from "@phosphor-icons/react";
import { AdaptiveIllustration } from "@/components/molecules/adaptive-illustration";

export interface FeatureBenefit {
  /** Benefit icon (optional, defaults to CheckCircle) */
  icon?: PhosphorIcon;
  /** Benefit title */
  title: string;
  /** Benefit description */
  description: string;
}

export interface FeatureSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section label in spaced caps */
  label: string;
  /** Main headline (displayed in serif italic) */
  headline: string;
  /** Description paragraph */
  description: string;
  /** List of benefit items */
  benefits: FeatureBenefit[];
  /** Illustration image source (light mode / black lines) */
  illustrationSrc: string;
  /** Illustration dark mode source (white lines) - if provided, uses AdaptiveIllustration */
  illustrationDarkSrc?: string;
  /** Illustration alt text */
  illustrationAlt: string;
  /** Reverse column order (illustration left, content right) */
  reverse?: boolean;
}

function FeatureSection({
  label,
  headline,
  description,
  benefits,
  illustrationSrc,
  illustrationDarkSrc,
  illustrationAlt,
  reverse = false,
  className,
  ...props
}: FeatureSectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
              reverse && "lg:grid-flow-dense"
            )}
          >
            {/* Content Column */}
            <div
              className={cn(
                "flex flex-col",
                reverse && "lg:col-start-2"
              )}
            >
              {/* Label - Editorial flourish */}
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/70 font-medium mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-8 h-px bg-border" aria-hidden="true" />
                  {label}
                </span>
              </p>

              {/* Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground italic leading-snug">
                {headline}
              </h2>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground text-left font-serif">
                {description}
              </p>

              {/* Benefits List */}
              {benefits.length > 0 && (
                <div className="mt-8 sm:mt-10 space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon || CheckCircle;
                    return (
                      <div key={index} className="flex items-start gap-4 group/benefit">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-spiracle-sand/40 dark:bg-muted transition-colors duration-200 group-hover/benefit:bg-spiracle-sand/60 dark:group-hover/benefit:bg-muted/80">
                          <Icon
                            className="size-4 text-primary"
                            weight="fill"
                            aria-hidden="true"
                          />
                        </div>
                        {/* Content */}
                        <div>
                          <h3 className="font-semibold text-base text-foreground">
                            {benefit.title}
                          </h3>
                          <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed text-left font-serif">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Illustration Column */}
            <div
              className={cn(
                "relative flex justify-center lg:justify-end",
                reverse && "lg:col-start-1 lg:justify-start"
              )}
            >
              <div className="relative w-full max-w-md lg:max-w-none">
                {illustrationDarkSrc ? (
                  <AdaptiveIllustration
                    lightSrc={illustrationSrc}
                    darkSrc={illustrationDarkSrc}
                    alt={illustrationAlt}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <Image
                    src={illustrationSrc}
                    alt={illustrationAlt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain illustration-adaptive"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FeatureSection };
