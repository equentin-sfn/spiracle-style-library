"use client";

import * as React from "react";
import Link from "next/link";
import { Star, Book, Users } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface LinkedValue {
  name: string;
  href: string;
}

export interface BookSeries {
  title: string;
  bookNumber: number;
  href: string;
}

export interface BookDetailsProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  author: LinkedValue;
  rating: { score: number; count: string };
  bookCount: number;
  userCount: number;
  narrator: LinkedValue;
  length: string;
  publisher: LinkedValue;
  series?: BookSeries;
  spiracleDescription: string;
  publisherDescription: string;
  maxDescriptionLength?: number;
}

function BookDetails({
  title,
  author,
  rating,
  bookCount,
  userCount,
  narrator,
  length,
  publisher,
  series,
  spiracleDescription,
  publisherDescription,
  maxDescriptionLength = 500,
  className,
  ...props
}: BookDetailsProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const totalContentLength =
    spiracleDescription.length + publisherDescription.length;
  const shouldTruncate =
    !isExpanded && totalContentLength > maxDescriptionLength;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  // Calculate how much of each description to show
  const getDisplayedContent = () => {
    if (!shouldTruncate) {
      return {
        spiracle: spiracleDescription,
        publisher: publisherDescription,
        showMore: false,
      };
    }

    if (spiracleDescription.length >= maxDescriptionLength) {
      return {
        spiracle: truncateText(spiracleDescription, maxDescriptionLength),
        publisher: "",
        showMore: true,
      };
    }

    const remainingLength = maxDescriptionLength - spiracleDescription.length;
    return {
      spiracle: spiracleDescription,
      publisher: truncateText(publisherDescription, remainingLength),
      showMore: true,
    };
  };

  const displayedContent = getDisplayedContent();

  return (
    <article className={cn("flex flex-col", className)} {...props}>
      {/* Title + Author */}
      <header className="mb-4">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-foreground leading-[1.15] tracking-[-0.01em] mb-1.5">
          {title}
        </h1>
        <Link
          href={author.href}
          className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {author.name}
        </Link>
      </header>

      {/* Stats Row */}
      <div className="flex items-center gap-5 text-sm text-foreground mb-5">
        <span className="inline-flex items-center gap-1.5">
          <Star className="size-4 text-spiracle-terracotta" weight="fill" aria-hidden="true" />
          <span className="font-medium">{rating.score}</span>
          <span className="text-muted-foreground">({rating.count})</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Book className="size-4" weight="regular" aria-hidden="true" />
          <span>{bookCount}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Users className="size-4" weight="regular" aria-hidden="true" />
          <span>{userCount}</span>
        </span>
      </div>

      {/* Metadata */}
      <dl className="flex flex-col gap-1.5 text-sm mb-6">
        <div className="flex gap-1">
          <dt className="text-muted-foreground">Narrator:</dt>
          <dd>
            <Link
              href={narrator.href}
              className="text-foreground hover:text-spiracle-terracotta transition-colors duration-200"
            >
              {narrator.name}
            </Link>
          </dd>
        </div>
        <div className="flex gap-1">
          <dt className="text-muted-foreground">Length:</dt>
          <dd className="text-foreground">{length}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="text-muted-foreground">Publisher:</dt>
          <dd>
            <Link
              href={publisher.href}
              className="text-foreground hover:text-spiracle-terracotta transition-colors duration-200"
            >
              {publisher.name}
            </Link>
          </dd>
        </div>
        {series && (
          <div className="mt-1">
            <dd>
              <Link
                href={series.href}
                className="text-spiracle-terracotta hover:underline underline-offset-2"
              >
                Book {series.bookNumber} of {series.title}
              </Link>
            </dd>
          </div>
        )}
      </dl>

      {/* Spiracle Says */}
      <section className="mb-5">
        <h2 className="font-serif text-lg sm:text-xl text-foreground mb-2.5 tracking-[-0.01em]">
          Spiracle says
        </h2>
        <p className="text-sm sm:text-[0.938rem] text-foreground/90 leading-[1.7]">
          {displayedContent.spiracle}
        </p>
      </section>

      {/* From the Publisher */}
      {displayedContent.publisher && (
        <section className="mb-4">
          <h2 className="font-serif text-lg sm:text-xl text-foreground mb-2.5 tracking-[-0.01em]">
            From the publisher
          </h2>
          <div className="text-sm sm:text-[0.938rem] text-foreground/90 leading-[1.7] space-y-3">
            {displayedContent.publisher.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* More/Less Link */}
      {displayedContent.showMore && (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="self-start text-sm font-medium text-spiracle-terracotta hover:underline underline-offset-2 transition-colors duration-200"
        >
          Read more
        </button>
      )}
      {isExpanded && totalContentLength > maxDescriptionLength && (
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="self-start text-sm font-medium text-spiracle-terracotta hover:underline underline-offset-2 transition-colors duration-200"
        >
          Show less
        </button>
      )}
    </article>
  );
}

export { BookDetails };
