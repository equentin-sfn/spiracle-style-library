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
        "group flex flex-col overflow-hidden rounded-sm bg-card",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {/* Cover Image - square */}
      <figure className="relative aspect-square w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={`Book cover: ${title} by ${author}`}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </figure>

      {/* Footer with title, author, premium text */}
      <footer className="px-3 py-2.5 sm:px-4 sm:py-3 space-y-0.5 bg-card border-t border-border/30">
        <h3 className="text-sm font-medium text-foreground line-clamp-1 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {author}
        </p>
        <p className="text-[0.65rem] text-muted-foreground/60 uppercase tracking-wider pt-0.5">
          Included in Premium
        </p>
      </footer>
    </article>
  );
}

export { BookCard };
