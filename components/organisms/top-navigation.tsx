"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlass, Bag, List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button, ThemeToggle } from "@/components/atoms";
import { PageWrapper } from "@/components/templates";

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
}

function TopNavigation({
  navItems,
  onSearch,
  onCart,
  loginHref = "/login",
  joinHref = "/join",
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
      {...props}
    >
      <PageWrapper>
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Main navigation"
        >
        {/* Left: Logo */}
        <Link
          href="/"
          className="shrink-0"
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
                className="text-xs xl:text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search - Hidden on mobile when menu is open */}
          <button
            type="button"
            onClick={onSearch}
            className="hidden sm:flex p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Search"
          >
            <MagnifyingGlass className="size-5" weight="regular" />
          </button>

          {/* Cart - Hidden on mobile when menu is open */}
          <button
            type="button"
            onClick={onCart}
            className="hidden sm:flex p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Shopping cart"
          >
            <Bag className="size-5" weight="regular" />
          </button>

          {/* Theme Toggle - Desktop only */}
          <ThemeToggle className="hidden sm:flex" iconSize={20} />

          {/* Log In Link - Desktop only */}
          <Link
            href={loginHref}
            className="hidden lg:block text-xs xl:text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors px-2"
          >
            Log In
          </Link>

          {/* Join Button */}
          <Button
            asChild
            className="bg-spiracle-burgundy hover:bg-spiracle-burgundy/90 text-spiracle-cream border-spiracle-burgundy px-4 sm:px-6"
          >
            <Link href={joinHref}>Join</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-muted-foreground transition-colors ml-1"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-6" weight="regular" />
            ) : (
              <List className="size-6" weight="regular" />
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
            {/* Mobile Nav Links */}
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  onSearch?.();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Search"
              >
                <MagnifyingGlass className="size-5" weight="regular" />
                <span>Search</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onCart?.();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Shopping cart"
              >
                <Bag className="size-5" weight="regular" />
                <span>Cart</span>
              </button>

              <ThemeToggle iconSize={20} />

              <Link
                href={loginHref}
                className="text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors ml-auto"
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
