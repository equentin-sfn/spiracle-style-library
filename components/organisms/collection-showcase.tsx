"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CollectionShowcaseProps extends React.HTMLAttributes<HTMLElement> {
  sectionLabel?: string;
  collectionName: string;
  collectionDescription: string;
  coverImages: string[]; // 5 cover images
}

function CollectionShowcase({
  sectionLabel = "Found in the following collections",
  collectionName,
  collectionDescription,
  coverImages,
  className,
  ...props
}: CollectionShowcaseProps) {
  // Ensure we have exactly 5 images (or pad with empty)
  const images = coverImages.slice(0, 5);

  return (
    <section
      className={cn(
        "w-full bg-spiracle-cream dark:bg-[#2D2520] py-12 sm:py-16",
        className
      )}
      {...props}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-foreground/60">
            {sectionLabel}
          </p>
        </header>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Text Card - First cell */}
          <article className="aspect-square bg-spiracle-parchment dark:bg-[#3a3530] rounded-sm p-4 sm:p-6 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.15em] text-spiracle-slate dark:text-white/50 mb-2">
              Collection
            </p>
            <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-tight text-spiracle-ink dark:text-white mb-2 sm:mb-3">
              {collectionName}
            </h3>
            <p className="text-xs sm:text-sm text-spiracle-slate dark:text-white/70 leading-relaxed">
              {collectionDescription}
            </p>
          </article>

          {/* Cover Images - Remaining 5 cells */}
          {images.map((image, index) => (
            <figure
              key={index}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={image}
                alt={`Book cover ${index + 1} from ${collectionName} collection`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CollectionShowcase };
