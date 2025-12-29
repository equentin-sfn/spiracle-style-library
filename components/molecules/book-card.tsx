"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface BookCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  author: string;
  coverImage: string;
  price: string;
  memberPrice: string;
}

function BookCard({
  title,
  author,
  coverImage,
  price,
  memberPrice,
  className,
  ...props
}: BookCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-xl bg-spiracle-cream shadow-sm",
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
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </figure>

      {/* Footer with title, author, price - cream background */}
      <footer className="px-4 py-3 sm:px-5 sm:py-4 space-y-1 bg-spiracle-cream border-t border-spiracle-sand">
        <h3 className="text-sm sm:text-base font-medium text-foreground line-clamp-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {author}
        </p>
        <p
          className="text-xs sm:text-sm text-spiracle-terracotta"
          aria-label={`Price: ${price} pounds, or ${memberPrice} pounds for premium members`}
        >
          £{price} / £{memberPrice} for premium members
        </p>
      </footer>
    </article>
  );
}

export { BookCard };
