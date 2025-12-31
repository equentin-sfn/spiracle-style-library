"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface PurchasePanelProps extends React.HTMLAttributes<HTMLElement> {
  trialMessage: string;
  trialPrice: string;
  trialCtaText: string;
  trialCtaHref: string;
  benefits: string[];
  buyPrice: string;
  memberPrice: string;
  buyCtaHref: string;
}

function PurchasePanel({
  trialMessage,
  trialPrice,
  trialCtaText,
  trialCtaHref,
  benefits,
  buyPrice,
  memberPrice,
  buyCtaHref,
  className,
  ...props
}: PurchasePanelProps) {
  return (
    <aside
      className={cn(
        "flex flex-col bg-card rounded-sm border border-border/50 p-5 sm:p-6",
        className
      )}
      aria-label="Purchase options"
      {...props}
    >
      {/* Trial Section */}
      <div className="flex flex-col gap-2 mb-5">
        <p className="text-sm text-muted-foreground leading-snug">{trialMessage}</p>
        <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
          {trialPrice}
        </p>
      </div>

      <Button
        asChild
        size="lg"
        className="w-full bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream border-spiracle-burgundy mb-5"
      >
        <Link href={trialCtaHref}>{trialCtaText}</Link>
      </Button>

      {/* Benefits List */}
      <ul className="text-sm text-muted-foreground space-y-2.5 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
            {benefit}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr className="border-border/60 mb-5" />

      {/* Buy Section */}
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-wider text-foreground/70 font-semibold">
          Or buy outright
        </p>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full border-border hover:bg-secondary/50 text-foreground"
        >
          <Link href={buyCtaHref} className="flex flex-col py-1.5 h-auto">
            <span className="text-lg font-semibold tracking-tight">{memberPrice}</span>
            <span className="text-xs text-muted-foreground font-normal">
              {buyPrice} for non-members
            </span>
          </Link>
        </Button>
      </div>
    </aside>
  );
}

export { PurchasePanel };
