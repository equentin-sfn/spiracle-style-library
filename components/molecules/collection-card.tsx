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
        "group flex aspect-[2/1] overflow-hidden rounded-sm",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
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
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 50vw, 200px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between bg-spiracle-parchment dark:bg-[#3a332c] p-3 sm:p-4">
        <h3 className="font-serif text-sm sm:text-base leading-[1.35] text-spiracle-ink dark:text-foreground line-clamp-3 tracking-[-0.01em]">
          {title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-4 text-spiracle-slate/70 dark:text-muted-foreground">
          <div className="flex items-center gap-1" aria-label={`${bookCount} books`}>
            <Book size={15} weight="regular" aria-hidden="true" />
            <span className="text-xs">{bookCount}</span>
          </div>

          <div className="flex items-center gap-1" aria-label={`${memberCount} members`}>
            <UserList size={15} weight="regular" aria-hidden="true" />
            <span className="text-xs">{memberCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export { CollectionCard };
