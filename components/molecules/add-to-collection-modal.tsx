"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";

export interface Collection {
  id: string;
  name: string;
  bookCount?: number;
}

export interface AddToCollectionModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal open state changes */
  onOpenChange: (open: boolean) => void;
  /** Available collections */
  collections: Collection[];
  /** IDs of collections the book is already in */
  selectedCollectionIds: string[];
  /** Callback when selection changes and user saves */
  onSave: (collectionIds: string[]) => void;
  /** Callback when a new collection is created */
  onCreateCollection?: (name: string) => void;
  /** Book title for context */
  bookTitle?: string;
}

function AddToCollectionModal({
  open,
  onOpenChange,
  collections,
  selectedCollectionIds,
  onSave,
  onCreateCollection,
  bookTitle,
}: AddToCollectionModalProps) {
  // Local state for checkboxes (before save)
  const [localSelected, setLocalSelected] = React.useState<Set<string>>(
    new Set(selectedCollectionIds)
  );

  // State for creating new collection
  const [isCreating, setIsCreating] = React.useState(false);
  const [newCollectionName, setNewCollectionName] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Reset local state when modal opens
  React.useEffect(() => {
    if (open) {
      setLocalSelected(new Set(selectedCollectionIds));
      setIsCreating(false);
      setNewCollectionName("");
    }
  }, [open, selectedCollectionIds]);

  // Focus input when creating new collection
  React.useEffect(() => {
    if (isCreating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCreating]);

  const handleToggle = (collectionId: string) => {
    setLocalSelected((prev) => {
      const next = new Set(prev);
      if (next.has(collectionId)) {
        next.delete(collectionId);
      } else {
        next.add(collectionId);
      }
      return next;
    });
  };

  const handleSave = () => {
    onSave(Array.from(localSelected));
    onOpenChange(false);
  };

  const handleCreateCollection = () => {
    if (newCollectionName.trim() && onCreateCollection) {
      onCreateCollection(newCollectionName.trim());
      setNewCollectionName("");
      setIsCreating(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCreateCollection();
    } else if (e.key === "Escape") {
      setIsCreating(false);
      setNewCollectionName("");
    }
  };

  // Check if anything changed
  const hasChanges =
    localSelected.size !== selectedCollectionIds.length ||
    !selectedCollectionIds.every((id) => localSelected.has(id));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          // Override default styles for bottom sheet on mobile
          "sm:max-w-md",
          // Mobile: bottom sheet style
          "max-sm:top-auto max-sm:bottom-0 max-sm:translate-y-0 max-sm:-translate-x-1/2",
          "max-sm:rounded-b-none max-sm:rounded-t-2xl",
          "max-sm:max-w-full max-sm:w-full",
          // Animation override for mobile
          "max-sm:data-[state=open]:slide-in-from-bottom max-sm:data-[state=closed]:slide-out-to-bottom",
          "max-sm:data-[state=open]:zoom-in-100 max-sm:data-[state=closed]:zoom-out-100",
          // Warm background
          "bg-spiracle-cream dark:bg-card"
        )}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Add to Collection
          </DialogTitle>
          {bookTitle && (
            <p className="text-sm text-muted-foreground">{bookTitle}</p>
          )}
        </DialogHeader>

        {/* Collections List */}
        <div className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto -mx-2 px-2">
          {collections.map((collection) => {
            const isChecked = localSelected.has(collection.id);
            return (
              <label
                key={collection.id}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer",
                  "min-h-[52px]", // 44px+ touch target
                  "transition-colors duration-150",
                  "hover:bg-spiracle-sand/50 dark:hover:bg-muted/50",
                  isChecked && "bg-spiracle-sand/30 dark:bg-muted/30"
                )}
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => handleToggle(collection.id)}
                  aria-label={`Add to ${collection.name}`}
                />
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-foreground">
                    {collection.name}
                  </span>
                  {collection.bookCount !== undefined && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      {collection.bookCount} {collection.bookCount === 1 ? "book" : "books"}
                    </span>
                  )}
                </div>
              </label>
            );
          })}

          {/* Create New Collection */}
          {onCreateCollection && (
            <>
              {!isCreating ? (
                <button
                  type="button"
                  onClick={() => setIsCreating(true)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg",
                    "min-h-[52px]", // 44px+ touch target
                    "text-muted-foreground",
                    "transition-colors duration-150",
                    "hover:bg-spiracle-sand/50 dark:hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <div className="flex items-center justify-center size-5">
                    <Plus className="size-4" strokeWidth={2} />
                  </div>
                  <span className="font-medium">Create new collection</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 p-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={newCollectionName}
                    onChange={(e) => setNewCollectionName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Collection name..."
                    className={cn(
                      "flex-1 px-3 py-2 rounded-md",
                      "bg-background border border-border",
                      "text-sm placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-spiracle-terracotta/50"
                    )}
                  />
                  <Button
                    size="sm"
                    onClick={handleCreateCollection}
                    disabled={!newCollectionName.trim()}
                    className="bg-spiracle-forest hover:bg-spiracle-forest/90 text-spiracle-cream"
                  >
                    Add
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setIsCreating(false);
                      setNewCollectionName("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        <DialogFooter className="sm:justify-between gap-3">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="max-sm:flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!hasChanges}
            className={cn(
              "bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream",
              "max-sm:flex-1"
            )}
          >
            {localSelected.size === 0 ? "Remove from all" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { AddToCollectionModal };
