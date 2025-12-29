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
        "flex flex-col",
        className
      )}
      {...props}
    >
      {/* Card with header and image */}
      <div className="flex flex-col overflow-hidden rounded-lg border border-spiracle-sand bg-white shadow-sm">
        {/* Header with title and author */}
        <header className="px-4 py-3 sm:px-6 sm:py-4 text-center">
          <h3 className="font-serif text-lg sm:text-xl leading-tight text-spiracle-terracotta">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-0.5">
            {author}
          </p>
        </header>

        {/* Cover Image */}
        <figure className="relative aspect-square w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={`Book cover: ${title} by ${author}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </figure>
      </div>

      {/* Price info below card */}
      <footer className="mt-3 sm:mt-4 space-y-0.5">
        <p className="text-sm text-foreground">{title}</p>
        <p className="text-xs sm:text-sm text-muted-foreground">{author}</p>
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
