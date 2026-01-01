# Spiracle Style Library

A component library for **Spiracle** - the literary audiobook platform - built with **shadcn/ui** and **Next.js**, following **atomic design principles**.

## Brand Identity

Spiracle is an independent audiobook service offering curated literary fiction and non-fiction. The brand personality is: **Curious, Distinct, Uplifting, Joyful, Relaxed, Surprising**.

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **UI Components**: shadcn/ui (radix-maia style)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Icons**: Lucide React (lucide-react)
  - Import: `import { IconName } from "lucide-react"`
  - Docs: https://lucide.dev/icons/
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

## Typography

Typography is critical for readability and accessibility. We use two font families with strict usage rules.

### Font Families

| Font | Tailwind Class | CSS Variable |
|------|----------------|--------------|
| **Jannon** (serif) | `font-serif`, `font-display` | `--font-serif`, `--font-display` |
| **Nunito Sans** (sans-serif) | `font-sans` | `--font-sans` |

### Usage Rules

**Jannon (serif) — `font-serif` / `font-display`:**
- Headlines and titles (h1, h2, h3)
- Book titles
- Section labels
- Pull quotes and blockquotes
- Display text and decorative emphasis
- Editorial/magazine-style accent text

**Nunito Sans (sans-serif) — `font-sans`:**
- Body copy and paragraphs
- Descriptions and excerpts
- UI text (buttons, labels, navigation, tabs)
- Form inputs and placeholders
- Card descriptions
- Lists and feature items
- FAQ answers
- Any text meant to be READ IN QUANTITY

### Why This Matters

- Sans-serif is more readable for body text, especially on screens
- Serif body text is harder for users with dyslexia or reading difficulties
- This is an **accessibility consideration**, not just aesthetic preference
- The rule: if someone needs to READ it (not just glance at it), use sans-serif

### Quick Reference

```tsx
// ✅ CORRECT: Serif for headline, sans for body
<h2 className="font-display text-3xl">Featured Collection</h2>
<p className="text-muted-foreground">Browse our curated selection of literary fiction...</p>

// ✅ CORRECT: Pull quote uses serif (editorial)
<blockquote className="font-serif text-xl italic">
  "A masterpiece of modern literature."
</blockquote>

// ❌ WRONG: Don't use serif for descriptions
<p className="font-serif text-muted-foreground">This is a description...</p>

// ❌ WRONG: Don't use serif for UI elements
<input className="font-serif" placeholder="Enter email" />
```

### Common Mistakes to Avoid

1. Using `font-serif` on card descriptions or excerpts
2. Using `font-serif` on feature benefit descriptions
3. Using `font-serif` on FAQ answers or body paragraphs
4. Using `font-serif` on form inputs or placeholders
5. Italic serif for body text (italic is fine for quotes/titles only)

---

## Layout System

The project uses a two-layer layout system for consistent page structure.

### Layout Widths

| Layer | Max Width | Tailwind Class | Purpose |
|-------|-----------|----------------|---------|
| **Outer** | 1440px | `max-w-[1440px]` | Page container, constrains entire layout |
| **Inner** | 1280px | `max-w-7xl` | Content area with horizontal padding |
| **Narrow** | 1024-1152px | `max-w-5xl`, `max-w-6xl` | Text-heavy content for readability |

### PageWrapper Component

Use `PageWrapper` from `@/components/templates` for consistent layout:

```tsx
import { PageWrapper } from "@/components/templates";

// Standard content section
<PageWrapper>
  <MyContent />
</PageWrapper>

// Full-bleed hero (removes inner constraint)
<PageWrapper fullBleed>
  <HeroWithBackground />
</PageWrapper>

// Narrower text content
<PageWrapper innerMaxWidth="max-w-5xl">
  <ArticleContent />
</PageWrapper>
```

**Props:**
- `fullBleed` - Removes inner 1280px constraint for hero sections
- `innerMaxWidth` - Override inner width: `"max-w-5xl"` | `"max-w-6xl"` | `"max-w-7xl"`
- `noPadding` - Remove horizontal padding when children handle their own

### Carousels (ScrollCarousel)

Horizontal scrolling content uses `ScrollCarousel` from `@/components/molecules`:

```tsx
import { ScrollCarousel } from "@/components/molecules";

<ScrollCarousel>
  <div className="flex gap-4">
    {items.map(item => <Card key={item.id} />)}
  </div>
</ScrollCarousel>
```

**Behavior:**
- Content starts at the 1280px content edge
- Items scroll horizontally beyond the edge into padding
- Subtle fade on right edge hints at more content
- Fade disappears when scrolled to end

**Props:**
- `showFade` - Show/hide right fade (default: true)
- `fadeWidth` - Fade gradient width: `"w-8"` | `"w-12"` | `"w-16"` | `"w-24"`

### Layout Guidelines

1. **Standard sections**: Use `<PageWrapper>` for consistent 1440px/1280px structure
2. **Full-bleed heroes**: Use `<PageWrapper fullBleed>` for backgrounds that span full width
3. **Text content**: Use `innerMaxWidth="max-w-5xl"` or `"max-w-6xl"` for better readability
4. **Carousels**: Wrap in `<ScrollCarousel>` within a `<PageWrapper>`
5. **Organisms**: Should NOT include their own max-width constraints; let `PageWrapper` handle it

---

## Section Components

Page sections follow a consistent naming pattern: `{Layout}Section`

### Available Sections

| Component | Purpose | Content Examples |
|-----------|---------|------------------|
| `GridSection` | Grid layout with label heading | CollectionCards, any grid content |
| `CarouselSection` | Horizontal scroll with label | BookCards, ReviewCards |
| `QuoteSection` | Multi-column quotes/reviews | CriticCards with publication logos |

### Shared Props

All section components share these props:

```tsx
interface SectionProps {
  label: string;           // Section heading (displayed in spaced caps)
  labelHref?: string;      // Optional link on the label
  background?: "cream" | "dark" | "white";  // Background color variant
  children: ReactNode;     // Section content
  className?: string;      // Additional styling
}
```

### Background Variants

**IMPORTANT: White (#fff/#ffffff) is NOT a Spiracle brand color. Never use bg-white anywhere.**

| Variant | Color | Use Case |
|---------|-------|----------|
| `cream` | `bg-spiracle-cream` (#F9F7ED) | Default, most sections |
| `parchment` | `bg-spiracle-parchment` (#F4EEDC) | Alternate light sections, cards |
| `dark` | `bg-[#2D2520]` | CollectionCards grid, contrast sections |
| `blush` | `bg-[#EBDEDB]` | Warm accent sections |
| `sage` | `bg-[#C0C9C2]` | Soft green accent sections |
| `honey` | `bg-[#f6eecd]` | Warm yellow accent sections |

### Usage Examples

```tsx
// Grid of CollectionCards on dark background
<GridSection
  label="FOUND IN THE FOLLOWING COLLECTIONS"
  background="dark"
  columns={3}
>
  {collections.map(c => <CollectionCard key={c.id} {...c} />)}
</GridSection>

// Carousel of BookCards
<CarouselSection label="MORE BY AUTHOR NAME">
  {books.map(b => <BookCard key={b.id} {...b} />)}
</CarouselSection>

// Critic reviews with logos
<QuoteSection label="WHAT THE CRITICS ARE SAYING">
  {reviews.map(r => <CriticCard key={r.id} {...r} />)}
</QuoteSection>
```

### Vertical Rhythm

Sections use consistent vertical spacing:
- Section padding: `py-12 sm:py-16` (48px / 64px)
- Between sections: No gap needed (padding handles it)
- Label margin-bottom: `mb-6 sm:mb-8` (24px / 32px)

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
- **Text alignment**: Body text, descriptions, and paragraphs must ALWAYS be left-aligned (`text-left`). Only headings and titles may be centered. Center-aligned body text is difficult to read and fails accessibility standards.

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

---

## Animation & Interaction Guidelines

The aesthetic is **"premium publishing house"** — not "tech startup." All interactions should feel refined, literary, and sophisticated.

### Core Principles

1. **Subtle and sophisticated** — No bounce effects, no cartoon-like animations, no playful overshoots
2. **Immediate but not distracting** — Feedback should acknowledge user action without drawing attention away from content
3. **Never delay or block** — Animations must not prevent interaction or make the user wait
4. **Respect user preferences** — All animations must honor `prefers-reduced-motion: reduce`

### Timing Guidelines

| Use Case | Duration | Easing |
|----------|----------|--------|
| Hover states | 200-300ms | `ease-out` |
| Press/click feedback | 150ms | `ease-out` |
| Entrance animations | 300-400ms | `ease-out` |
| Color transitions | 200ms | `ease-out` |

### Hover States

- **Cards**: Subtle lift (`-translate-y-0.5`) with soft shadow (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`)
- **Images**: Very slight scale (`scale-[1.02]` maximum)
- **Links**: Underline animation or color change, not both
- **Buttons**: Color/background change only (press state handles scale)

### Interactive Feedback

- **Button press**: Subtle scale down (`scale-[0.98]`)
- **Icon clicks**: Brief scale pulse (`scale-[1.1]` to `scale-[1]`)
- **Form inputs**: Focus ring animation (built into shadcn/ui)

### Entrance Animations

Use the `stagger-children` utility class on grid/list containers for elegant card entrances:

```tsx
<div className="grid grid-cols-3 stagger-children">
  {items.map(item => <Card key={item.id} />)}
</div>
```

- Cards fade in with 50ms stagger between each
- Animation is `fade-in-up` (8px translate + opacity)
- Total sequence completes in ~500ms for 6 items

### Available Utility Classes

| Class | Effect |
|-------|--------|
| `stagger-children` | Staggered fade-in-up for child elements |
| `scroll-reveal` | Single element fade-in-up |
| `color-transition` | Smooth color changes |
| `link-underline` | Animated underline on hover |
| `illustration-adaptive` | Inverts line art illustrations for dark mode (black lines → soft white) |

### Accessibility

All animations automatically disable when `prefers-reduced-motion: reduce` is set:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations become instant, transforms are removed */
}
```

### What NOT to Do

- No bounce or spring physics
- No delays before animations start
- No animations longer than 400ms
- No scale transforms larger than 1.02 on hover
- No rotating/spinning elements (except intentional icon feedback)
- No parallax or scroll-jacking effects

---

## Multi-Platform Excellence

We design for BOTH mobile AND desktop — optimised for each context. Neither is compromised for the other.

**Core principle: Progressive Enhancement**
- Base functionality works on touch/mobile
- Desktop gets ADDITIONAL delight, not the same experience
- Both feel native to their platform

**Touch (Mobile/Tablet):**
- Minimum touch targets: 44px × 44px
- Generous tap spacing
- All core functionality works without hover
- Swipe gestures for carousels
- Bottom-of-screen placement for key actions (thumb-friendly)

**Pointer (Desktop):**
- Rich hover states — these are a REWARD for desktop users, not removed
- Micro-interactions on hover (subtle lifts, colour shifts, reveals)
- Cursor changes to indicate interactivity
- Hover previews where useful
- More information density is acceptable

**How to implement both:**
```css
/* Base: works everywhere (touch) */
.card {
  /* tap-friendly, no hover dependency */
}

/* Enhancement: desktop delight */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    /* micro-interactions, hover states */
    /* this only applies to mouse/trackpad users */
  }
}
```

**Design pattern:**
- Mobile: clean, functional, clear affordances
- Desktop: same foundation + hover delight, richer interactions, subtle animations

**Examples:**
| Element | Mobile | Desktop Enhancement |
|---------|--------|---------------------|
| BookCard | Tap to view | Hover: subtle lift, shadow, quick-info reveal |
| Carousel | Swipe | Hover: show navigation arrows |
| Buttons | Tap state | Hover: colour shift, subtle animation |
| Navigation | Hamburger menu | Full nav bar with hover dropdowns |
| Tags | Visible always | Hover: tooltip with more info? |

**The goal:**
- Mobile users think "this works perfectly on my phone"
- Desktop users think "these little details are delightful"
- Neither thinks "this was designed for the other platform"

Do NOT remove desktop hover interactions. They are part of our "moments of delight" principle. Use `@media (hover: hover)` to add them as enhancements.
