"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { AdaptiveIllustration } from "@/components/molecules/adaptive-illustration";
import { Gift, UserPlus, PencilSimple } from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface GiftStep {
  icon: PhosphorIcon;
  title: string;
  description: string;
}

export interface GiftSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section label */
  label?: string;
  /** Main headline */
  headline?: string;
  /** Supporting description */
  description?: string;
  /** Gift steps */
  steps?: GiftStep[];
  /** CTA text */
  ctaText?: string;
  /** CTA href */
  ctaHref?: string;
  /** Light mode illustration URL */
  illustrationSrc?: string;
  /** Dark mode illustration URL */
  illustrationDarkSrc?: string;
}

const defaultSteps: GiftStep[] = [
  {
    icon: Gift,
    title: "Choose a plan",
    description: "Select the perfect membership tier for your recipient",
  },
  {
    icon: UserPlus,
    title: "Add recipient",
    description: "Enter their email and choose a delivery date",
  },
  {
    icon: PencilSimple,
    title: "Personalise",
    description: "Add a heartfelt message to make it special",
  },
];

function GiftSection({
  label = "Gift Membership",
  headline = "Share the Joy of Listening",
  description = "Give the gift of extraordinary audiobooks. A Spiracle membership is perfect for the book lover, the curious mind, or anyone who deserves more wonder in their ears.",
  steps = defaultSteps,
  ctaText = "Give a membership",
  ctaHref = "/gift",
  illustrationSrc = "/illustrations/oasis.png",
  illustrationDarkSrc = "/illustrations/oasis-dark.png",
  className,
  ...props
}: GiftSectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        "bg-[#2D2520] text-white",
        className
      )}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Illustration */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <AdaptiveIllustration
                  lightSrc={illustrationDarkSrc || illustrationSrc}
                  darkSrc={illustrationDarkSrc || illustrationSrc}
                  alt="Gift a Spiracle membership"
                  width={400}
                  height={350}
                  className="w-full h-auto"
                />
                {/* Subtle glow */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-20"
                  style={{
                    background: "radial-gradient(circle, var(--spiracle-honey) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              {/* Label */}
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-spiracle-honey font-medium mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-8 h-px bg-spiracle-honey/50" aria-hidden="true" />
                  {label}
                </span>
              </p>

              {/* Headline */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                {headline}
              </h2>

              {/* Description */}
              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed font-serif max-w-lg">
                {description}
              </p>

              {/* Steps */}
              <div className="mt-8 space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-sm",
                        "bg-white/5 border border-white/10",
                        "transition-colors duration-200 hover:bg-white/10"
                      )}
                    >
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-spiracle-honey/20 text-spiracle-honey flex-shrink-0">
                        <Icon className="size-5" weight="regular" />
                      </div>
                      {/* Content */}
                      <div>
                        <h3 className="font-medium text-white text-sm sm:text-base">
                          {step.title}
                        </h3>
                        <p className="text-sm text-white/60 mt-0.5 font-serif">
                          {step.description}
                        </p>
                      </div>
                      {/* Step Number */}
                      <span className="ml-auto text-2xl font-display text-white/20">
                        {index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-spiracle-honey text-[#2D2520] hover:bg-spiracle-honey/90"
                >
                  <Link href={ctaHref}>
                    <Gift className="size-4 mr-2" weight="regular" />
                    {ctaText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GiftSection };
