"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show fade effect on the right edge to hint at more content.
   * Defaults to true.
   */
  showFade?: boolean;
  /**
   * Width of the fade gradient.
   * Defaults to "w-16" (64px).
   */
  fadeWidth?: "w-8" | "w-12" | "w-16" | "w-24";
}

/**
 * ScrollCarousel - Horizontal scrolling container with fade hint
 *
 * Content starts at the container edge and can scroll horizontally.
 * A subtle fade on the right edge hints at more content.
 *
 * @example
 * <ScrollCarousel>
 *   <div className="flex gap-4">
 *     {items.map(item => <Card key={item.id} />)}
 *   </div>
 * </ScrollCarousel>
 */
function ScrollCarousel({
  children,
  showFade = true,
  fadeWidth = "w-16",
  className,
  ...props
}: ScrollCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showRightFade, setShowRightFade] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
    setShowRightFade(!isAtEnd);
  }, []);

  React.useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    checkScroll();
    scrollElement.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      scrollElement.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  return (
    <div className={cn("relative", className)} {...props}>
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>

      {/* Right fade gradient */}
      {showFade && showRightFade && (
        <div
          className={cn(
            "absolute top-0 right-0 h-full pointer-events-none",
            "bg-gradient-to-l from-spiracle-cream to-transparent",
            fadeWidth
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export { ScrollCarousel };
