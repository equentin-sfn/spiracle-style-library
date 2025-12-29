"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/atoms";

export interface ReviewCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  author: string;
  coverImage: string;
  price?: string;
  memberPrice?: string;
  narrator?: string;
  duration?: string;
  isSpiracleSpecial?: boolean;
  category?: string;
}

function ReviewCard({
  title,
  author,
  coverImage,
  price,
  memberPrice,
  narrator,
  duration,
  isSpiracleSpecial,
  category,
  className,
  ...props
}: ReviewCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl bg-card border border-border overflow-hidden transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Cover Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={coverImage}
          alt={`Book cover: ${title} by ${author}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {isSpiracleSpecial && (
          <div className="absolute top-2 left-2">
            <Badge
              className="bg-accent text-accent-foreground text-xs"
              aria-label="This is a Spiracle special edition"
            >
              Spiracle special
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-4">
        {category && (
          <Badge variant="outline" className="w-fit text-xs">
            {category}
          </Badge>
        )}
        <header className="space-y-0.5 sm:space-y-1">
          <h3 className="font-serif text-base sm:text-lg leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{author}</p>
        </header>

        {(narrator || duration) && (
          <div className="text-xs text-muted-foreground space-y-0.5">
            {narrator && <p>Narrated by {narrator}</p>}
            {duration && <p aria-label={`Duration: ${duration}`}>{duration}</p>}
          </div>
        )}

        {(price || memberPrice) && (
          <footer className="flex items-baseline gap-2 mt-1 sm:mt-2 pt-2 border-t border-border">
            {price && (
              <span className="font-semibold" aria-label={`Price: ${price} pounds`}>
                £{price}
              </span>
            )}
            {memberPrice && (
              <span
                className="text-xs text-muted-foreground"
                aria-label={`Member price: ${memberPrice} pounds`}
              >
                £{memberPrice} members
              </span>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}

export { ReviewCard };
