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
