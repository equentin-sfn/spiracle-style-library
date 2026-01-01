"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Plus, Star, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AddToCollectionModal, type Collection } from "./add-to-collection-modal";

/**
 * BookCoverActions - Multi-Platform Excellence
 *
 * Touch targets: All interactive elements meet 44px minimum
 * Hover states: Scoped to desktop via CSS @media (hover: hover) in globals.css
 */

export interface BookTag {
  label: string;
  href: string;
}

export interface BookCoverActionsProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Book title for accessible image alt text */
  bookTitle: string;
  coverImage: string;
  /** Override image (e.g., AIAC card when Card Edition selected) */
  coverImageOverride?: string;
  /** Whether the current image represents a physical product (shows with shadow/angle) */
  isPhysicalProduct?: boolean;
  onSample?: () => void;
  /** Whether the book is in any collection */
  isInCollection?: boolean;
  /** Whether the book is in the user's library (alias for isInCollection) */
  isInLibrary?: boolean;
  /** Whether the book is favorited (controlled) */
  isFavorited?: boolean;
  /** Default favorite state (uncontrolled) */
  defaultFavorited?: boolean;
  /** Callback when favorite state changes */
  onFavoriteChange?: (isFavorited: boolean) => void;
  tags?: BookTag[];
  /** User's collections for the modal */
  collections?: Collection[];
  /** IDs of collections this book is already in */
  selectedCollectionIds?: string[];
  /** Callback when collections are saved */
  onSaveCollections?: (collectionIds: string[]) => void;
  /** Callback when a new collection is created */
  onCreateCollection?: (name: string) => void;
}

function BookCoverActions({
  bookTitle,
  coverImage,
  coverImageOverride,
  isPhysicalProduct = false,
  onSample,
  isInCollection,
  isInLibrary = false,
  isFavorited: controlledFavorited,
  defaultFavorited = false,
  onFavoriteChange,
  tags = [],
  collections = [],
  selectedCollectionIds = [],
  onSaveCollections,
  onCreateCollection,
  className,
  ...props
}: BookCoverActionsProps) {
  // Modal state
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Favorite state (controlled or uncontrolled)
  const [internalFavorited, setInternalFavorited] = React.useState(defaultFavorited);
  const isFavorited = controlledFavorited ?? internalFavorited;

  const handleFavoriteToggle = () => {
    const newValue = !isFavorited;
    if (controlledFavorited === undefined) {
      setInternalFavorited(newValue);
    }
    onFavoriteChange?.(newValue);
  };

  // Use override image if provided (e.g., AIAC card design)
  const displayImage = coverImageOverride || coverImage;
  const altText = coverImageOverride
    ? `${bookTitle} - Card Edition`
    : `Cover of ${bookTitle}`;

  // Determine if book is in any collection
  const inAnyCollection = isInCollection || isInLibrary || selectedCollectionIds.length > 0;

  // Handle modal save
  const handleSaveCollections = (collectionIds: string[]) => {
    onSaveCollections?.(collectionIds);
  };

  return (
    <article
      className={cn("flex flex-col gap-5", className)}
      data-slot="book-cover-actions"
      {...props}
    >
      {/* Book Cover */}
      <figure
        className={cn(
          "relative w-full overflow-hidden",
          // Physical product gets special presentation
          isPhysicalProduct
            ? "aspect-[3/4] flex items-center justify-center bg-spiracle-sand/30 dark:bg-muted/30 rounded-sm p-4"
            : "aspect-square rounded-sm shadow-sm"
        )}
      >
        <div
          className={cn(
            "relative",
            isPhysicalProduct
              ? // Physical product: angled with shadow for tactile feel
                "w-[85%] h-full transform rotate-[2deg] transition-transform duration-300 hover:rotate-0"
              : "w-full h-full"
          )}
        >
          <Image
            src={displayImage}
            alt={altText}
            fill
            className={cn(
              "object-cover transition-all duration-300",
              isPhysicalProduct && "rounded-sm shadow-lg"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            priority
          />
        </div>
        {/* Subtle envelope hint for physical products */}
        {isPhysicalProduct && (
          <div
            className="absolute bottom-2 right-2 w-[30%] h-[15%] bg-[#c4a77d]/60 dark:bg-[#8b7355]/40 rounded-sm -rotate-3 -z-10"
            aria-hidden="true"
          />
        )}
      </figure>

      {/* Action Row */}
      <div className="flex items-center gap-1">
        {/* Sample Button - uses Button component (44px from component) */}
        <Button
          variant="outline"
          size="sm"
          onClick={onSample}
          data-slot="sample-button"
          className="gap-1.5 uppercase tracking-[0.1em] text-xs font-medium"
        >
          <Headphones className="size-4" strokeWidth={1.5} aria-hidden="true" />
          Sample
        </Button>

        {/* Add to Collection Button - 44px touch target */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          data-slot="collection-button"
          data-active={inAnyCollection ? "true" : undefined}
          className={cn(
            "flex items-center justify-center",
            // 44px touch target
            "w-11 h-11 min-w-[44px] min-h-[44px]",
            "rounded-[4px]",
            "border",
            "transition-all duration-300 ease-out",
            // Active state (in collection) - more prominent styling
            inAnyCollection && [
              "border-spiracle-forest",
              "bg-spiracle-forest",
              "text-spiracle-cream",
            ],
            // Default state
            !inAnyCollection && [
              "border-foreground/30",
              "text-foreground/60",
              "hover:border-spiracle-forest/60",
              "hover:text-spiracle-forest/80",
            ]
          )}
          aria-label={inAnyCollection ? "Manage collections" : "Add to collection"}
        >
          <Plus
            data-slot="collection-icon"
            className={cn(
              "size-4 transition-transform duration-300 ease-out",
              inAnyCollection && "rotate-45"
            )}
            strokeWidth={2.5}
          />
        </button>

        {/* Favorite Button - 44px touch target */}
        <button
          type="button"
          onClick={handleFavoriteToggle}
          data-slot="favorite-button"
          data-active={isFavorited ? "true" : undefined}
          className={cn(
            "flex items-center justify-center",
            // 44px touch target
            "w-11 h-11 min-w-[44px] min-h-[44px]",
            "transition-colors duration-200 ease-out",
            // Active state (favorited)
            isFavorited && "text-spiracle-terracotta",
            // Default state
            !isFavorited && "text-foreground/60 hover:text-spiracle-terracotta/70"
          )}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorited}
        >
          <Star
            data-slot="favorite-icon"
            className={cn(
              "size-5",
              "transition-all duration-200 ease-out",
              // Subtle scale animation on state change
              "motion-safe:active:scale-90",
              isFavorited && "motion-safe:animate-[pulse_0.2s_ease-out]"
            )}
            fill={isFavorited ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Tag Pills - 44px touch targets */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={tag.href}
              data-slot="book-tag"
              className={cn(
                "inline-flex items-center gap-1.5",
                // 44px touch target with visual padding
                "min-h-[44px] px-3 py-2",
                "bg-secondary/70 text-secondary-foreground text-xs rounded-full",
                "transition-colors duration-200"
              )}
            >
              <Tag className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
              {tag.label}
            </Link>
          ))}
        </div>
      )}

      {/* Add to Collection Modal */}
      <AddToCollectionModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        collections={collections}
        selectedCollectionIds={selectedCollectionIds}
        onSave={handleSaveCollections}
        onCreateCollection={onCreateCollection}
        bookTitle={bookTitle}
      />
    </article>
  );
}

export { BookCoverActions };
