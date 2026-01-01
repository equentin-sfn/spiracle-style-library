"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Headphones, Gift, BookOpen, Book, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Format types
export type FormatType = "audiobook" | "aiac" | "ebook" | "hardback" | "paperback";

export interface PurchaseFormat {
  type: FormatType;
  /** Price for this format */
  price: number;
  /** Member price (optional) */
  memberPrice?: number;
  /** Whether available */
  available: boolean;
}

export interface PurchasePanelProps extends React.HTMLAttributes<HTMLElement> {
  /** Available formats - if empty or single audiobook, shows classic trial panel */
  formats?: PurchaseFormat[];
  /** Currently selected format (controlled) */
  selectedFormat?: FormatType;
  /** Callback when format changes */
  onFormatChange?: (format: FormatType) => void;
  /** Trial message (audiobook) */
  trialMessage: string;
  /** Trial price display */
  trialPrice: string;
  /** Trial CTA text */
  trialCtaText: string;
  /** Trial CTA href */
  trialCtaHref: string;
  /** Benefits list (audiobook trial) */
  benefits: string[];
  /** Buy outright price (non-member) */
  buyPrice: string;
  /** Member price */
  memberPrice: string;
  /** Buy CTA href */
  buyCtaHref: string;
  /** Checkout href for physical/ebook */
  checkoutHref?: string;
}

interface FormatTabConfig {
  icon: LucideIcon;
  label: string;
  shortLabel: string;
}

const formatTabConfigs: Record<FormatType, FormatTabConfig> = {
  audiobook: { icon: Headphones, label: "Listen", shortLabel: "Listen" },
  aiac: { icon: Gift, label: "Card Edition", shortLabel: "Card" },
  ebook: { icon: BookOpen, label: "eBook", shortLabel: "eBook" },
  hardback: { icon: Book, label: "Hardback", shortLabel: "Hard" },
  paperback: { icon: Book, label: "Paperback", shortLabel: "Paper" },
};

function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

function PurchasePanel({
  formats = [],
  selectedFormat: controlledFormat,
  onFormatChange,
  trialMessage,
  trialPrice,
  trialCtaText,
  trialCtaHref,
  benefits,
  buyPrice,
  memberPrice,
  buyCtaHref,
  checkoutHref,
  className,
  ...props
}: PurchasePanelProps) {
  // Internal state for format selection
  const [internalFormat, setInternalFormat] = React.useState<FormatType>("audiobook");

  // Use controlled or internal state
  const currentFormat = controlledFormat ?? internalFormat;

  const handleFormatChange = (format: FormatType) => {
    if (controlledFormat === undefined) {
      setInternalFormat(format);
    }
    onFormatChange?.(format);
  };

  // Filter available formats
  const availableFormats = formats.filter((f) => f.available);
  const hasMultipleFormats = availableFormats.length > 1;
  const selectedFormatData = availableFormats.find((f) => f.type === currentFormat);

  // Determine what content to show based on format
  const isAudiobook = currentFormat === "audiobook";
  const isPhysical = currentFormat === "aiac" || currentFormat === "hardback" || currentFormat === "paperback";
  const isEbook = currentFormat === "ebook";

  return (
    <aside
      className={cn(
        "flex flex-col bg-card rounded-sm border border-border/50",
        className
      )}
      aria-label="Purchase options"
      {...props}
    >
      {/* Format Tabs - 2-column grid, only show when multiple formats available */}
      {hasMultipleFormats && (
        <div className="p-1.5 border-b border-border/40">
          <div
            role="tablist"
            aria-label="Select format"
            className="grid grid-cols-2 gap-0.5"
          >
            {availableFormats.map((format, index) => {
              const config = formatTabConfigs[format.type];
              const Icon = config.icon;
              const isSelected = format.type === currentFormat;
              const displayPrice = format.type === "audiobook" ? "£0.00" : formatPrice(format.price);
              // Last item spans full width if odd number of formats
              const isLastOdd = index === availableFormats.length - 1 && availableFormats.length % 2 === 1;

              return (
                <button
                  key={format.type}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleFormatChange(format.type)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-0.5",
                    "px-2 py-2.5 sm:py-3",
                    "text-xs sm:text-sm",
                    "rounded-[3px]",
                    "transition-all duration-200 ease-out",
                    "min-h-[52px]",
                    // Last odd item spans both columns
                    isLastOdd && "col-span-2",
                    isSelected && [
                      "bg-background",
                      "text-foreground",
                      "shadow-sm",
                    ],
                    !isSelected && [
                      "text-muted-foreground",
                      "hover:text-foreground/80",
                      "hover:bg-background/50",
                    ],
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-spiracle-terracotta/50"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon
                      className={cn(
                        "size-4",
                        isSelected ? "text-spiracle-terracotta" : "text-current"
                      )}
                      strokeWidth={1.5}
                    />
                    <span className="font-medium">{config.label}</span>
                  </span>
                  <span className={cn(
                    "text-[10px] sm:text-xs",
                    isSelected ? "text-foreground/70" : "text-muted-foreground/60"
                  )}>
                    {displayPrice}
                    {format.type === "audiobook" && "*"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Dynamic Content Area */}
      <div className="p-5 sm:p-6 flex flex-col">
        {/* AUDIOBOOK CONTENT */}
        {isAudiobook && (
          <>
            {/* Trial Section */}
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-sm text-muted-foreground leading-snug">{trialMessage}</p>
              <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                {trialPrice}
              </p>
              {hasMultipleFormats && (
                <p className="text-xs text-muted-foreground">
                  * Then £8.99/month. Cancel anytime.
                </p>
              )}
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream border-spiracle-burgundy"
            >
              <Link href={trialCtaHref}>{trialCtaText}</Link>
            </Button>

            {/* Gift hint - subtle, friendly note */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70 italic mt-3 mb-5">
              <Gift className="size-3.5" strokeWidth={1.5} />
              <span>Gift a membership at checkout</span>
            </p>

            {/* Benefits List */}
            <ul className="text-sm text-muted-foreground space-y-2.5 mb-6">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full"
                >
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
          </>
        )}

        {/* CARD EDITION (AIAC) CONTENT */}
        {currentFormat === "aiac" && selectedFormatData && (
          <>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-sm text-muted-foreground leading-snug">
                A beautiful gift card edition
              </p>
              <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                {formatPrice(selectedFormatData.price)}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-spiracle-forest dark:text-spiracle-honey">
                <Truck className="size-4" strokeWidth={1.5} />
                Free UK delivery
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream"
            >
              <Link href={checkoutHref || buyCtaHref}>
                Buy Card Edition
              </Link>
            </Button>

            {/* Gift hint - more prominent for Card Edition */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70 italic mt-3 mb-5">
              <Gift className="size-3.5" strokeWidth={1.5} />
              <span>Send directly to someone special</span>
            </p>

            {/* Card Edition Benefits */}
            <ul className="text-sm text-muted-foreground space-y-2.5">
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Unique artwork designed for the card format
              </li>
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Includes code to redeem the audiobook
              </li>
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Perfect for gifting — post to yourself or a recipient
              </li>
            </ul>
          </>
        )}

        {/* EBOOK CONTENT */}
        {isEbook && selectedFormatData && (
          <>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-sm text-muted-foreground leading-snug">
                Download instantly
              </p>
              <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                {formatPrice(selectedFormatData.price)}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream mb-5"
            >
              <Link href={checkoutHref || buyCtaHref}>
                Buy eBook — {formatPrice(selectedFormatData.price)}
              </Link>
            </Button>

            {/* eBook Benefits */}
            <ul className="text-sm text-muted-foreground space-y-2.5">
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Read on any device — Kindle, tablet, or phone
              </li>
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Download immediately after purchase
              </li>
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Keep forever in your library
              </li>
            </ul>
          </>
        )}

        {/* HARDBACK/PAPERBACK CONTENT */}
        {(currentFormat === "hardback" || currentFormat === "paperback") && selectedFormatData && (
          <>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-sm text-muted-foreground leading-snug">
                {currentFormat === "hardback" ? "Beautiful hardback edition" : "Quality paperback edition"}
              </p>
              <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                {formatPrice(selectedFormatData.price)}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-spiracle-forest dark:text-spiracle-honey">
                <Truck className="size-4" strokeWidth={1.5} />
                Free UK delivery
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream"
            >
              <Link href={checkoutHref || buyCtaHref}>
                Buy {currentFormat === "hardback" ? "Hardback" : "Paperback"} — {formatPrice(selectedFormatData.price)}
              </Link>
            </Button>

            {/* Gift hint */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70 italic mt-3 mb-5">
              <Gift className="size-3.5" strokeWidth={1.5} />
              <span>Send as a gift at checkout</span>
            </p>

            <ul className="text-sm text-muted-foreground space-y-2.5">
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                {currentFormat === "hardback" ? "Premium cloth-bound cover" : "High-quality paper stock"}
              </li>
              <li className="leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-spiracle-terracotta/40 before:rounded-full">
                Typically dispatched within 2-3 days
              </li>
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}

export { PurchasePanel };
