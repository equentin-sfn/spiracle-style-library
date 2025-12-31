"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  AppleLogo,
  GooglePlayLogo,
  CloudArrowDown,
  Headphones,
  Clock,
} from "@phosphor-icons/react";

export interface AppFeature {
  /** Feature icon */
  icon: PhosphorIcon;
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
  /** Background variant */
  variant?: "cream" | "white" | "dark";
  /** Layout direction */
  layout?: "default" | "reversed";
}

const defaultFeatures: AppFeature[] = [
  {
    icon: CloudArrowDown,
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

const variantStyles = {
  cream: {
    bg: "bg-spiracle-cream",
    text: "text-foreground",
    muted: "text-muted-foreground",
    featureBg: "bg-spiracle-sand/30",
  },
  white: {
    bg: "bg-white",
    text: "text-foreground",
    muted: "text-muted-foreground",
    featureBg: "bg-spiracle-cream/50",
  },
  dark: {
    bg: "bg-[#2D2520]",
    text: "text-white",
    muted: "text-white/70",
    featureBg: "bg-white/5",
  },
};

function AppPromo({
  heading = "Listen on the Spiracle app",
  description = "Download the Spiracle app and take your library with you. Available on iOS and Android.",
  phoneMockupSrc = "/images/phone-mockup.png",
  appStoreHref = "#",
  playStoreHref = "#",
  features = defaultFeatures,
  variant = "cream",
  layout = "default",
  className,
  ...props
}: AppPromoProps) {
  const styles = variantStyles[variant];
  const isDark = variant === "dark";

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 overflow-hidden", styles.bg, className)}
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
                  <div className="relative h-full rounded-[2rem] overflow-hidden bg-spiracle-cream">
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
                  className={cn(
                    "absolute -inset-8 -z-10 blur-3xl opacity-30",
                    isDark
                      ? "bg-spiracle-terracotta"
                      : "bg-spiracle-honey"
                  )}
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
              <h2
                className={cn(
                  "font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight",
                  styles.text
                )}
              >
                {heading}
              </h2>

              {/* Description */}
              <p className={cn("mt-4 text-lg leading-relaxed", styles.muted)}>
                {description}
              </p>

              {/* App Store Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={appStoreHref}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3 rounded-lg",
                    "transition-all duration-200",
                    isDark
                      ? "bg-white text-[#1a1a1a] hover:bg-white/90"
                      : "bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]/90"
                  )}
                  aria-label="Download on the App Store"
                >
                  <AppleLogo className="size-7" weight="fill" />
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
                    isDark
                      ? "bg-white text-[#1a1a1a] hover:bg-white/90"
                      : "bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]/90"
                  )}
                  aria-label="Get it on Google Play"
                >
                  <GooglePlayLogo className="size-7" weight="fill" />
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
                          "flex items-start gap-4 p-4 rounded-lg",
                          styles.featureBg
                        )}
                      >
                        <div
                          className={cn(
                            "flex-shrink-0 flex items-center justify-center",
                            "w-10 h-10 rounded-full",
                            isDark
                              ? "bg-spiracle-terracotta/20"
                              : "bg-spiracle-forest/10"
                          )}
                        >
                          <Icon
                            className={cn(
                              "size-5",
                              isDark
                                ? "text-spiracle-honey"
                                : "text-spiracle-forest"
                            )}
                            weight="regular"
                          />
                        </div>
                        <div>
                          <h3
                            className={cn(
                              "font-medium text-base",
                              styles.text
                            )}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={cn(
                              "mt-0.5 text-sm leading-relaxed",
                              styles.muted
                            )}
                          >
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
