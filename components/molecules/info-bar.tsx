"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ScrollCarousel } from "./scroll-carousel";
import { PageWrapper } from "@/components/templates";

export interface InfoBarItem {
  icon: PhosphorIcon;
  label: string;
  value: string;
}

export interface InfoBarProps extends React.HTMLAttributes<HTMLElement> {
  items: InfoBarItem[];
}

function InfoBar({ items, className, ...props }: InfoBarProps) {
  return (
    <nav
      className={cn("w-full bg-background", className)}
      aria-label="Audiobook information"
      {...props}
    >
      <PageWrapper noPadding>
        <ScrollCarousel fadeWidth="w-12">
          <ul className="flex items-stretch divide-x divide-border px-4 sm:px-6 lg:px-8">
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
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground font-medium whitespace-nowrap">
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
