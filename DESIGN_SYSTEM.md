# Spiracle Design System

This document outlines the design tokens and guidelines for the Spiracle audiobook platform.

## Brand Identity

### Brand Personality
- **Curious** - Exploring literary gems and hidden treasures
- **Distinct** - Standing apart from ordinary audiobook marketplaces
- **Uplifting** - Enriching lives through great stories
- **Joyful** - Celebrating the pleasure of literature
- **Relaxed** - Creating a haven for book lovers
- **Surprising** - Unearthing forgotten and overlooked works

### Brand DNA
Independent, Resolute, Curation, Club, Human, Timeless, Hidden Treasures, Haven, Journey

### Mission
To be a much-loved source of literary fiction and non-fiction audiobooks, selecting, publishing and selling great audiobooks that derive from overlooked, forgotten or yet-to-be-discovered literary gems.

---

## Color Tokens

Colors are derived from the Spiracle brand identity kit. The palette features warm, literary tones with green as the primary accent.

### Core Brand Colors

| Name | HEX | Usage |
|------|-----|-------|
| Cream | `#F9F7ED` | Primary background |
| Parchment | `#F4EEDC` | Card backgrounds, surfaces |
| Sand | `#E8E1CF` | Borders, muted backgrounds |
| Ink | `#000000` | Primary text |
| Forest | `#266D36` | Primary brand color, CTAs |
| Pine | `#2F5337` | Dark green accent |
| Blush | `#EBDEDB` | Soft highlight, secondary surfaces |
| Honey | `#F1E5A3` | Accent highlight |
| Terracotta | `#9F4300` | Warm accent |
| Burgundy | `#730000` | "Spiracle special" labels, emphasis |
| Sage | `#C0C9C2` | Muted accent |
| Slate | `#47507C` | Cool accent |
| Navy | `#333B51` | Dark accent |

### Semantic Colors (Light Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#F9F7ED` (Cream) | Page background |
| `--foreground` | `#000000` (Ink) | Default text |
| `--card` | `#F4EEDC` (Parchment) | Card backgrounds |
| `--card-foreground` | `#000000` (Ink) | Card text |
| `--primary` | `#266D36` (Forest) | Primary actions, links |
| `--primary-foreground` | `#F9F7ED` (Cream) | Text on primary |
| `--secondary` | `#E8E1CF` (Sand) | Secondary actions |
| `--secondary-foreground` | `#000000` (Ink) | Text on secondary |
| `--muted` | `#F4EEDC` (Parchment) | Muted backgrounds |
| `--muted-foreground` | `#47507C` (Slate) | Muted text |
| `--accent` | `#730000` (Burgundy) | Accent highlights, special labels |
| `--accent-foreground` | `#F9F7ED` (Cream) | Text on accent |
| `--destructive` | `#730000` (Burgundy) | Error/danger states |
| `--border` | `#E8E1CF` (Sand) | Borders |
| `--input` | `#E8E1CF` (Sand) | Input borders |
| `--ring` | `#266D36` (Forest) | Focus rings |

### Semantic Colors (Dark Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#1a1a18` | Page background |
| `--foreground` | `#F9F7ED` (Cream) | Default text |
| `--card` | `#2a2a26` | Card backgrounds |
| `--card-foreground` | `#F9F7ED` (Cream) | Card text |
| `--primary` | `#3d9e52` | Primary actions (lighter forest) |
| `--primary-foreground` | `#1a1a18` | Text on primary |
| `--secondary` | `#3a3a35` | Secondary actions |
| `--secondary-foreground` | `#F9F7ED` (Cream) | Text on secondary |
| `--accent` | `#9f4300` (Terracotta) | Accent highlights |
| `--accent-foreground` | `#F9F7ED` (Cream) | Text on accent |

### Chart Colors (Spiracle Palette)

| Token | Color | Purpose |
|-------|-------|---------|
| `--chart-1` | `#266D36` (Forest) | Primary data series |
| `--chart-2` | `#730000` (Burgundy) | Secondary data series |
| `--chart-3` | `#9F4300` (Terracotta) | Tertiary data series |
| `--chart-4` | `#47507C` (Slate) | Quaternary data series |
| `--chart-5` | `#F1E5A3` (Honey) | Quinary data series |

---

## Typography

Typography reflects Spiracle's literary heritage with a combination of elegant serif for display and clean sans-serif for UI.

### Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Jannon Display | Wordmark, hero headlines, large display text |
| `--font-serif` | Jannon | Book titles, author names, literary content |
| `--font-sans` | Nunito Sans | Body text, UI elements |
| `--font-mono` | Geist Mono | Code, technical content |

### Jannon Font Weights

| File | Weight | Style | Usage |
|------|--------|-------|-------|
| `JJannonDisplay-Light` | 300 | normal | Large headlines, hero text |
| `JJannonDisplay-LightItalic` | 300 | italic | Taglines, quotes |
| `JJannonDisplay-Regular` | 400 | normal | Display headings |
| `JJannonDisplay-Italic` | 400 | italic | Display emphasis |
| `JJannon-Book` | 350 | normal | Long-form reading |
| `JJannon-BookItalic` | 350 | italic | Book title styling |
| `JJannon-Regular` | 400 | normal | Author names, section headings |
| `JJannon-Italic` | 400 | italic | Book titles, emphasis |

### Typography Notes
- **Jannon** (historically misclassified as Garamond) is the brand typeface - a timeless, literary font with clear association to book typesetting
- **Jannon Display** is used for the wordmark and large headlines
- **Jannon** (text weight) is used for book titles and author names
- UI elements use Nunito Sans for clarity
- Book titles displayed in serif italic
- Labels use letter-spaced uppercase sans-serif

### Font Sizes

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| `xs` | 0.75rem (12px) | 1rem | Small labels, captions |
| `sm` | 0.875rem (14px) | 1.25rem | Secondary text, metadata |
| `base` | 1rem (16px) | 1.5rem | Body text |
| `lg` | 1.125rem (18px) | 1.75rem | Lead paragraphs |
| `xl` | 1.25rem (20px) | 1.75rem | Section headings |
| `2xl` | 1.5rem (24px) | 2rem | Page headings |
| `3xl` | 1.875rem (30px) | 2.25rem | Hero subheadings |
| `4xl` | 2.25rem (36px) | 2.5rem | Hero text |
| `5xl` | 3rem (48px) | 1 | Display headlines |

### Font Weights

| Name | Weight | Usage |
|------|--------|-------|
| `normal` | 400 | Body text |
| `medium` | 500 | Emphasis, UI labels |
| `semibold` | 600 | Subheadings |
| `bold` | 700 | Headings |

---

## Spacing

Based on a 4px base unit for consistent rhythm.

| Token | Value | Usage |
|-------|-------|-------|
| `0` | 0px | None |
| `1` | 0.25rem (4px) | Tight spacing |
| `2` | 0.5rem (8px) | Small spacing |
| `3` | 0.75rem (12px) | Medium-small spacing |
| `4` | 1rem (16px) | Default spacing |
| `5` | 1.25rem (20px) | Medium spacing |
| `6` | 1.5rem (24px) | Medium-large spacing |
| `8` | 2rem (32px) | Large spacing |
| `10` | 2.5rem (40px) | Extra large spacing |
| `12` | 3rem (48px) | Section spacing |
| `16` | 4rem (64px) | Major section spacing |

---

## Border Radius

Spiracle uses softer, rounded corners that feel approachable and literary.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.5rem` (8px) | Base radius |
| `--radius-sm` | `0.25rem` (4px) | Small elements (badges, chips) |
| `--radius-md` | `0.375rem` (6px) | Medium elements (inputs) |
| `--radius-lg` | `0.5rem` (8px) | Default (buttons, cards) |
| `--radius-xl` | `0.75rem` (12px) | Large elements |
| `--radius-2xl` | `1rem` (16px) | Extra large elements |
| `--radius-full` | `9999px` | Pills, circular buttons |

---

## Shadows

Subtle shadows that maintain the warm, paper-like aesthetic.

| Name | Value | Usage |
|------|-------|-------|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `DEFAULT` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Cards, buttons |
| `md` | `0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)` | Dropdowns, popovers |
| `lg` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Modals, dialogs |
| `xl` | `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)` | High emphasis |

---

## Component Guidelines

### Buttons
- Primary buttons use Forest green (`#266D36`)
- "Spiracle special" badges use Burgundy (`#730000`)
- Ghost buttons with Forest green text
- Rounded corners (pill-shaped for tags)

### Cards
- Parchment background (`#F4EEDC`)
- Subtle border in Sand (`#E8E1CF`)
- Rounded corners
- Warm, paper-like feel

### Tags/Badges
- Outlined style with rounded-full borders
- Categories use subtle borders
- "Spiracle specials" use Burgundy accent
- "podcasts" and "events" use filled dark style

### Typography Hierarchy
- Book titles: Serif, larger size
- Author names: Serif, regular weight
- UI labels: Sans-serif, letter-spaced uppercase
- Body text: Sans-serif, comfortable reading size

---

## Usage in Code

### Tailwind Classes

```tsx
// Brand colors
<div className="bg-background text-foreground" />
<button className="bg-primary text-primary-foreground" />
<span className="text-accent">Spiracle special</span>

// Typography
<h1 className="font-serif text-4xl">Book Title</h1>
<p className="font-sans text-base">Body text</p>
<span className="text-xs uppercase tracking-wider">Label</span>

// Cards
<div className="bg-card border border-border rounded-lg" />
```

### CSS Variables

```css
.custom-element {
  background: var(--background);
  color: var(--foreground);
  border-color: var(--border);
  border-radius: var(--radius);
}

.spiracle-special {
  color: var(--accent);
}
```
