"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  CloudDownload,
  Headphones,
  Clock,
} from "lucide-react";

// Apple logo inline SVG component (Lucide doesn't include brand logos)
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

// Google Play logo inline SVG component
function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
    </svg>
  );
}

export interface AppFeature {
  /** Feature icon */
  icon: LucideIcon;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface AppPromoProps extends React.HTMLAttributes<HTMLElement> {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Phone mockup image URL */
  phoneMockupSrc?: string;
  /** App Store link */
  appStoreHref?: string;
  /** Google Play link */
  playStoreHref?: string;
  /** Feature list */
  features?: AppFeature[];
  /** Layout direction */
  layout?: "default" | "reversed";
}

const defaultFeatures: AppFeature[] = [
  {
    icon: CloudDownload,
    title: "Offline listening",
    description: "Download titles and listen anywhere, even without connection.",
  },
  {
    icon: Headphones,
    title: "Premium audio",
    description: "Crystal-clear narration with adjustable playback speed.",
  },
  {
    icon: Clock,
    title: "Sleep timer",
    description: "Fall asleep to your favourite stories with auto-pause.",
  },
];

function AppPromo({
  heading = "Listen on the Spiracle app",
  description = "Download the Spiracle app and take your library with you. Available on iOS and Android.",
  phoneMockupSrc = "/images/phone-mockup.png",
  appStoreHref = "#",
  playStoreHref = "#",
  features = defaultFeatures,
  layout = "default",
  className,
  ...props
}: AppPromoProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 overflow-hidden bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
              layout === "reversed" && "lg:grid-flow-dense"
            )}
          >
            {/* Phone Mockup */}
            <div
              className={cn(
                "relative flex justify-center",
                layout === "reversed" && "lg:col-start-2"
              )}
            >
              <div className="relative w-64 sm:w-72 lg:w-80">
                {/* Phone Frame */}
                <div
                  className={cn(
                    "relative aspect-[9/19] rounded-[2.5rem] overflow-hidden",
                    "bg-[#1a1a1a] p-2 shadow-2xl",
                    "ring-1 ring-white/10"
                  )}
                >
                  {/* Screen */}
                  <div className="relative h-full rounded-[2rem] overflow-hidden bg-muted">
                    <Image
                      src={phoneMockupSrc}
                      alt="Spiracle app interface"
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                  {/* Notch */}
                  <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full"
                    aria-hidden="true"
                  />
                </div>
                {/* Decorative glow */}
                <div
                  className="absolute -inset-8 -z-10 blur-3xl opacity-30 bg-primary"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex flex-col",
                layout === "reversed" && "lg:col-start-1"
              )}
            >
              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-foreground">
                {heading}
              </h2>

              {/* Description */}
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>

              {/* App Store Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={appStoreHref}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3 rounded-lg",
                    "transition-all duration-200",
                    "bg-foreground text-background hover:bg-foreground/90"
                  )}
                  aria-label="Download on the App Store"
                >
                  <AppleLogo className="size-7" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider opacity-80">
                      Download on the
                    </span>
                    <span className="text-base font-semibold -mt-0.5">
                      App Store
                    </span>
                  </div>
                </Link>

                <Link
                  href={playStoreHref}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3 rounded-lg",
                    "transition-all duration-200",
                    "bg-foreground text-background hover:bg-foreground/90"
                  )}
                  aria-label="Get it on Google Play"
                >
                  <GooglePlayLogo className="size-7" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider opacity-80">
                      Get it on
                    </span>
                    <span className="text-base font-semibold -mt-0.5">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>

              {/* Features */}
              {features.length > 0 && (
                <div className="mt-10 space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className={cn(
                          "flex items-start gap-4 p-4 rounded-sm",
                          "bg-card border border-border/30",
                          "transition-all duration-200 ease-out",
                          "hover:border-border/50 hover:shadow-sm"
                        )}
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-spiracle-sand/50 dark:bg-muted">
                          <Icon
                            className="size-5 text-primary"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-base text-foreground">
                            {feature.title}
                          </h3>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AppPromo };
