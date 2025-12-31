"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show/hide right fade (default: true) */
  showFade?: boolean;
  /** Fade gradient width */
  fadeWidth?: "w-8" | "w-12" | "w-16" | "w-24";
  /** Custom fade gradient "from" color class (e.g., "from-background") */
  fadeFromClass?: string;
}

function ScrollCarousel({
  children,
  className,
  showFade = true,
  fadeWidth = "w-16",
  fadeFromClass = "from-background",
  ...props
}: ScrollCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

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

  return (
    <div className={cn("relative", className)} {...props}>
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
    </div>
  );
}

export { ScrollCarousel };
