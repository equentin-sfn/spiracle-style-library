"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface BookCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  author: string;
  coverImage: string;
}

function BookCard({
  title,
  author,
  coverImage,
  className,
  ...props
}: BookCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-sm bg-card border border-spiracle-sand/50",
        className
      )}
      {...props}
    >
      {/* Cover Image - square */}
      <figure className="relative aspect-square w-full overflow-hidden rounded-t-sm">
        <Image
          src={coverImage}
          alt={`Book cover: ${title} by ${author}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </figure>

      {/* Footer with title, author, premium text */}
      <footer className="px-4 py-3 sm:px-5 sm:py-4 space-y-1 bg-card">
        <h3 className="text-sm sm:text-base font-medium text-foreground line-clamp-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
          {author}
        </p>
        <p className="text-xs text-muted-foreground/70">
          Included in Premium
        </p>
      </footer>
    </article>
  );
}

export { BookCard };
