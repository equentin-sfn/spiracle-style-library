"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Plus, Star, Tag } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface BookTag {
  label: string;
  href: string;
}

export interface BookCoverActionsProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Book title for accessible image alt text */
  bookTitle: string;
  coverImage: string;
  onSample?: () => void;
  addToLibraryHref?: string;
  favoriteHref?: string;
  /** Whether the book is in the user's library */
  isInLibrary?: boolean;
  /** Whether the book is favorited */
  isFavorited?: boolean;
  tags?: BookTag[];
}

function BookCoverActions({
  bookTitle,
  coverImage,
  onSample,
  addToLibraryHref = "#",
  favoriteHref = "#",
  isInLibrary = false,
  isFavorited = false,
  tags = [],
  className,
  ...props
}: BookCoverActionsProps) {
  return (
    <article
      className={cn("flex flex-col gap-5", className)}
      {...props}
    >
      {/* Book Cover */}
      <figure className="relative aspect-square w-full overflow-hidden rounded-sm shadow-sm">
        <Image
          src={coverImage}
          alt={`Cover of ${bookTitle}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          priority
        />
      </figure>

      {/* Action Row */}
      <div className="flex items-center gap-1.5">
        {/* Sample Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onSample}
          className={cn(
            "gap-1.5 uppercase tracking-[0.1em] text-xs font-medium",
            "hover:border-spiracle-forest hover:text-spiracle-forest",
            "transition-colors duration-200"
          )}
        >
          <Headphones className="size-4" weight="regular" aria-hidden="true" />
          Sample
        </Button>

        {/* Add to Library Button - Static square with rotating plus inside */}
        <Link
          href={addToLibraryHref}
          className={cn(
            "group/lib flex items-center justify-center",
            "w-8 h-8 rounded-[4px]",
            "border border-foreground/30",
            "transition-colors duration-200",
            isInLibrary
              ? "border-spiracle-forest bg-spiracle-forest/10 text-spiracle-forest"
              : "text-foreground/60 hover:border-spiracle-forest hover:text-spiracle-forest"
          )}
          aria-label={isInLibrary ? "Remove from library" : "Add to library"}
        >
          <Plus
            className={cn(
              "size-4 transition-transform duration-200 ease-out",
              isInLibrary && "rotate-45",
              "group-hover/lib:rotate-45 group-active/lib:scale-90"
            )}
            weight="bold"
          />
        </Link>

        {/* Favorite Button */}
        <Link
          href={favoriteHref}
          className={cn(
            "group/fav flex items-center justify-center",
            "w-8 h-8",
            "transition-colors duration-200",
            isFavorited
              ? "text-spiracle-terracotta"
              : "text-foreground/60 hover:text-spiracle-terracotta"
          )}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Star
            className={cn(
              "size-5 transition-all duration-150 ease-out",
              "group-hover/fav:scale-110 group-active/fav:scale-95"
            )}
            weight={isFavorited ? "fill" : "regular"}
          />
        </Link>
      </div>

      {/* Tag Pills */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={tag.href}
              className={cn(
                "inline-flex items-center gap-1 px-2.5 py-1",
                "bg-secondary/70 text-secondary-foreground text-[0.7rem] rounded-full",
                "hover:bg-spiracle-forest/10 hover:text-spiracle-forest",
                "transition-colors duration-200"
              )}
            >
              <Tag className="size-3" weight="regular" aria-hidden="true" />
              {tag.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

export { BookCoverActions };
