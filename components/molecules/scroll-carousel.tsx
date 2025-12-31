"use client";

import * as React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

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
  const [isHovered, setIsHovered] = React.useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

      {/* Navigation arrows - desktop only */}
      {showArrows && (
        <>
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scrollBy("left")}
            disabled={isAtStart}
            aria-label="Scroll to previous items"
            className={cn(
              // Base styles
              "carousel-arrow absolute left-2 top-1/2 -translate-y-1/2 z-10",
              "flex items-center justify-center",
              "w-10 h-10 rounded-full",
              // Colors and effects
              "bg-background/80 dark:bg-card/80 backdrop-blur-sm",
              "border border-border/50",
              "shadow-sm",
              // Hover and active states
              "hover:bg-background dark:hover:bg-card hover:border-border hover:shadow-md",
              "active:scale-95",
              // Transitions
              "transition-all duration-200 ease-out",
              // Visibility based on state
              isAtStart
                ? "opacity-0 pointer-events-none"
                : isHovered
                  ? "opacity-100"
                  : "opacity-0 group-hover/carousel:opacity-100",
            )}
          >
            <CaretLeft
              className="size-5 text-foreground/70"
              weight="bold"
            />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scrollBy("right")}
            disabled={isAtEnd}
            aria-label="Scroll to next items"
            className={cn(
              // Base styles
              "carousel-arrow absolute right-2 top-1/2 -translate-y-1/2 z-10",
              "flex items-center justify-center",
              "w-10 h-10 rounded-full",
              // Colors and effects
              "bg-background/80 dark:bg-card/80 backdrop-blur-sm",
              "border border-border/50",
              "shadow-sm",
              // Hover and active states
              "hover:bg-background dark:hover:bg-card hover:border-border hover:shadow-md",
              "active:scale-95",
              // Transitions
              "transition-all duration-200 ease-out",
              // Visibility based on state
              isAtEnd
                ? "opacity-0 pointer-events-none"
                : isHovered
                  ? "opacity-100"
                  : "opacity-0 group-hover/carousel:opacity-100",
            )}
          >
            <CaretRight
              className="size-5 text-foreground/70"
              weight="bold"
            />
          </button>
        </>
      )}
    </div>
  );
}

export { ScrollCarousel };
