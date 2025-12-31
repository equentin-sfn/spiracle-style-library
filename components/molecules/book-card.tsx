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
        "group flex flex-col overflow-hidden rounded-sm bg-card book-spine",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(45,37,32,0.12),0_2px_8px_rgba(45,37,32,0.08)]",
        "dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]",
        className
      )}
      {...props}
    >
      {/* Cover Image - square with subtle vignette */}
      <figure className="relative aspect-square w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={`Book cover: ${title} by ${author}`}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:rotate-[-0.5deg]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
      </figure>

      {/* Footer with title, author, premium text */}
      <footer className="px-3 py-3 sm:px-4 sm:py-4 space-y-1 bg-card border-t border-border/20">
        <h3 className="font-serif text-sm sm:text-base text-foreground line-clamp-1 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1 italic">
          {author}
        </p>
        <p className="text-[0.6rem] text-primary/70 uppercase tracking-[0.15em] pt-1 font-medium">
          Included in Premium
        </p>
      </footer>
    </article>
  );
}

export { BookCard };
