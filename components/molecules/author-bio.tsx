"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Globe, TwitterLogo, InstagramLogo } from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface AuthorLink {
  icon: PhosphorIcon;
  href: string;
  label: string;
}

export interface AuthorBioProps extends React.HTMLAttributes<HTMLElement> {
  /** Author photo URL */
  photoSrc: string;
  /** Author name */
  name: string;
  /** Author bio/description */
  bio: string;
  /** Link to full author page */
  authorHref?: string;
  /** Social/external links */
  links?: AuthorLink[];
  /** Number of titles by this author */
  titleCount?: number;
  /** Layout variant */
  variant?: "default" | "compact" | "inline";
}

const defaultLinks: AuthorLink[] = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: TwitterLogo, href: "#", label: "Twitter" },
  { icon: InstagramLogo, href: "#", label: "Instagram" },
];

function AuthorBio({
  photoSrc,
  name,
  bio,
  authorHref,
  links = defaultLinks,
  titleCount,
  variant = "default",
  className,
  ...props
}: AuthorBioProps) {
  const isCompact = variant === "compact";
  const isInline = variant === "inline";

  return (
    <article
      className={cn(
        "group",
        !isInline && "p-5 sm:p-6 bg-card rounded-sm border border-border/50",
        isInline && "flex items-start gap-4 sm:gap-5",
        className
      )}
      {...props}
    >
      {/* Photo */}
      <div
        className={cn(
          "relative flex-shrink-0",
          isInline
            ? "w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden"
            : isCompact
            ? "w-20 h-20 mx-auto rounded-full overflow-hidden mb-4"
            : "w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto mb-5"
        )}
      >
        <Image
          src={photoSrc}
          alt={name}
          fill
          className="object-cover"
          sizes={isInline || isCompact ? "80px" : "112px"}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          isInline ? "flex-1 min-w-0" : "text-center",
          isCompact && "text-center"
        )}
      >
        {/* Name */}
        {authorHref ? (
          <Link href={authorHref} className="group/link inline-block">
            <h3
              className={cn(
                "font-display text-foreground leading-tight",
                "group-hover/link:text-spiracle-forest transition-colors duration-200",
                isCompact || isInline ? "text-lg" : "text-xl sm:text-2xl"
              )}
            >
              {name}
            </h3>
          </Link>
        ) : (
          <h3
            className={cn(
              "font-display text-foreground leading-tight",
              isCompact || isInline ? "text-lg" : "text-xl sm:text-2xl"
            )}
          >
            {name}
          </h3>
        )}

        {/* Title count */}
        {titleCount !== undefined && (
          <p
            className={cn(
              "text-xs text-muted-foreground mt-1",
              !isInline && "uppercase tracking-wider"
            )}
          >
            {titleCount} {titleCount === 1 ? "title" : "titles"} on Spiracle
          </p>
        )}

        {/* Bio */}
        <p
          className={cn(
            "text-muted-foreground leading-relaxed text-left",
            isCompact
              ? "text-sm mt-3 line-clamp-3"
              : isInline
              ? "text-sm mt-2 line-clamp-2"
              : "text-sm sm:text-base mt-4 line-clamp-4"
          )}
        >
          {bio}
        </p>

        {/* Links */}
        {!isCompact && links.length > 0 && (
          <div
            className={cn(
              "flex items-center gap-3 mt-4",
              !isInline && "justify-center"
            )}
          >
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full",
                    "bg-spiracle-sand/50 text-muted-foreground",
                    "hover:bg-spiracle-sand hover:text-foreground",
                    "transition-colors duration-200"
                  )}
                  aria-label={link.label}
                >
                  <Icon className="size-4" weight="regular" />
                </Link>
              );
            })}
          </div>
        )}

        {/* View all link */}
        {authorHref && !isInline && (
          <Link
            href={authorHref}
            className={cn(
              "inline-flex items-center gap-1 mt-4",
              "text-sm font-medium text-spiracle-forest",
              "hover:text-spiracle-forest/80 transition-colors duration-200"
            )}
          >
            View all titles
            <ArrowRight
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              weight="bold"
            />
          </Link>
        )}
      </div>
    </article>
  );
}

export { AuthorBio };
