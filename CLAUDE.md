# Spiracle Style Library

A component library for **Spiracle** - the literary audiobook platform - built with **shadcn/ui** and **Next.js**, following **atomic design principles**.

## Brand Identity

Spiracle is an independent audiobook service offering curated literary fiction and non-fiction. The brand personality is: **Curious, Distinct, Uplifting, Joyful, Relaxed, Surprising**.

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **UI Components**: shadcn/ui (radix-maia style)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Icons**: Phosphor Icons
- **Language**: TypeScript

## Project Structure

```
├── app/                  # Next.js app router pages
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── atoms/            # Basic building blocks
│   ├── molecules/        # Simple component groups
│   ├── organisms/        # Complex UI sections
│   ├── templates/        # Page-level layouts
│   ├── ui/               # shadcn/ui base components
│   └── index.ts          # Barrel exports
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── public/               # Static assets
```

## Atomic Design Structure

Components are organized following atomic design methodology:

| Level | Folder | Description | Examples |
|-------|--------|-------------|----------|
| **Atoms** | `components/atoms/` | Basic building blocks | Button, Input, Label, Badge, Icon |
| **Molecules** | `components/molecules/` | Simple component groups | FormField, SearchBar, NavItem, Card |
| **Organisms** | `components/organisms/` | Complex UI sections | Header, Sidebar, DataTable, Form |
| **Templates** | `components/templates/` | Page-level layouts | DashboardLayout, AuthLayout |
| **Pages** | `app/` | Route-specific pages | Next.js App Router pages |

The `components/ui/` folder contains shadcn/ui base components which can be used directly or wrapped in atomic components.

## Configuration

- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration with path aliases (`@/`)
- `postcss.config.mjs` - PostCSS configuration

## Adding Components

```bash
pnpm dlx shadcn@latest add <component-name>
```

## Design Tokens

Design tokens are defined as CSS variables in `app/globals.css`. See `DESIGN_SYSTEM.md` for full documentation.

---

## Component Coding Standards

**Before creating any new component, confirm it follows these standards. After creating a component, review it against this checklist.**

### 1. Semantic HTML
- Use semantic elements (`<article>`, `<figure>`, `<header>`, `<footer>`, `<section>`, `<nav>`) — not div soup
- Choose elements based on meaning, not appearance
- Example: Use `<article>` for self-contained content like cards

### 2. Accessibility
- Include descriptive `alt` text for all images
- Add `aria-label` for interactive elements and icons with meaning
- Use `aria-hidden="true"` on decorative elements
- Maintain proper heading hierarchy (`h1` → `h2` → `h3`)
- Ensure sufficient color contrast using design tokens

### 3. Responsive Design
- Use mobile-first breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Apply responsive spacing: `p-3 sm:p-4`, `gap-1.5 sm:gap-2`
- Apply responsive typography: `text-sm sm:text-base`
- Use responsive image `sizes` attribute for Next.js Image

### 4. Self-Contained Components
- Define typed props with TypeScript interfaces
- Extend `React.HTMLAttributes` for flexibility
- Accept `className` prop and merge with `cn()` utility
- Spread `...props` to allow custom attributes
- Never use fixed widths — let parent control sizing

### 5. Design Tokens
- Use Spiracle tokens, not arbitrary values
- Colors: `bg-card`, `text-muted-foreground`, `border-border`
- Typography: `font-serif`, `font-display`, `font-sans`
- Spacing: Tailwind scale (`p-4`, `gap-2`, `mt-2`)
- Never hardcode hex colors or pixel values

### 6. Atomic Design Principles
- **Atoms**: Single-purpose, no dependencies on other components
- **Molecules**: Combine atoms, single responsibility
- **Organisms**: Combine molecules, may have state
- Place components in the correct folder based on complexity

### Component Review Checklist

```
□ Uses semantic HTML elements (not just divs)
□ Has proper alt text and aria-labels
□ Responsive with mobile-first breakpoints
□ Props are typed with TypeScript interface
□ Accepts className and spreads ...props
□ Uses design tokens (no arbitrary values)
□ Placed in correct atomic design folder
□ Exported from barrel file (index.ts)
```
