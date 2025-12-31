"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/atoms";

const previewLinks = [
  { label: "Base Components", href: "/preview" },
  { label: "Homepage", href: "/preview/home" },
  { label: "Book Cards", href: "/preview/books" },
  { label: "Collections", href: "/preview/collections" },
  { label: "Spotlights", href: "/preview/spotlights" },
  { label: "Showcase", href: "/preview/showcase" },
  { label: "Book Details", href: "/preview/book-details" },
  { label: "Title Detail", href: "/preview/title-detail" },
  { label: "Membership", href: "/preview/membership" },
];

export interface PreviewBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current page path for highlighting active link */
  currentPath?: string;
}

function PreviewBar({ currentPath, className, ...props }: PreviewBarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "sticky top-0 z-[60] bg-[#1a1a18] text-spiracle-cream",
        className
      )}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-10">
          {/* Left: Logo + "Preview" badge */}
          <Link
            href="/preview"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logos/logo-spiracle-spiral-black@3x.png"
              alt="Spiracle"
              width={80}
              height={20}
              className="h-4 w-auto invert"
              priority
            />
            <span className="text-[10px] uppercase tracking-[0.15em] opacity-60 border border-current/30 px-1.5 py-0.5 rounded">
              Preview
            </span>
          </Link>

          {/* Right: Theme toggle + Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle iconSize={16} className="text-spiracle-cream hover:text-spiracle-cream/80" />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 hover:bg-white/10 rounded transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="size-4" weight="bold" />
              ) : (
                <List className="size-4" weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#1a1a18]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3">
            <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {previewLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "text-xs px-3 py-2 rounded transition-colors",
                    currentPath === link.href
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 text-spiracle-cream/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export { PreviewBar };
