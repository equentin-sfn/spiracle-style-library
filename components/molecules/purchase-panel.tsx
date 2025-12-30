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
      className={cn("flex flex-col gap-4", className)}
      aria-label="Purchase options"
      {...props}
    >
      {/* Trial Section */}
      <div className="flex flex-col gap-3">
        <p className="text-sm text-foreground">{trialMessage}</p>
        <p className="text-3xl sm:text-4xl font-semibold text-foreground">
          {trialPrice}
        </p>
        <Button
          asChild
          className="w-full bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream border-spiracle-burgundy"
        >
          <Link href={trialCtaHref}>{trialCtaText}</Link>
        </Button>
      </div>

      {/* Benefits List */}
      <ul className="text-sm text-foreground space-y-2 list-disc list-outside pl-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="leading-relaxed">
            {benefit}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr className="border-border" />

      {/* Buy Section */}
      <div className="flex flex-col gap-3">
        <p className="text-base font-medium text-foreground">Buy</p>
        <Button
          asChild
          variant="secondary"
          className="w-full bg-spiracle-parchment hover:bg-spiracle-sand text-spiracle-ink border border-spiracle-sand"
        >
          <Link href={buyCtaHref}>
            {buyPrice} / {memberPrice} for Premium Members
          </Link>
        </Button>
      </div>
    </aside>
  );
}

export { PurchasePanel };
