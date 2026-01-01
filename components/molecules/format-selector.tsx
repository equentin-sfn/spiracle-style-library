"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Headphones, Gift, BookOpen, Book } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FormatType = "audiobook" | "aiac" | "ebook" | "hardback" | "paperback";

export interface Format {
  type: FormatType;
  price: number;
  memberPrice?: number;
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
 * FormatSelector - Segmented control for choosing book format
 *
 * Only renders when 2+ formats are available.
 * Matches Spiracle aesthetic: warm, literary, not tech-y.
 */
function FormatSelector({
  formats,
  selectedFormat,
  onFormatChange,
  className,
  ...props
}: FormatSelectorProps) {
  // Filter to only available formats
  const availableFormats = formats.filter((f) => f.available);

  // Don't render if only one format (audiobook only - no need to show selector)
  if (availableFormats.length <= 1) {
    return null;
  }

  return (
    <div
      role="tablist"
      aria-label="Select format"
      className={cn(
        "inline-flex items-stretch",
        "rounded-sm border border-border/60",
        "bg-card/50",
        "p-0.5",
        className
      )}
      {...props}
    >
      {availableFormats.map((format) => {
        const config = formatConfigs[format.type];
        const Icon = config.icon;
        const isSelected = format.type === selectedFormat;

        return (
          <button
            key={format.type}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onFormatChange(format.type)}
            className={cn(
              // Base styles
              "relative flex items-center gap-1.5 sm:gap-2",
              "px-3 sm:px-4 py-2 sm:py-2.5",
              "text-xs sm:text-sm font-medium",
              "rounded-[2px]",
              "transition-all duration-200 ease-out",
              // Minimum touch target
              "min-h-[44px]",
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
            <Icon
              className={cn(
                "size-4",
                isSelected ? "text-spiracle-terracotta" : "text-current"
              )}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            {/* Full label on sm+, short label on mobile */}
            <span className="hidden sm:inline">{config.label}</span>
            <span className="sm:hidden">{config.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Helper to get descriptive text for a format (for purchase panel)
 */
export function getFormatDescription(formatType: FormatType): string | null {
  switch (formatType) {
    case "aiac":
      return "A beautifully designed card, perfect for gifting. Posted to you or your recipient. Includes a code to redeem the audiobook.";
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
 * Helper to get short tagline for a format
 */
export function getFormatTagline(formatType: FormatType): string | null {
  switch (formatType) {
    case "aiac":
      return "Perfect for gifting";
    case "ebook":
      return "Read anywhere";
    case "hardback":
    case "paperback":
      return "Free UK delivery";
    default:
      return null;
  }
}

export { FormatSelector };
