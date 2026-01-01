"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ScrollCarousel } from "./scroll-carousel";
import { PageWrapper } from "@/components/templates";

export interface InfoBarItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

type InfoBarVariant = "default" | "subtle";

const variantStyles: Record<InfoBarVariant, string> = {
  default: "bg-background border-y border-border",
  subtle: "bg-[#F7F3E8] dark:bg-[#332d27] border-y border-border/40",
};

export interface InfoBarProps extends React.HTMLAttributes<HTMLElement> {
  items: InfoBarItem[];
  /** Visual variant */
  variant?: InfoBarVariant;
}

function InfoBar({ items, variant = "subtle", className, ...props }: InfoBarProps) {
  return (
    <nav
      className={cn("w-full", variantStyles[variant], className)}
      aria-label="Audiobook information"
      {...props}
    >
      <PageWrapper noPadding>
        <ScrollCarousel fadeWidth="w-16">
          <ul className="flex items-stretch divide-x divide-border/60 px-4 sm:px-6 lg:px-8">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              // Skip items without values
              if (!item.value) return null;
              return (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center px-5 sm:px-7 py-4 sm:py-5 min-w-fit gap-1"
                >
                  <IconComponent
                    className="size-4 text-muted-foreground/70 mb-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground/70 whitespace-nowrap">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground font-medium whitespace-nowrap leading-tight">
                    {item.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </ScrollCarousel>
      </PageWrapper>
    </nav>
  );
}

export { InfoBar };
