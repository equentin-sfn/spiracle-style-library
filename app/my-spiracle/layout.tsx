"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/atoms";
import {
  User,
  Settings,
  CreditCard,
  Receipt,
  MapPin,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/my-spiracle/edit-profile", label: "Edit Profile", icon: User },
  { href: "/my-spiracle/account", label: "Account", icon: Settings },
  { href: "/my-spiracle/billing", label: "Billing", icon: CreditCard },
  { href: "/my-spiracle/purchases", label: "Purchases", icon: Receipt },
  { href: "/my-spiracle/addresses", label: "Addresses", icon: MapPin },
];

export default function MySpiraclLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-spiracle-cream dark:bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-spiracle-cream/95 dark:bg-background/95 backdrop-blur border-b border-spiracle-sand dark:border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Back to profile */}
            <Link
              href="/explorations/my-spiracle"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span className="hidden sm:inline">Back to profile</span>
            </Link>

            {/* Title - mobile */}
            <h1 className="font-display text-lg text-foreground sm:hidden">
              Settings
            </h1>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex items-center gap-1 -mb-px">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors",
                    isActive
                      ? "border-spiracle-terracotta text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-spiracle-sand"
                  )}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile navigation dropdown */}
        {mobileMenuOpen && (
          <nav className="sm:hidden border-t border-spiracle-sand dark:border-border bg-spiracle-cream dark:bg-background">
            <div className="max-w-4xl mx-auto px-4 py-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 text-sm rounded-lg transition-colors",
                      isActive
                        ? "bg-spiracle-parchment dark:bg-card text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-spiracle-parchment/50"
                    )}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-spiracle-sand dark:border-border mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <Link
              href="/help"
              className="hover:text-foreground transition-colors"
            >
              Help & Support
            </Link>
            <span>Spiracle</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
