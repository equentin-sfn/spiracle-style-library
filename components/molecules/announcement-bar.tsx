"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface AnnouncementBarProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Unique ID for localStorage persistence */
  id: string;
  /** Icon to display before the message */
  icon?: PhosphorIcon;
  /** The announcement message */
  message: string;
  /** Optional link text */
  linkText?: string;
  /** Optional link href */
  linkHref?: string;
  /** Whether the bar can be dismissed */
  dismissible?: boolean;
  /** Background color variant */
  variant?: "default" | "subtle" | "accent";
}

const variantStyles = {
  default: "bg-muted text-foreground border-b border-border/50",
  subtle: "bg-muted/50 text-foreground border-b border-border/30",
  accent: "bg-spiracle-honey/60 dark:bg-spiracle-honey/20 text-foreground border-b border-spiracle-honey dark:border-spiracle-honey/30",
};

function AnnouncementBar({
  id,
  icon: Icon,
  message,
  linkText,
  linkHref,
  dismissible = true,
  variant = "default",
  className,
  ...props
}: AnnouncementBarProps) {
  const [isDismissed, setIsDismissed] = React.useState(true); // Start hidden to prevent flash
  const storageKey = `spiracle-announcement-${id}`;

  // Check localStorage on mount
  React.useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    setIsDismissed(dismissed === "true");
  }, [storageKey]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(storageKey, "true");
  };

  // Don't render if dismissed
  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "relative w-full py-2.5 sm:py-3",
        variantStyles[variant],
        className
      )}
      role="banner"
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          {/* Icon */}
          {Icon && (
            <Icon
              className="size-4 flex-shrink-0 text-foreground/70"
              weight="regular"
              aria-hidden="true"
            />
          )}

          {/* Message */}
          <p className="text-xs sm:text-sm">
            <span className="text-foreground/90">{message}</span>
            {linkText && linkHref && (
              <>
                {" "}
                <Link
                  href={linkHref}
                  className="font-medium text-foreground underline underline-offset-2 hover:text-primary transition-colors"
                >
                  {linkText}
                </Link>
              </>
            )}
          </p>

          {/* Dismiss button */}
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className={cn(
                "absolute right-3 sm:right-4 top-1/2 -translate-y-1/2",
                "p-1.5 rounded-sm",
                "text-foreground/50 hover:text-foreground hover:bg-foreground/5",
                "transition-colors duration-200"
              )}
              aria-label="Dismiss announcement"
            >
              <X className="size-4" weight="bold" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { AnnouncementBar };
