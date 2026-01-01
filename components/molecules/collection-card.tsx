"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Book, Users } from "lucide-react";

/**
 * CollectionCard - Multi-Platform Excellence
 *
 * Touch: Clean, functional card with clear tap target
 * Desktop: Hover brings subtle lift, shadow, image scale, and title color change
 *
 * Hover states are scoped to desktop via CSS @media (hover: hover) in globals.css
 */

export interface CollectionCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  image: string;
  bookCount?: number;
  memberCount?: number;
}

function CollectionCard({
  title,
  image,
  bookCount = 0,
  memberCount = 0,
  className,
  ...props
}: CollectionCardProps) {
  return (
    <article
      data-slot="collection-card"
      className={cn(
        "group flex aspect-[2/1] overflow-hidden rounded-sm",
        "border border-border/30",
        // Transitions for hover effects (applied via CSS media query)
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {/* Square Image */}
      <div className="relative aspect-square h-full flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={`Cover image for "${title}" collection`}
          fill
          data-slot="collection-card-image"
          className="object-cover transition-transform duration-300 ease-out"
          sizes="(max-width: 768px) 50vw, 200px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between bg-card dark:bg-[#3a332c] p-3 sm:p-4">
        <h3
          data-slot="collection-card-title"
          className="font-serif text-sm sm:text-base leading-[1.35] text-foreground line-clamp-3 tracking-[-0.01em] transition-colors duration-200"
        >
          {title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-4 text-spiracle-slate/70 dark:text-muted-foreground">
          <div className="flex items-center gap-1" aria-label={`${bookCount} books`}>
            <Book size={15} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs">{bookCount}</span>
          </div>

          <div className="flex items-center gap-1" aria-label={`${memberCount} members`}>
            <Users size={15} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs">{memberCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export { CollectionCard };
