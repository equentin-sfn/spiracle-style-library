"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Check } from "@phosphor-icons/react";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Plan name */
  name: string;
  /** Audience label (e.g., "GRAZER", "REGULAR LISTENER") */
  audienceLabel?: string;
  /** Price amount */
  price: number | "Free";
  /** Price suffix (e.g., "/month") */
  priceSuffix?: string;
  /** Annual price for comparison */
  annualPrice?: number;
  /** Whether showing annual pricing */
  isAnnual?: boolean;
  /** List of features */
  features: PricingFeature[];
  /** CTA text */
  ctaText?: string;
  /** CTA href */
  ctaHref: string;
  /** Whether this is the highlighted/recommended plan */
  highlighted?: boolean;
  /** Badge text (e.g., "Best Value", "Most Popular") */
  badge?: string;
  /** Whether this is a free tier (styled differently) */
  isFree?: boolean;
}

function PricingCard({
  name,
  audienceLabel,
  price,
  priceSuffix = "/month",
  annualPrice,
  isAnnual = false,
  features,
  ctaText = "Get started",
  ctaHref,
  highlighted = false,
  badge,
  isFree = false,
  className,
  ...props
}: PricingCardProps) {
  const displayPrice = isAnnual && annualPrice !== undefined ? annualPrice : price;
  const monthlyEquivalent = isAnnual && typeof annualPrice === "number"
    ? Math.round((annualPrice / 12) * 100) / 100
    : null;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-sm overflow-hidden",
        "transition-all duration-300 ease-out",
        highlighted
          ? [
              "bg-card border-2 border-primary/30",
              "shadow-[0_12px_32px_rgba(45,37,32,0.12),0_4px_12px_rgba(45,37,32,0.08)]",
              "dark:shadow-[0_12px_32px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)]",
              "hover:shadow-[0_16px_40px_rgba(45,37,32,0.15),0_6px_16px_rgba(45,37,32,0.1)]",
              "dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35),0_6px_16px_rgba(0,0,0,0.25)]",
              "scale-[1.02] hover:scale-[1.03]",
            ]
          : isFree
          ? [
              "bg-muted/50 dark:bg-muted/30 border border-border/30",
              "hover:border-border/50",
            ]
          : [
              "bg-card border border-border/30",
              "hover:border-border/50 hover:-translate-y-1",
              "hover:shadow-[0_8px_24px_rgba(45,37,32,0.1),0_2px_8px_rgba(45,37,32,0.06)]",
              "dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]",
            ],
        className
      )}
      {...props}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-0 right-0">
          <div
            className={cn(
              "px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold",
              "bg-primary text-primary-foreground",
              "rounded-bl-sm"
            )}
          >
            {badge}
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Audience Label */}
        {audienceLabel && (
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-medium mb-2",
              highlighted ? "text-primary" : "text-muted-foreground"
            )}
          >
            {audienceLabel}
          </p>
        )}

        {/* Plan Name */}
        <h3 className="font-display text-xl sm:text-2xl text-foreground">
          {name}
        </h3>

        {/* Price */}
        <div className="mt-4 mb-6">
          <div className="flex items-baseline gap-1">
            {displayPrice === "Free" || displayPrice === 0 ? (
              <span className="font-display text-3xl sm:text-4xl text-foreground">
                Free
              </span>
            ) : (
              <>
                <span className="font-display text-3xl sm:text-4xl text-foreground">
                  £{displayPrice}
                </span>
                <span className="text-sm text-muted-foreground">
                  {isAnnual ? "/year" : priceSuffix}
                </span>
              </>
            )}
          </div>
          {/* Monthly equivalent for annual */}
          {isAnnual && monthlyEquivalent && (
            <p className="text-xs text-muted-foreground mt-1 font-serif italic">
              That's just £{monthlyEquivalent.toFixed(2)}/month
            </p>
          )}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant={highlighted ? "default" : isFree ? "outline" : "secondary"}
          className={cn(
            "w-full",
            highlighted && "shadow-sm"
          )}
        >
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>

        {/* Divider */}
        <div className="my-6 h-px bg-border/50" aria-hidden="true" />

        {/* Features List */}
        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-start gap-3 text-sm",
                feature.included
                  ? "text-foreground"
                  : "text-muted-foreground/50 line-through"
              )}
            >
              <Check
                className={cn(
                  "size-4 mt-0.5 flex-shrink-0",
                  feature.included
                    ? highlighted
                      ? "text-primary"
                      : "text-primary/70"
                    : "text-muted-foreground/30"
                )}
                weight={feature.included ? "bold" : "regular"}
              />
              <span className="font-serif">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { PricingCard };
