"use client";

import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { BookCard } from "@/components/molecules";
import { PageWrapper } from "@/components/templates";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export interface CollectionSpotlightBook {
  title: string;
  author: string;
  coverImage: string;
}

export interface CollectionSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  heroImage: string;
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  books: CollectionSpotlightBook[];
  /** Theme color sampled from the hero image (hex value) - used for section bg and gradient */
  themeColor?: string;
  /** Whether the theme is light (requires dark text) or dark (uses light text) */
  themeMode?: "dark" | "light";
}

function CollectionSpotlight({
  heroImage,
  label,
  headline,
  description,
  ctaText,
  ctaLink,
  books,
  themeColor = "#000000",
  themeMode = "dark",
  className,
  ...props
}: CollectionSpotlightProps) {
  const isDark = themeMode === "dark";
  const textColor = isDark ? "text-white" : "text-foreground";
  const textMuted = isDark ? "text-white/70" : "text-foreground/70";
  const buttonStyle = isDark
    ? "border-white/30 text-white hover:bg-white/10"
    : "border-foreground/30 text-foreground hover:bg-foreground/10";
  const arrowStyle = isDark
    ? "bg-white/10 hover:bg-white/20 text-white"
    : "bg-foreground/10 hover:bg-foreground/20 text-foreground";
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={cn("w-full", className)}
      style={{ backgroundColor: themeColor }}
      {...props}
    >
      {/* Hero Section */}
      <PageWrapper fullBleed className="relative">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="1440px"
            aria-hidden="true"
          />
          {/* Gradient overlay using theme color for seamless blend */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${themeColor} 0%, ${themeColor}cc 30%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-96 sm:min-h-[30rem] lg:min-h-[35rem] flex items-center">
          <header className="max-w-md lg:max-w-lg space-y-4 sm:space-y-6">
            <p className={cn("text-xs sm:text-sm uppercase tracking-[0.2em]", textMuted)}>
              {label}
            </p>
            <h2 className={cn("font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight", textColor)}>
              {headline}
            </h2>
            <p className={cn("text-sm sm:text-base leading-relaxed font-serif", textMuted)}>
              {description}
            </p>
            <a href={ctaLink}>
              <Button
                variant="outline"
                className={cn(buttonStyle, "mt-2")}
              >
                {ctaText}
              </Button>
            </a>
          </header>
        </div>
      </PageWrapper>

      {/* Book Carousel Section */}
      <PageWrapper className="py-8 sm:py-12">
        {/* Carousel Controls */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10",
              "w-10 h-10 rounded-full flex items-center justify-center transition-colors hidden sm:flex",
              arrowStyle
            )}
            aria-label="Scroll left"
          >
            <CaretLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10",
              "w-10 h-10 rounded-full flex items-center justify-center transition-colors hidden sm:flex",
              arrowStyle
            )}
            aria-label="Scroll right"
          >
            <CaretRight size={20} />
          </button>

          {/* Scrollable Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start min-w-60"
                style={{ width: "calc((100% - 3rem) / 3.5)" }}
              >
                <BookCard
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                />
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}

export { CollectionSpotlight };
