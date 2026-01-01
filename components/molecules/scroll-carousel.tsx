"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ScrollCarousel - Multi-Platform Excellence
 *
 * Touch: Native horizontal swipe scrolling (no arrows needed)
 * Desktop: Navigation arrows appear on hover (44px touch targets for accessibility)
 *
 * The `carousel-arrow` class in globals.css handles showing/hiding arrows
 * based on pointer type via @media (hover: hover) and (pointer: fine)
 */

export interface ScrollCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show/hide right fade (default: true) */
  showFade?: boolean;
  /** Fade gradient width */
  fadeWidth?: "w-8" | "w-12" | "w-16" | "w-24";
  /** Custom fade gradient "from" color class (e.g., "from-background") */
  fadeFromClass?: string;
  /** Show navigation arrows on desktop (default: true) */
  showArrows?: boolean;
}

function ScrollCarousel({
  children,
  className,
  showFade = true,
  fadeWidth = "w-16",
  fadeFromClass = "from-background",
  showArrows = true,
  ...props
}: ScrollCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Check if at start (with small tolerance for rounding)
    const atStart = el.scrollLeft <= 2;
    setIsAtStart(atStart);

    // Check if scrolled to the end (with small tolerance for rounding)
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setIsAtEnd(atEnd);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Check initial state
    handleScroll();

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const scrollBy = React.useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    // Scroll by roughly 80% of the visible width for a nice overlap
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={cn("relative group/carousel", className)}
      data-slot="scroll-carousel"
      {...props}
    >
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      {/* Right fade overlay */}
      {showFade && !isAtEnd && (
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 pointer-events-none",
            "bg-gradient-to-l to-transparent",
            fadeFromClass,
            fadeWidth
          )}
          aria-hidden="true"
        />
      )}

      {/* Left fade overlay - only show when scrolled */}
      {showFade && !isAtStart && (
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 pointer-events-none",
            "bg-gradient-to-r to-transparent",
            fadeFromClass,
            fadeWidth
          )}
          aria-hidden="true"
        />
      )}

      {/* Navigation arrows - desktop only (hidden on touch via carousel-arrow class) */}
      {showArrows && (
        <>
          {/* Left arrow - 44px touch target */}
          <button
            type="button"
            onClick={() => scrollBy("left")}
            disabled={isAtStart}
            aria-label="Scroll to previous items"
            data-slot="carousel-arrow-left"
            data-position="left"
            className={cn(
              // carousel-arrow: hidden on touch, flex on desktop (see globals.css)
              "carousel-arrow",
              // Positioning
              "absolute left-2 top-1/2 -translate-y-1/2 z-10",
              // 44px touch target
              "w-11 h-11 min-w-[44px] min-h-[44px]",
              "items-center justify-center",
              "rounded-full",
              // Base colors (no hover - handled in CSS)
              "bg-background/80 dark:bg-card/80 backdrop-blur-sm",
              "border border-border/50",
              "shadow-sm",
              // Active/press state (works everywhere)
              "active:scale-95",
              // Transitions
              "transition-all duration-200 ease-out",
              // Visibility: hidden at start, fade in on carousel hover
              isAtStart
                ? "opacity-0 pointer-events-none"
                : "opacity-0 group-hover/carousel:opacity-100"
            )}
          >
            <ChevronLeft
              className="size-5 text-foreground/70"
              strokeWidth={2.5}
            />
          </button>

          {/* Right arrow - 44px touch target */}
          <button
            type="button"
            onClick={() => scrollBy("right")}
            disabled={isAtEnd}
            aria-label="Scroll to next items"
            data-slot="carousel-arrow-right"
            data-position="right"
            className={cn(
              // carousel-arrow: hidden on touch, flex on desktop (see globals.css)
              "carousel-arrow",
              // Positioning
              "absolute right-2 top-1/2 -translate-y-1/2 z-10",
              // 44px touch target
              "w-11 h-11 min-w-[44px] min-h-[44px]",
              "items-center justify-center",
              "rounded-full",
              // Base colors (no hover - handled in CSS)
              "bg-background/80 dark:bg-card/80 backdrop-blur-sm",
              "border border-border/50",
              "shadow-sm",
              // Active/press state (works everywhere)
              "active:scale-95",
              // Transitions
              "transition-all duration-200 ease-out",
              // Visibility: hidden at end, fade in on carousel hover
              isAtEnd
                ? "opacity-0 pointer-events-none"
                : "opacity-0 group-hover/carousel:opacity-100"
            )}
          >
            <ChevronRight
              className="size-5 text-foreground/70"
              strokeWidth={2.5}
            />
          </button>
        </>
      )}
    </div>
  );
}

export { ScrollCarousel };
