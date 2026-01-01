"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of FAQ items */
  items: FAQItem[];
  /** Allow multiple items to be open at once */
  allowMultiple?: boolean;
}

function FAQAccordion({
  items,
  allowMultiple = false,
  className,
  ...props
}: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = React.useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        return (
          <div
            key={index}
            className={cn(
              "rounded-sm overflow-hidden",
              "border border-border/30",
              "bg-card",
              "transition-all duration-200",
              isOpen && "border-border/50"
            )}
          >
            {/* Question Header */}
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className={cn(
                "w-full flex items-center justify-between gap-4",
                "px-5 py-4 sm:px-6 sm:py-5",
                "text-left",
                "transition-colors duration-200",
                "hover:bg-muted/30"
              )}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-sm sm:text-base text-foreground pr-4">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown
                  className="size-5 text-muted-foreground"
                  strokeWidth={2.5}
                />
              </motion.span>
            </button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    <div className="h-px bg-border/30 mb-4" aria-hidden="true" />
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export { FAQAccordion };
