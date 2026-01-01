"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PlanToggle, PricingCard } from "@/components/molecules";
import type { BillingPeriod } from "@/components/molecules/plan-toggle";
import type { PricingFeature } from "@/components/molecules/pricing-card";

export interface PricingPlan {
  name: string;
  description?: string;
  audienceLabel?: string;
  monthlyPrice: number | "Free";
  annualPrice?: number;
  features: PricingFeature[];
  footerNote?: string;
  ctaText?: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  isFree?: boolean;
}

export interface PricingGridProps extends React.HTMLAttributes<HTMLElement> {
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Pricing plans */
  plans: PricingPlan[];
  /** Savings badge text for annual toggle */
  savingsBadge?: string;
}

function PricingGrid({
  heading = "Choose your plan",
  subheading,
  plans,
  savingsBadge = "2 months free",
  className,
  ...props
}: PricingGridProps) {
  const [billingPeriod, setBillingPeriod] = React.useState<BillingPeriod>("monthly");

  // Check if any plan has annual pricing
  const hasAnnualOption = plans.some((plan) => plan.annualPrice !== undefined);

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10 sm:mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {subheading}
              </p>
            )}
          </header>

          {/* Billing Toggle */}
          {hasAnnualOption && (
            <div className="mb-10 sm:mb-12">
              <PlanToggle
                value={billingPeriod}
                onChange={setBillingPeriod}
                savingsBadge={savingsBadge}
              />
            </div>
          )}

          {/* Pricing Cards Grid */}
          <div
            className={cn(
              "grid gap-6 lg:gap-8",
              plans.length === 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : plans.length === 3
                ? "grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto"
                : "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
            )}
          >
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                description={plan.description}
                audienceLabel={plan.audienceLabel}
                price={plan.monthlyPrice}
                annualPrice={plan.annualPrice}
                isAnnual={billingPeriod === "annually"}
                features={plan.features}
                footerNote={plan.footerNote}
                ctaText={plan.ctaText}
                ctaHref={plan.ctaHref}
                highlighted={plan.highlighted}
                badge={plan.badge}
                isFree={plan.isFree}
              />
            ))}
          </div>

          {/* Trust Message */}
          <p className="text-center text-sm text-muted-foreground mt-10">
            Cancel anytime. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

export { PricingGrid };
