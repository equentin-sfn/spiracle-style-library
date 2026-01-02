"use client";

// =============================================================================
// ACCOUNT FOOTER
// Settings and help links at the bottom of the profile page
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Settings, HelpCircle, LogOut } from "lucide-react";
import { Section } from "./helpers";

export interface AccountFooterProps {
  settingsHref?: string;
  helpHref?: string;
  showLogout?: boolean;
  onLogout?: () => void;
  className?: string;
}

export function AccountFooter({
  settingsHref = "/settings",
  helpHref = "/help",
  showLogout = false,
  onLogout,
  className,
}: AccountFooterProps) {
  return (
    <Section className={cn("border-t border-spiracle-sand dark:border-border", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={settingsHref}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings className="size-4" />
            Account settings
          </Link>
          {showLogout && (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="size-4" />
              Sign out
            </button>
          )}
        </div>
        <Link
          href={helpHref}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <HelpCircle className="size-4 hidden sm:block" />
          Help & support
        </Link>
      </div>
    </Section>
  );
}

// Default props for style guide display
AccountFooter.defaultProps = {
  settingsHref: "/settings",
  helpHref: "/help",
  showLogout: false,
};
