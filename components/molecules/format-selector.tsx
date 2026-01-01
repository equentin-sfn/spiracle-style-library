"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Headphones, Gift, BookOpen, Book, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FormatType = "audiobook" | "aiac" | "ebook" | "hardback" | "paperback";

export interface Format {
  type: FormatType;
  /** Display price (for non-members / logged out) */
  price: number;
  /** Member price (optional) */
  memberPrice?: number;
  /** Whether this format is available */
  available: boolean;
  /** Image to display when this format is selected (e.g., AIAC card image) */
  image?: string;
}

export interface FormatSelectorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Array of available formats for this title */
  formats: Format[];
  /** Currently selected format type */
  selectedFormat: FormatType;
  /** Callback when format selection changes */
  onFormatChange: (format: FormatType) => void;
  /** Whether to show prices in tabs (default: true) */
  showPricesInTabs?: boolean;
  /** Whether to show the price callout below (default: true) */
  showPriceCallout?: boolean;
}

interface FormatConfig {
  icon: LucideIcon;
  label: string;
  shortLabel: string;
}

const formatConfigs: Record<FormatType, FormatConfig> = {
  audiobook: {
    icon: Headphones,
    label: "Listen",
    shortLabel: "Listen",
  },
  aiac: {
    icon: Gift,
    label: "Card Edition",
    shortLabel: "Card",
  },
  ebook: {
    icon: BookOpen,
    label: "eBook",
    shortLabel: "eBook",
  },
  hardback: {
    icon: Book,
    label: "Hardback",
    shortLabel: "Hard",
  },
  paperback: {
    icon: Book,
    label: "Paperback",
    shortLabel: "Paper",
  },
};

/**
 * Format price for display
 */
function formatPrice(price: number): string {
  if (price === 0) return "£0.00";
  return `£${price.toFixed(2)}`;
}

/**
 * Get the price note/tagline for a format
 */
function getPriceNote(formatType: FormatType): string | null {
  switch (formatType) {
    case "audiobook":
      return "with 30-day free trial";
    case "aiac":
      return "+ free UK delivery";
    case "hardback":
    case "paperback":
      return "+ free UK delivery";
    default:
      return null;
  }
}

/**
 * Get CTA button text for a format
 */
export function getFormatCtaText(formatType: FormatType, price?: number): string {
  switch (formatType) {
    case "audiobook":
      return "Start your 30-day free trial";
    case "aiac":
      return price ? `Buy Card Edition — ${formatPrice(price)}` : "Buy Card Edition";
    case "ebook":
      return price ? `Buy eBook — ${formatPrice(price)}` : "Buy eBook";
    case "hardback":
      return price ? `Buy Hardback — ${formatPrice(price)}` : "Buy Hardback";
    case "paperback":
      return price ? `Buy Paperback — ${formatPrice(price)}` : "Buy Paperback";
    default:
      return "Buy now";
  }
}

/**
 * Get descriptive text for a format
 */
export function getFormatDescription(formatType: FormatType): string | null {
  switch (formatType) {
    case "audiobook":
      return "Stream or download. Listen anywhere.";
    case "aiac":
      return "A beautifully designed card, perfect for gifting. Includes a code to redeem the audiobook.";
    case "ebook":
      return "Download and read on any device.";
    case "hardback":
      return "A beautiful hardback edition, posted to you.";
    case "paperback":
      return "A quality paperback edition, posted to you.";
    default:
      return null;
  }
}

/**
 * FormatSelector - Segmented control for choosing book format with pricing
 *
 * Only renders when 2+ formats are available.
 * Matches Spiracle aesthetic: warm, literary, not tech-y.
 */
function FormatSelector({
  formats,
  selectedFormat,
  onFormatChange,
  showPricesInTabs = true,
  showPriceCallout = true,
  className,
  ...props
}: FormatSelectorProps) {
  // Filter to only available formats
  const availableFormats = formats.filter((f) => f.available);

  // Don't render if only one format (audiobook only - no need to show selector)
  if (availableFormats.length <= 1) {
    return null;
  }

  // Get selected format data
  const selectedFormatData = availableFormats.find((f) => f.type === selectedFormat);
  const priceNote = getPriceNote(selectedFormat);

  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      {/* Format Tabs - 2-column grid layout */}
      <div
        role="tablist"
        aria-label="Select format"
        className="grid grid-cols-2 gap-0.5 rounded-sm border border-border/60 bg-card/50 p-0.5"
      >
        {availableFormats.map((format, index) => {
          const config = formatConfigs[format.type];
          const Icon = config.icon;
          const isSelected = format.type === selectedFormat;
          const displayPrice = format.type === "audiobook" ? "£0.00" : formatPrice(format.price);
          // Last item spans full width if odd number of formats
          const isLastOdd = index === availableFormats.length - 1 && availableFormats.length % 2 === 1;

          return (
            <button
              key={format.type}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onFormatChange(format.type)}
              className={cn(
                // Base styles
                "relative flex flex-col items-center justify-center",
                "px-3 sm:px-5 py-2 sm:py-2.5",
                "text-xs sm:text-sm",
                "rounded-[2px]",
                "transition-all duration-200 ease-out",
                // Minimum touch target
                "min-h-[44px]",
                // Last odd item spans both columns
                isLastOdd && "col-span-2",
                // Selected state
                isSelected && [
                  "bg-background",
                  "text-foreground",
                  "shadow-sm",
                ],
                // Unselected state
                !isSelected && [
                  "text-muted-foreground",
                  "hover:text-foreground/80",
                  "hover:bg-background/50",
                ],
                // Focus state
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-spiracle-terracotta/50 focus-visible:ring-offset-1"
              )}
            >
              {/* Icon + Label Row */}
              <span className="flex items-center gap-1.5">
                <Icon
                  className={cn(
                    "size-4",
                    isSelected ? "text-spiracle-terracotta" : "text-current"
                  )}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-medium">{config.label}</span>
              </span>

              {/* Price in tab */}
              {showPricesInTabs && (
                <span
                  className={cn(
                    "text-[10px] sm:text-xs mt-0.5",
                    isSelected ? "text-foreground/70" : "text-muted-foreground/70",
                    format.type === "audiobook" && isSelected && "text-spiracle-forest"
                  )}
                >
                  {displayPrice}
                  {format.type === "audiobook" && "*"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Price Callout */}
      {showPriceCallout && selectedFormatData && (
        <div
          className={cn(
            "flex items-baseline gap-2 flex-wrap",
            selectedFormat === "audiobook" && "text-spiracle-forest dark:text-spiracle-honey"
          )}
        >
          {/* Main price */}
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {selectedFormat === "audiobook" ? "£0.00" : formatPrice(selectedFormatData.price)}
          </span>

          {/* Price note */}
          {priceNote && (
            <span className="text-sm text-muted-foreground">
              {priceNote}
            </span>
          )}

          {/* Trial asterisk note for audiobook */}
          {selectedFormat === "audiobook" && (
            <span className="w-full text-xs text-muted-foreground mt-1">
              * Then £8.99/month. Cancel anytime.
            </span>
          )}
        </div>
      )}

      {/* Format-specific benefits */}
      {selectedFormat === "audiobook" && (
        <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <Check className="size-3.5 text-spiracle-forest" strokeWidth={2} />
            <span>This title free with your trial</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-3.5 text-spiracle-forest" strokeWidth={2} />
            <span>Unlimited listening to thousands of audiobooks</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-3.5 text-spiracle-forest" strokeWidth={2} />
            <span>1 credit per month after trial</span>
          </li>
        </ul>
      )}

      {selectedFormat === "aiac" && (
        <p className="text-xs text-muted-foreground leading-relaxed">
          A beautifully designed gift card with unique artwork. Posted to you or directly to your recipient.
        </p>
      )}
    </div>
  );
}

export { FormatSelector, formatPrice, getPriceNote };
