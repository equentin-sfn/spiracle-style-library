"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface InfoBarItem {
  icon: PhosphorIcon;
  label: string;
  value: string;
}

export interface InfoBarProps extends React.HTMLAttributes<HTMLElement> {
  items: InfoBarItem[];
}

function InfoBar({ items, className, ...props }: InfoBarProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <nav
      className={cn("w-full bg-spiracle-cream", className)}
      aria-label="Audiobook information"
      {...props}
    >
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ul className="flex items-stretch divide-x divide-border">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li
                key={index}
                className="flex flex-col items-center justify-start px-4 sm:px-6 py-3 sm:py-4 min-w-fit"
              >
                <IconComponent
                  className="size-4 sm:size-5 text-foreground mb-1.5"
                  weight="regular"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-xs sm:text-sm text-foreground font-medium whitespace-nowrap">
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export { InfoBar };
