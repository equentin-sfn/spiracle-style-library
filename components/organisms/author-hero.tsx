"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Globe,
  TwitterLogo,
  InstagramLogo,
  Books,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface AuthorSocialLink {
  icon: PhosphorIcon;
  href: string;
  label: string;
}

export interface AuthorHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Author photo URL */
  photoSrc: string;
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
  /** Background variant */
  variant?: "cream" | "dark" | "white";
  /** Layout variant */
  layout?: "centered" | "split";
}

const defaultSocialLinks: AuthorSocialLink[] = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: TwitterLogo, href: "#", label: "Twitter" },
  { icon: InstagramLogo, href: "#", label: "Instagram" },
];

const variantStyles = {
  cream: {
    bg: "bg-spiracle-cream",
    text: "text-foreground",
    muted: "text-muted-foreground",
    socialBg: "bg-spiracle-sand/50 hover:bg-spiracle-sand",
    statBg: "bg-spiracle-sand/30",
  },
  dark: {
    bg: "bg-[#2D2520]",
    text: "text-white",
    muted: "text-white/70",
    socialBg: "bg-white/10 hover:bg-white/20",
    statBg: "bg-white/5",
  },
  white: {
    bg: "bg-white",
    text: "text-foreground",
    muted: "text-muted-foreground",
    socialBg: "bg-spiracle-cream hover:bg-spiracle-sand/50",
    statBg: "bg-spiracle-cream/50",
  },
};

function AuthorHero({
  photoSrc,
  name,
  bio,
  lifespan,
  nationality,
  titleCount,
  totalDuration,
  socialLinks = defaultSocialLinks,
  variant = "cream",
  layout = "centered",
  className,
  ...props
}: AuthorHeroProps) {
  const styles = variantStyles[variant];
  const isCentered = layout === "centered";

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", styles.bg, className)}
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
                  <Image
                    src={photoSrc}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 224px, 256px"
                    priority
                  />
                </div>
                {/* Decorative ring for centered layout */}
                {isCentered && (
                  <div
                    className="absolute -inset-2 rounded-full border-2 border-spiracle-terracotta/20"
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
                    <span
                      className={cn(
                        "text-xs uppercase tracking-[0.2em]",
                        styles.muted
                      )}
                    >
                      {nationality}
                    </span>
                  )}
                  {nationality && lifespan && (
                    <span className={styles.muted} aria-hidden="true">
                      ·
                    </span>
                  )}
                  {lifespan && (
                    <span
                      className={cn(
                        "text-xs uppercase tracking-[0.2em]",
                        styles.muted
                      )}
                    >
                      {lifespan}
                    </span>
                  )}
                </div>
              )}

              {/* Name */}
              <h1
                className={cn(
                  "font-display tracking-tight leading-tight",
                  isCentered
                    ? "text-4xl sm:text-5xl lg:text-6xl"
                    : "text-3xl sm:text-4xl lg:text-5xl",
                  styles.text
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
                    <div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full",
                        styles.statBg
                      )}
                    >
                      <Books
                        className={cn("size-4", styles.muted)}
                        weight="regular"
                      />
                      <span className={cn("text-sm", styles.text)}>
                        {titleCount} {titleCount === 1 ? "title" : "titles"}
                      </span>
                    </div>
                  )}
                  {totalDuration && (
                    <div
                      className={cn(
                        "px-4 py-2 rounded-full",
                        styles.statBg
                      )}
                    >
                      <span className={cn("text-sm", styles.text)}>
                        {totalDuration} of content
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Bio */}
              <p
                className={cn(
                  "text-base sm:text-lg leading-relaxed mt-6 text-left",
                  styles.muted,
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
                          styles.socialBg,
                          styles.text
                        )}
                        aria-label={link.label}
                      >
                        <Icon className="size-5" weight="regular" />
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
