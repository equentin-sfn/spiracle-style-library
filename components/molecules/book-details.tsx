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
    <article className={cn("flex flex-col gap-4", className)} {...props}>
      {/* Title */}
      <header>
        <h1 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight">
          {title}
        </h1>
        <Link
          href={author.href}
          className="text-sm sm:text-base text-foreground hover:text-muted-foreground transition-colors"
        >
          {author.name}
        </Link>
      </header>

      {/* Stats Row */}
      <div className="flex items-center gap-4 text-sm text-foreground">
        <span className="inline-flex items-center gap-1">
          <Star className="size-4" weight="fill" aria-hidden="true" />
          <span>
            {rating.score} ({rating.count})
          </span>
        </span>
        <span className="inline-flex items-center gap-1">
          <Book className="size-4" weight="regular" aria-hidden="true" />
          <span>{bookCount}</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="size-4" weight="regular" aria-hidden="true" />
          <span>{userCount}</span>
        </span>
      </div>

      {/* Metadata */}
      <dl className="flex flex-col gap-1 text-sm">
        <div>
          <dt className="inline text-foreground">Narrator: </dt>
          <dd className="inline">
            <Link
              href={narrator.href}
              className="text-spiracle-terracotta hover:underline"
            >
              {narrator.name}
            </Link>
          </dd>
        </div>
        <div>
          <dt className="inline text-foreground">Length: </dt>
          <dd className="inline text-foreground">{length}</dd>
        </div>
        <div>
          <dt className="inline text-foreground">Publisher: </dt>
          <dd className="inline">
            <Link
              href={publisher.href}
              className="text-spiracle-terracotta hover:underline"
            >
              {publisher.name}
            </Link>
          </dd>
        </div>
        {series && (
          <div>
            <dd>
              <Link
                href={series.href}
                className="text-spiracle-terracotta hover:underline"
              >
                Book {series.bookNumber} of {series.title}
              </Link>
            </dd>
          </div>
        )}
      </dl>

      {/* Spiracle Says */}
      <section className="mt-2">
        <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
          Spiracle says
        </h2>
        <p className="text-sm sm:text-base text-foreground leading-relaxed">
          {displayedContent.spiracle}
        </p>
      </section>

      {/* From the Publisher */}
      {displayedContent.publisher && (
        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
            From the publisher
          </h2>
          <div className="text-sm sm:text-base text-foreground leading-relaxed space-y-3">
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
          className="self-start text-sm text-spiracle-terracotta hover:underline"
        >
          More...
        </button>
      )}
      {isExpanded && totalContentLength > maxDescriptionLength && (
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="self-start text-sm text-spiracle-terracotta hover:underline"
        >
          Less
        </button>
      )}
    </article>
  );
}

export { BookDetails };
