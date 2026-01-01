"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ThemeToggle } from "@/components/atoms";
import { PageWrapper } from "@/components/templates";

/**
 * TopNavigation - Multi-Platform Excellence
 *
 * Touch targets: All interactive elements meet 44px minimum
 * Hover states: Scoped to desktop via CSS @media (hover: hover) in globals.css
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface TopNavigationProps extends React.HTMLAttributes<HTMLElement> {
  navItems: NavItem[];
  onSearch?: () => void;
  onCart?: () => void;
  loginHref?: string;
  joinHref?: string;
  /** Logo link destination (defaults to "/") */
  logoHref?: string;
}

function TopNavigation({
  navItems,
  onSearch,
  onCart,
  loginHref = "/login",
  joinHref = "/join",
  logoHref = "/",
  className,
  ...props
}: TopNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "w-full bg-background sticky top-0 z-50 border-b border-transparent",
        "shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]",
        className
      )}
      data-slot="top-navigation"
      {...props}
    >
      <PageWrapper>
        <nav
          className="flex items-center justify-between py-2"
          aria-label="Main navigation"
        >
        {/* Left: Logo - 44px touch target */}
        <Link
          href={logoHref}
          className="shrink-0 min-h-[44px] flex items-center"
          aria-label="Spiracle home"
        >
          <Image
            src="/logos/logo-spiracle-spiral-black@3x.png"
            alt="Spiracle"
            width={120}
            height={32}
            className="h-6 sm:h-7 w-auto dark:invert"
            priority
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-xs xl:text-sm uppercase tracking-[0.15em] text-foreground",
                  "min-h-[44px] flex items-center px-1", // 44px touch target
                  "link-literary" // Hover handled in CSS
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search - 44px touch target */}
          <button
            type="button"
            onClick={onSearch}
            data-slot="nav-icon-button"
            className={cn(
              "hidden sm:flex items-center justify-center",
              "min-w-[44px] min-h-[44px]", // 44px touch target
              "text-foreground transition-colors",
              "rounded-sm" // For focus ring
            )}
            aria-label="Search"
          >
            <Search className="size-5" strokeWidth={1.5} />
          </button>

          {/* Cart - 44px touch target */}
          <button
            type="button"
            onClick={onCart}
            data-slot="nav-icon-button"
            className={cn(
              "hidden sm:flex items-center justify-center",
              "min-w-[44px] min-h-[44px]", // 44px touch target
              "text-foreground transition-colors",
              "rounded-sm"
            )}
            aria-label="Shopping cart"
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} />
          </button>

          {/* Theme Toggle - Desktop only */}
          <ThemeToggle className="hidden sm:flex" iconSize={20} />

          {/* Log In Link - Desktop only, 44px touch target */}
          <Link
            href={loginHref}
            className={cn(
              "hidden lg:flex items-center",
              "text-xs xl:text-sm uppercase tracking-[0.15em] text-foreground",
              "min-h-[44px] px-3", // 44px touch target
              "link-literary"
            )}
          >
            Log In
          </Link>

          {/* Join Button - inherits 44px from Button component */}
          <Button
            asChild
            data-slot="nav-join-button"
            className="bg-spiracle-burgundy text-spiracle-cream border-spiracle-burgundy px-4 sm:px-6"
          >
            <Link href={joinHref}>Join</Link>
          </Button>

          {/* Mobile Menu Toggle - 44px touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-slot="nav-icon-button"
            className={cn(
              "lg:hidden flex items-center justify-center",
              "min-w-[44px] min-h-[44px]", // 44px touch target
              "text-foreground transition-colors",
              "rounded-sm"
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-6" strokeWidth={1.5} />
            ) : (
              <Menu className="size-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
        </nav>
      </PageWrapper>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <PageWrapper>
            <div className="py-4 space-y-4">
            {/* Mobile Nav Links - 44px touch targets */}
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-slot="mobile-nav-link"
                    className={cn(
                      "flex items-center",
                      "min-h-[44px] py-2", // 44px touch target
                      "text-sm uppercase tracking-[0.15em] text-foreground",
                      "transition-colors"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Actions - 44px touch targets */}
            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  onSearch?.();
                  setMobileMenuOpen(false);
                }}
                data-slot="mobile-action-button"
                className={cn(
                  "flex items-center gap-2",
                  "min-h-[44px] px-2", // 44px touch target
                  "text-sm text-foreground transition-colors"
                )}
                aria-label="Search"
              >
                <Search className="size-5" strokeWidth={1.5} />
                <span>Search</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onCart?.();
                  setMobileMenuOpen(false);
                }}
                data-slot="mobile-action-button"
                className={cn(
                  "flex items-center gap-2",
                  "min-h-[44px] px-2", // 44px touch target
                  "text-sm text-foreground transition-colors"
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="size-5" strokeWidth={1.5} />
                <span>Cart</span>
              </button>

              <ThemeToggle iconSize={20} />

              <Link
                href={loginHref}
                data-slot="mobile-nav-link"
                className={cn(
                  "flex items-center",
                  "min-h-[44px] px-2", // 44px touch target
                  "text-sm uppercase tracking-[0.15em] text-foreground",
                  "transition-colors ml-auto"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
            </div>
          </PageWrapper>
        </div>
      )}
    </header>
  );
}

export { TopNavigation };
