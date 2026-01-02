"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Globe,
  Twitter,
  Instagram,
  Library,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AdaptiveIllustration } from "@/components/molecules/adaptive-illustration";

export interface AuthorSocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface AuthorHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Author photo URL */
  photoSrc: string;
  /** Author photo dark mode URL (white lines on transparent) */
  photoDarkSrc?: string;
  /** Author name */
  name: string;
  /** Author bio/description */
  bio: string;
  /** Birth year or date range (e.g., "1882–1941") */
  lifespan?: string;
  /** Nationality or origin */
  nationality?: string;
  /** Number of titles by this author */
  titleCount?: number;
  /** Total listening time (e.g., "42 hrs") */
  totalDuration?: string;
  /** Social/external links */
  socialLinks?: AuthorSocialLink[];
  /** Layout variant */
  layout?: "centered" | "split";
}

const defaultSocialLinks: AuthorSocialLink[] = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function AuthorHero({
  photoSrc,
  photoDarkSrc,
  name,
  bio,
  lifespan,
  nationality,
  titleCount,
  totalDuration,
  socialLinks = defaultSocialLinks,
  layout = "centered",
  className,
  ...props
}: AuthorHeroProps) {
  const isCentered = layout === "centered";

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              isCentered
                ? "flex flex-col items-center text-center"
                : "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            )}
          >
            {/* Photo Column */}
            <div
              className={cn(
                isCentered ? "mb-8" : "lg:col-span-4 flex justify-center"
              )}
            >
              {/* Author Photo */}
              <div className="relative">
                <div
                  className={cn(
                    "relative overflow-hidden",
                    isCentered
                      ? "w-40 h-40 sm:w-48 sm:h-48 rounded-full"
                      : "w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-sm"
                  )}
                >
                  {photoDarkSrc ? (
                    <AdaptiveIllustration
                      lightSrc={photoSrc}
                      darkSrc={photoDarkSrc}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 224px, 256px"
                      priority
                    />
                  ) : (
                    <Image
                      src={photoSrc}
                      alt={name}
                      fill
                      className="object-cover illustration-adaptive"
                      sizes="(max-width: 1024px) 224px, 256px"
                      priority
                    />
                  )}
                </div>
                {/* Decorative ring for centered layout */}
                {isCentered && (
                  <div
                    className="absolute -inset-2 rounded-full border-2 border-primary/20"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>

            {/* Content Column */}
            <div
              className={cn(
                isCentered
                  ? "max-w-2xl"
                  : "lg:col-span-8 flex flex-col"
              )}
            >
              {/* Meta (lifespan, nationality) */}
              {(lifespan || nationality) && (
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-2 mb-3",
                    isCentered && "justify-center"
                  )}
                >
                  {nationality && (
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {nationality}
                    </span>
                  )}
                  {nationality && lifespan && (
                    <span className="text-muted-foreground" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {lifespan && (
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {lifespan}
                    </span>
                  )}
                </div>
              )}

              {/* Name */}
              <h1
                className={cn(
                  "font-display tracking-tight leading-tight text-foreground",
                  isCentered
                    ? "text-4xl sm:text-5xl lg:text-6xl"
                    : "text-3xl sm:text-4xl lg:text-5xl"
                )}
              >
                {name}
              </h1>

              {/* Stats */}
              {(titleCount !== undefined || totalDuration) && (
                <div
                  className={cn(
                    "flex flex-wrap gap-4 mt-5",
                    isCentered && "justify-center"
                  )}
                >
                  {titleCount !== undefined && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-spiracle-sand/40 dark:bg-muted border border-border/30">
                      <Library
                        className="size-4 text-primary"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm text-foreground">
                        {titleCount} {titleCount === 1 ? "title" : "titles"}
                      </span>
                    </div>
                  )}
                  {totalDuration && (
                    <div className="px-4 py-2 rounded-full bg-spiracle-sand/40 dark:bg-muted border border-border/30">
                      <span className="text-sm text-foreground">
                        {totalDuration} of content
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Bio */}
              <p
                className={cn(
                  "text-base sm:text-lg leading-relaxed mt-6 text-left text-muted-foreground",
                  isCentered ? "max-w-xl mx-auto" : "max-w-2xl"
                )}
              >
                {bio}
              </p>

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div
                  className={cn(
                    "flex items-center gap-3 mt-8",
                    isCentered && "justify-center"
                  )}
                >
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={index}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-full",
                          "transition-colors duration-200",
                          "bg-muted hover:bg-spiracle-sand/50 dark:hover:bg-muted/80 text-foreground"
                        )}
                        aria-label={link.label}
                      >
                        <Icon className="size-5" strokeWidth={1.5} />
                      </Link>
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

export { AuthorHero };
