"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, PlusSquare, Star, Tag } from "@phosphor-icons/react";
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
  tags?: BookTag[];
}

function BookCoverActions({
  bookTitle,
  coverImage,
  onSample,
  addToLibraryHref = "#",
  favoriteHref = "#",
  tags = [],
  className,
  ...props
}: BookCoverActionsProps) {
  return (
    <article
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      {/* Book Cover */}
      <figure className="relative aspect-square w-full overflow-hidden rounded-sm">
        <Image
          src={coverImage}
          alt={`Cover of ${bookTitle}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
        />
      </figure>

      {/* Action Row */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onSample}
          className="gap-1.5 uppercase tracking-wider text-xs font-medium"
        >
          <Headphones className="size-4" weight="regular" aria-hidden="true" />
          Sample
        </Button>

        <Link
          href={addToLibraryHref}
          className="group p-2 text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Add to library"
        >
          <PlusSquare
            className="size-5 transition-transform duration-200 ease-out group-hover:rotate-45 group-active:rotate-45"
            weight="regular"
          />
        </Link>

        <Link
          href={favoriteHref}
          className="p-2 text-foreground hover:text-spiracle-burgundy transition-colors"
          aria-label="Add to favorites"
        >
          <Star className="size-5" weight="regular" />
        </Link>
      </div>

      {/* Tag Pills */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={tag.href}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Tag className="size-3.5" weight="regular" aria-hidden="true" />
              {tag.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

export { BookCoverActions };
