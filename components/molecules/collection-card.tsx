"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Book, UserList } from "@phosphor-icons/react";

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
      className={cn(
        "flex aspect-[2/1] overflow-hidden rounded-sm",
        className
      )}
      {...props}
    >
      {/* Square Image */}
      <div className="relative aspect-square h-full flex-shrink-0">
        <Image
          src={image}
          alt={`Cover image for "${title}" collection`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 200px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between bg-spiracle-parchment p-3 sm:p-4">
        <h3 className="font-serif text-sm sm:text-base leading-snug text-foreground line-clamp-3">
          {title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5" aria-label={`${bookCount} books`}>
            <Book size={18} aria-hidden="true" />
            <span className="text-xs sm:text-sm">{bookCount}</span>
          </div>

          <div className="flex items-center gap-1.5" aria-label={`${memberCount} members`}>
            <UserList size={19} aria-hidden="true" />
            <span className="text-xs sm:text-sm">{memberCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export { CollectionCard };
