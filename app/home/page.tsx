"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, logout } from "@/lib/auth";
import { Menu, X, LogOut, Book, Palette, LayoutDashboard, Star, Library, LayoutGrid, Home, User, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Marketing Components",
    href: "/preview/home",
    description: "New homepage & layout components",
    icon: Home,
  },
  {
    label: "Title Detail Page",
    href: "/preview/title-detail",
    description: "Full book detail page template",
    icon: Book,
  },
  {
    label: "Component Library",
    href: "/preview",
    description: "All components showcase",
    icon: Palette,
  },
  {
    label: "Book Details Hero",
    href: "/preview/book-details",
    description: "Book details hero section",
    icon: LayoutDashboard,
  },
  {
    label: "Showcase",
    href: "/preview/showcase",
    description: "BentoHero & CollectionShowcase",
    icon: Star,
  },
  {
    label: "Books Grid",
    href: "/preview/books",
    description: "BookCard grid layout",
    icon: Library,
  },
  {
    label: "Collections",
    href: "/preview/collections",
    description: "CollectionCard examples",
    icon: LayoutGrid,
  },
  {
    label: "My Spiracle",
    href: "/explorations/my-spiracle",
    description: "Profile page exploration",
    icon: User,
  },
  {
    label: "My Spiracle Style Guide",
    href: "/style-guide/my-spiracle",
    description: "Profile components documentation",
    icon: FileText,
  },
];

export default function HomePage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 text-foreground hover:bg-spiracle-sand/50 rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1} />
          </button>

          {/* Logo */}
          <h1 className="font-display text-xl tracking-tight text-foreground">
            Spiracle
          </h1>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-spiracle-sand/50 rounded-md transition-colors"
            aria-label="Logout"
          >
            <LogOut size={20} strokeWidth={1} />
          </button>
        </div>
      </header>

      {/* Slide-out Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <nav
          className={cn(
            "absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background shadow-xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-border">
            <span className="font-display text-lg text-foreground">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-spiracle-sand/50 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-start gap-3 px-4 py-3 hover:bg-spiracle-sand/50 transition-colors"
              >
                <item.icon size={20} strokeWidth={1} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut size={16} strokeWidth={1} />
              Sign out
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Welcome */}
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Welcome to the Style Library
          </h2>
          <p className="text-muted-foreground mb-12">
            Explore Spiracle&apos;s component library built with shadcn/ui and atomic design principles.
          </p>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors"
              >
                <item.icon size={24} strokeWidth={1} className="text-muted-foreground mb-3 group-hover:text-foreground transition-colors" />
                <div className="font-medium text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-xs text-muted-foreground/50 bg-background">
        Spiracle Style Library
      </footer>
    </div>
  );
}
