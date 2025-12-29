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
        "flex flex-col overflow-hidden rounded-lg border border-spiracle-sand bg-spiracle-cream",
        className
      )}
      {...props}
    >
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

      {/* Content */}
      <div className="flex flex-col gap-1 p-3 sm:p-4">
        <header className="space-y-0.5">
          <h3 className="font-serif text-base sm:text-lg leading-tight line-clamp-2 text-foreground">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{author}</p>
        </header>

        <p
          className="text-xs sm:text-sm text-spiracle-terracotta mt-1"
          aria-label={`Price: ${price} pounds, or ${memberPrice} pounds for premium members`}
        >
          £{price} / £{memberPrice} for premium members
        </p>
      </div>
    </article>
  );
}

export { BookCard };
