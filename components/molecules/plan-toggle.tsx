"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type BillingPeriod = "monthly" | "annually";

export interface PlanToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current selected period */
  value: BillingPeriod;
  /** Callback when period changes */
  onChange: (period: BillingPeriod) => void;
  /** Savings badge text for annual */
  savingsBadge?: string;
}

function PlanToggle({
  value,
  onChange,
  savingsBadge = "2 months free",
  className,
  ...props
}: PlanToggleProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    >
      {/* Toggle Container */}
      <div
        className={cn(
          "relative inline-flex items-center p-1",
          "bg-spiracle-sand/50 dark:bg-muted rounded-full",
          "border border-border/30"
        )}
        role="radiogroup"
        aria-label="Billing period"
      >
        {/* Sliding Background */}
        <motion.div
          className={cn(
            "absolute top-1 bottom-1 rounded-full",
            "bg-card dark:bg-card",
            "shadow-sm border border-border/50"
          )}
          initial={false}
          animate={{
            left: value === "monthly" ? "4px" : "calc(50% + 2px)",
            width: value === "monthly" ? "calc(50% - 6px)" : "calc(50% - 6px)",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />

        {/* Monthly Option */}
        <button
          type="button"
          role="radio"
          aria-checked={value === "monthly"}
          onClick={() => onChange("monthly")}
          className={cn(
            "relative z-10 px-5 sm:px-6 py-2.5",
            "text-sm font-medium rounded-full",
            "transition-colors duration-200",
            value === "monthly"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground/80"
          )}
        >
          Monthly
        </button>

        {/* Annually Option */}
        <button
          type="button"
          role="radio"
          aria-checked={value === "annually"}
          onClick={() => onChange("annually")}
          className={cn(
            "relative z-10 px-5 sm:px-6 py-2.5",
            "text-sm font-medium rounded-full",
            "transition-colors duration-200",
            value === "annually"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground/80"
          )}
        >
          Annually
        </button>
      </div>

      {/* Savings Badge */}
      {savingsBadge && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{
            opacity: value === "annually" ? 1 : 0.5,
            y: 0,
            scale: value === "annually" ? 1 : 0.95,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1",
            "text-xs font-medium rounded-full",
            value === "annually"
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          )}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" />
          {savingsBadge}
        </motion.span>
      )}
    </div>
  );
}

export { PlanToggle };
