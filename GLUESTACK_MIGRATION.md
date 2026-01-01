# Gluestack Migration Audit

This document analyzes our current component library for compatibility with Gluestack (React Native + Web cross-platform).

---

## 1. Component Mapping Audit

### UI Components (components/ui/)

| Current Component | Gluestack Equivalent | Status | Migration Notes |
|-------------------|---------------------|--------|-----------------|
| `button.tsx` | `Button` | ✅ Direct | Needs compound structure (`ButtonText`, `ButtonIcon`) |
| `badge.tsx` | `Badge` | ✅ Direct | Similar API |
| `card.tsx` | `Box` + custom | ⚠️ Custom | Build with `Box`, `VStack`, `Heading`, `Text` |
| `input.tsx` | `Input` | ✅ Direct | Similar API |
| `textarea.tsx` | `Textarea` | ✅ Direct | Similar API |
| `label.tsx` | `FormControl.Label` | ✅ Direct | Part of FormControl |
| `separator.tsx` | `Divider` | ✅ Direct | Rename only |
| `alert-dialog.tsx` | `AlertDialog` | ✅ Direct | Similar compound structure |
| `input-group.tsx` | `Input` + slots | ⚠️ Partial | Gluestack Input has slots |
| `field.tsx` | `FormControl` | ✅ Direct | Similar API |
| `select.tsx` | `Select` (custom) | ⚠️ Custom | Gluestack uses ActionSheet for mobile |
| `dropdown-menu.tsx` | `Menu` / `Popover` | ⚠️ Partial | Different pattern on mobile |
| `combobox.tsx` | ❌ None | 🔴 Custom | Build from scratch |

### Atoms (components/atoms/)

| Current Component | Gluestack Equivalent | Status | Migration Notes |
|-------------------|---------------------|--------|-----------------|
| `tag.tsx` | `Badge` | ✅ Direct | Map variants |
| `theme-toggle.tsx` | `Switch` + custom | ⚠️ Custom | Icon switching needs custom logic |
| `wave-decoration.tsx` | `Box` + SVG | ⚠️ Custom | SVG works in RN via react-native-svg |

### Molecules (components/molecules/)

| Current Component | Gluestack Equivalent | Status | Migration Notes |
|-------------------|---------------------|--------|-----------------|
| `book-card.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Compose from primitives |
| `book-cover-actions.tsx` | `HStack` + `Button` | ⚠️ Custom | Compose from primitives |
| `book-details.tsx` | `VStack` + `Text` + `Link` | ⚠️ Custom | Compose from primitives |
| `collection-card.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Compose from primitives |
| `critic-card.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Image filters problematic |
| `review-card.tsx` | `Box` + `Avatar` + `Text` | ⚠️ Custom | Avatar available |
| `pricing-card.tsx` | `Box` + `Text` + `Button` | ⚠️ Custom | Compose from primitives |
| `faq-accordion.tsx` | `Accordion` | ✅ Direct | Good match |
| `newsletter-signup.tsx` | `FormControl` + `Input` + `Button` | ⚠️ Custom | Compose from primitives |
| `announcement-bar.tsx` | `Box` + `Text` + `Link` | ⚠️ Custom | Simple composition |
| `podcast-card.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Compose from primitives |
| `essay-card.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Gradient overlay problematic |
| `interview-card.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Compose from primitives |
| `pull-quote.tsx` | `Box` + `Text` | ⚠️ Custom | Simple composition |
| `author-bio.tsx` | `Box` + `Avatar` + `Text` | ⚠️ Custom | Avatar available |
| `info-bar.tsx` | `ScrollView` + `HStack` | ⚠️ Custom | ScrollView available |
| `scroll-carousel.tsx` | `ScrollView` | ✅ Direct | Fade effects problematic |
| `serendipity-pills.tsx` | `HStack` + `Pressable` | ⚠️ Custom | Rotation transforms work |
| `plan-toggle.tsx` | `Switch` / `Radio` | ⚠️ Custom | Custom toggle UI |
| `purchase-panel.tsx` | `Box` + `Button` + `Text` | ⚠️ Custom | Compose from primitives |
| `preview-bar.tsx` | ❌ Web only | 🔴 Skip | Dev tool, not needed in RN |
| `adaptive-illustration.tsx` | `Image` + theme | ⚠️ Custom | Dark mode image swap |

### Organisms (components/organisms/)

| Current Component | Gluestack Equivalent | Status | Migration Notes |
|-------------------|---------------------|--------|-----------------|
| `top-navigation.tsx` | Custom | ⚠️ Custom | Mobile: Drawer, Web: HStack |
| `footer.tsx` | `VStack` + `HStack` + `Link` | ⚠️ Custom | Compose from primitives |
| `bento-hero.tsx` | `Grid` + `Box` | ⚠️ Custom | Grid available |
| `collection-showcase.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Compose from primitives |
| `collection-spotlight.tsx` | `Box` + `Image` | ⚠️ Custom | Gradient overlay problematic |
| `critics-section.tsx` | `Grid` + custom cards | ⚠️ Custom | Grid available |
| `faq-section.tsx` | `Accordion` | ✅ Direct | Good match |
| `feature-section.tsx` | `Grid` + `Box` + `Icon` | ⚠️ Custom | Blur effects problematic |
| `getting-started-steps.tsx` | `VStack` + `Box` + `Text` | ⚠️ Custom | Gradient lines problematic |
| `pricing-grid.tsx` | `Grid` + custom cards | ⚠️ Custom | Grid available |
| `membership-hero.tsx` | `Box` + `Text` + `Button` | ⚠️ Custom | Gradient backgrounds problematic |
| `book-details-hero.tsx` | `Grid` + custom | ⚠️ Custom | Compose from primitives |
| `author-hero.tsx` | `Box` + `Avatar` + `Text` | ⚠️ Custom | Avatar available |
| `featured-title.tsx` | `Box` + `Image` + `Text` | ⚠️ Custom | Blur glow problematic |
| `app-promo.tsx` | `Box` + `Image` + `Link` | ⚠️ Custom | App store badges |
| `gift-section.tsx` | `Box` + `Image` + `Button` | ⚠️ Custom | Radial gradient problematic |
| `discovery-machine.tsx` | `Box` + `Input` + `Button` | ⚠️ Custom | Complex gradients problematic |
| `grid-section.tsx` | `Grid` | ✅ Direct | Grid available |
| `carousel-section.tsx` | `ScrollView` | ⚠️ Custom | Fade effects problematic |
| `quote-section.tsx` | `Grid` + custom | ⚠️ Custom | Grid available |

---

## 2. Pattern Compatibility Issues

### 🔴 INCOMPATIBLE - Must Avoid/Replace

#### CSS Filters (No React Native Support)
```
backdrop-blur     → No equivalent (use solid backgrounds)
backdrop-filter   → No equivalent
mix-blend-mode    → No equivalent
brightness()      → Use Image tintColor or opacity
grayscale()       → Use desaturated image assets
invert()          → Use theme-specific assets
blur()            → No equivalent on views
```

**Files affected:**
- `components/ui/alert-dialog.tsx` - backdrop-blur
- `components/molecules/scroll-carousel.tsx` - backdrop-blur on arrows
- `components/molecules/critic-card.tsx` - invert for dark mode logos
- `components/organisms/footer.tsx` - invert for dark mode logo
- `components/organisms/top-navigation.tsx` - invert for dark mode logo
- `components/organisms/featured-title.tsx` - blur glow effect

#### CSS Gradients (Limited Support)
```
linear-gradient   → Use react-native-linear-gradient package
radial-gradient   → Very limited, avoid
conic-gradient    → No support
```

**Files affected:**
- `components/organisms/membership-hero.tsx` - radial gradients
- `components/organisms/gift-section.tsx` - radial gradients
- `components/organisms/discovery-machine.tsx` - multiple gradients
- `components/organisms/collection-spotlight.tsx` - linear gradient overlay
- `components/molecules/essay-card.tsx` - gradient overlay
- `components/molecules/scroll-carousel.tsx` - fade gradients

#### Pseudo-elements (No Support)
```
::before          → Use separate View components
::after           → Use separate View components
```

**Files affected:**
- `app/globals.css` - extensive use of ::before/::after
- Multiple decorative elements throughout

#### Web-specific Animations
```
@keyframes        → Use Reanimated or Animated API
animate-in/out    → Replace with Reanimated
stagger-children  → Custom implementation needed
```

**Files affected:**
- `components/ui/alert-dialog.tsx`
- `components/ui/dropdown-menu.tsx`
- `components/ui/select.tsx`
- `components/organisms/critics-section.tsx`
- `components/organisms/discovery-machine.tsx`
- Multiple components using `stagger-children`

### ⚠️ PARTIAL SUPPORT - Needs Adaptation

#### Hover States
```css
/* Web CSS */
:hover { ... }

/* Gluestack equivalent */
data-[hover=true]:...
```
Gluestack handles this automatically with data attributes, but mobile has no hover - design for touch-first.

#### Complex Shadows
```
box-shadow with multiple values → Use elevation or simplified shadow
```

#### Custom Fonts
TTF fonts work in React Native but require different loading mechanism (expo-font or react-native-fonts).

---

## 3. Design Token Compatibility

### Current Token Structure (CSS Variables)
```css
:root {
  --background: #F9F7ED;
  --foreground: #1a1a18;
  --card: #F4EEDC;
  --primary: #2D2520;
  /* ... */
}
```

### Gluestack Token Structure
Gluestack uses a similar CSS variable approach with Tailwind, which is good news:

```js
// gluestack.config.js
tokens: {
  colors: {
    background: '#F9F7ED',
    foreground: '#1a1a18',
    // ...
  }
}
```

### Token Migration Path
1. **Colors** - Direct mapping possible
2. **Typography** - Map font-family, sizes, weights
3. **Spacing** - Tailwind scale works in both
4. **Shadows** - Simplify to elevation-based system
5. **Border Radius** - Direct mapping

### Required Changes
```js
// Create gluestack.config.ts
export const config = createConfig({
  tokens: {
    colors: {
      // Spiracle brand colors
      'spiracle-cream': '#F9F7ED',
      'spiracle-parchment': '#F4EEDC',
      'spiracle-terracotta': '#C4846C',
      'spiracle-forest': '#2D4A3E',
      'spiracle-burgundy': '#722F37',
      'spiracle-honey': '#D4A84B',
      'spiracle-sand': '#E5DCC8',
      'spiracle-blush': '#E8D5D0',
      // Semantic colors
      background: '#F9F7ED',
      foreground: '#1a1a18',
      card: '#F4EEDC',
      // ... rest of tokens
    },
    fonts: {
      serif: 'Jannon',
      display: 'Jannon Display',
      sans: 'Nunito Sans',
    },
  },
});
```

---

## 4. Development Guidance

### ✅ SAFE TO CONTINUE DEVELOPING

These patterns translate well to React Native:

| Pattern | Notes |
|---------|-------|
| **Flexbox layouts** | `flex`, `flex-row`, `flex-col`, `justify-*`, `items-*` |
| **Basic spacing** | `p-*`, `m-*`, `gap-*` |
| **Border radius** | `rounded-*` |
| **Basic colors** | Solid colors, opacity |
| **Typography** | Font sizes, weights, line heights |
| **Images** | With Next/Image → RN Image |
| **Icons (Lucide)** | Works with react-native-lucide |
| **Basic transforms** | `rotate`, `scale`, `translate` |
| **Opacity** | Direct support |
| **Border** | `border-*` |
| **Aspect ratio** | `aspect-*` |

### ✅ SAFE Components (Minimal Changes Needed)

1. **book-card.tsx** - Basic box + image + text
2. **review-card.tsx** - Avatar + text layout
3. **pricing-card.tsx** - Box + text + button
4. **faq-accordion.tsx** - Direct Gluestack Accordion
5. **newsletter-signup.tsx** - Form primitives
6. **announcement-bar.tsx** - Simple box + text
7. **pull-quote.tsx** - Text styling only
8. **author-bio.tsx** - Avatar + text layout
9. **tag.tsx** - Maps to Badge
10. **grid-section.tsx** - Uses Grid primitive

### 🔴 AVOID OR SIMPLIFY

Do not invest more time in these patterns:

| Pattern | Alternative |
|---------|-------------|
| `backdrop-blur` | Solid semi-transparent backgrounds |
| `mix-blend-mode` | Remove or use static assets |
| `radial-gradient` | Solid colors or images |
| `::before/::after` | Separate View components |
| `invert()` for dark mode | Provide dark mode asset variants |
| Complex `box-shadow` | Single shadow or elevation |
| `stagger-children` CSS | Reanimated stagger |
| Web-only animations | Reanimated equivalents |

### Components Needing Significant Rework

1. **discovery-machine.tsx** - Heavy gradient/decoration use
2. **membership-hero.tsx** - Radial gradients
3. **featured-title.tsx** - Blur glow effects
4. **collection-spotlight.tsx** - Gradient overlays
5. **scroll-carousel.tsx** - Fade gradients, backdrop-blur
6. **critic-card.tsx** - Image invert for dark mode
7. **essay-card.tsx** - Gradient overlay on image

---

## 5. Migration Checklist

### Phase 1: Token Setup
- [ ] Create `gluestack.config.ts` with Spiracle tokens
- [ ] Map all CSS variables to Gluestack tokens
- [ ] Set up custom fonts for React Native

### Phase 2: Primitive Components
- [ ] Migrate `button.tsx` to compound structure
- [ ] Migrate `input.tsx`, `textarea.tsx`
- [ ] Migrate `badge.tsx` / `tag.tsx`
- [ ] Create Card primitive from Box

### Phase 3: Safe Molecules
- [ ] Migrate book-card, review-card, pricing-card
- [ ] Migrate faq-accordion (direct)
- [ ] Migrate newsletter-signup, announcement-bar

### Phase 4: Complex Components
- [ ] Simplify discovery-machine (remove gradients)
- [ ] Simplify membership-hero (remove radial gradients)
- [ ] Create dark mode asset variants for logos
- [ ] Replace scroll-carousel fade with solid approach

### Phase 5: Navigation
- [ ] Create mobile Drawer navigation
- [ ] Create web HStack navigation
- [ ] Platform-specific footer layout

---

## 6. Recommended Immediate Actions

1. **Stop using** `backdrop-blur`, `mix-blend-mode`, `radial-gradient` in new code
2. **Provide dark mode asset variants** instead of CSS `invert()`
3. **Use solid backgrounds** instead of gradient fades
4. **Prepare separate assets** for decorative elements using `::before/::after`
5. **Document any new patterns** that deviate from this guide

---

## 7. Pattern Alternatives (Detailed)

For each incompatible pattern, here are the recommended cross-platform alternatives with code examples.

### 7.1 `backdrop-blur` (Frosted Glass Effect)

**Current Use:** Overlay backgrounds, scroll carousel arrows, alert dialogs

| Approach | Visual Similarity | Complexity |
|----------|-------------------|------------|
| Solid semi-transparent | 70% similar | Simple |
| `@react-native-community/blur` | 95% similar | Medium |
| Pre-blurred image asset | 80% similar | Simple |

**Recommended: Solid semi-transparent (simplest)**

```tsx
// ❌ Current (web-only)
<div className="bg-background/80 backdrop-blur-sm">

// ✅ Cross-platform alternative
<Box className="bg-background/90">
  {/* Slightly higher opacity compensates for no blur */}
</Box>

// ✅ If blur is critical, use library (iOS/Android)
import { BlurView } from '@react-native-community/blur';

// Platform-specific component
const FrostedOverlay = Platform.select({
  web: ({ children }) => (
    <div className="bg-background/80 backdrop-blur-sm">{children}</div>
  ),
  default: ({ children }) => (
    <BlurView blurType="light" blurAmount={10}>
      {children}
    </BlurView>
  ),
});
```

**Verdict:** Can achieve similar effect with library, but solid backgrounds work fine for most cases.

---

### 7.2 `radial-gradient` (Hero Backgrounds, Spotlights)

**Current Use:** membership-hero, gift-section, discovery-machine decorative glows

| Approach | Visual Similarity | Complexity |
|----------|-------------------|------------|
| Static gradient image | 100% similar | Simple |
| `react-native-svg` RadialGradient | 90% similar | Medium |
| Layered semi-transparent circles | 70% similar | Medium |

**Recommended: Static gradient image asset**

```tsx
// ❌ Current (web-only)
<div style={{
  background: "radial-gradient(circle at 20% 80%, var(--spiracle-blush) 0%, transparent 50%)"
}}>

// ✅ Cross-platform: Pre-rendered gradient image
<Box className="relative">
  <Image
    source={require('@/assets/gradients/hero-glow.png')}
    className="absolute inset-0 opacity-30"
    resizeMode="cover"
  />
  <VStack>{/* Content */}</VStack>
</Box>

// ✅ Alternative: SVG gradient (more flexible, larger bundle)
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const GradientBackground = () => (
  <Svg className="absolute inset-0">
    <Defs>
      <RadialGradient id="glow" cx="20%" cy="80%" r="50%">
        <Stop offset="0%" stopColor="#E8D5D0" stopOpacity="1" />
        <Stop offset="100%" stopColor="#E8D5D0" stopOpacity="0" />
      </RadialGradient>
    </Defs>
    <Rect width="100%" height="100%" fill="url(#glow)" />
  </Svg>
);
```

**Verdict:** Static images are simplest. SVG gradients work but add complexity. Consider if the effect is worth it on mobile.

---

### 7.3 `mix-blend-mode` (Image/Text Overlays)

**Current Use:** component-example.tsx image color overlay

| Approach | Visual Similarity | Complexity |
|----------|-------------------|------------|
| Pre-processed image | 100% similar | Simple (design time) |
| Tinted overlay View | 60% similar | Simple |
| Skip effect on mobile | N/A | Simplest |

**Recommended: Pre-processed images or tinted overlay**

```tsx
// ❌ Current (web-only)
<div className="absolute inset-0 bg-primary opacity-50 mix-blend-color" />
<img className="grayscale" src={image} />

// ✅ Cross-platform: Pre-processed duotone image
// Create duotone version in Figma/Photoshop, export as separate asset
<Image source={require('@/assets/images/hero-duotone.png')} />

// ✅ Alternative: Simple tinted overlay (not same effect but acceptable)
<Box className="relative">
  <Image source={image} className="opacity-60" />
  <Box className="absolute inset-0 bg-primary/40" />
</Box>

// ✅ For grayscale specifically on RN:
// Use a grayscale image asset, or:
import { Image } from 'react-native';
<Image
  source={image}
  style={{ tintColor: 'gray' }} // Only works for simple icons
/>
```

**Verdict:** Pre-process images at design time. The `mix-blend-mode` effect is sophisticated - accept a simplified version on mobile or provide alternate assets.

---

### 7.4 `invert()` for Dark Mode Logos

**Current Use:** Publication logos in critic-card, main logo in navigation/footer

| Approach | Visual Similarity | Complexity |
|----------|-------------------|------------|
| Separate dark mode assets | 100% similar | Simple (asset management) |
| SVG with currentColor | 100% similar | Medium |
| Skip invert, use neutral logo | 80% similar | Simplest |

**Recommended: Provide dark mode asset variants**

```tsx
// ❌ Current (web-only)
<img
  src="/logos/guardian.png"
  className="dark:invert dark:brightness-0"
/>

// ✅ Cross-platform: Theme-aware image source
import { useColorScheme } from 'react-native';

const ThemedLogo = ({ lightSrc, darkSrc, alt }) => {
  const colorScheme = useColorScheme();
  return (
    <Image
      source={colorScheme === 'dark' ? darkSrc : lightSrc}
      alt={alt}
    />
  );
};

// Usage
<ThemedLogo
  lightSrc={require('@/assets/logos/guardian-dark.png')}
  darkSrc={require('@/assets/logos/guardian-light.png')}
  alt="The Guardian"
/>

// ✅ Better: SVG logos with currentColor
const GuardianLogo = ({ className }) => (
  <Svg viewBox="0 0 100 20" className={className}>
    <Path d="..." fill="currentColor" />
  </Svg>
);

// Automatically inherits text color from parent
<Text className="text-foreground">
  <GuardianLogo className="h-8 w-auto" />
</Text>
```

**Verdict:** SVG with `currentColor` is ideal. For raster logos, provide light/dark variants. This is actually better practice anyway (invert doesn't always produce good results).

---

### 7.5 `::before/::after` Pseudo-elements

**Current Use:** Decorative flourishes, underlines, badges, borders

**Cross-Platform Alternative: Explicit child components**

```tsx
// ❌ Current (web-only CSS)
.link-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s;
}
.link-underline:hover::after {
  width: 100%;
}

// ✅ Cross-platform: Explicit View component
const UnderlineLink = ({ children, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    >
      <Link href={href}>
        <Text>{children}</Text>
        {/* Explicit "after" element */}
        <Box
          className={cn(
            "h-px bg-current transition-all duration-300",
            hovered ? "w-full" : "w-0"
          )}
        />
      </Link>
    </Pressable>
  );
};

// ✅ Decorative flourishes
// Instead of ::before/::after, use sibling Views
const FlourishLabel = ({ children }) => (
  <HStack className="items-center gap-3">
    <Box className="h-px w-8 bg-border" /> {/* "before" */}
    <Text>{children}</Text>
    <Box className="h-px w-8 bg-border" /> {/* "after" */}
  </HStack>
);
```

**Verdict:** Always achievable, just more verbose. Structure your components with explicit decorative elements from the start.

---

### 7.6 `stagger-children` CSS Animations

**Current Use:** Grid card reveals, list animations

**Cross-Platform Alternative: Reanimated with staggered delays**

```tsx
// ❌ Current (web-only CSS)
.stagger-children > * {
  animation: fade-in-up 0.4s ease-out backwards;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 50ms; }
// ...

// ✅ Cross-platform: Reanimated stagger
import Animated, {
  FadeInUp,
  Layout
} from 'react-native-reanimated';

const StaggeredGrid = ({ items }) => (
  <Box className="grid grid-cols-3 gap-4">
    {items.map((item, index) => (
      <Animated.View
        key={item.id}
        entering={FadeInUp.delay(index * 50).duration(400)}
        layout={Layout.springify()}
      >
        <Card {...item} />
      </Animated.View>
    ))}
  </Box>
);

// ✅ Simpler alternative: Just fade without stagger
// (Stagger is nice but not critical for UX)
const SimpleGrid = ({ items }) => (
  <Box className="grid grid-cols-3 gap-4">
    {items.map((item) => (
      <Animated.View
        key={item.id}
        entering={FadeInUp.duration(300)}
      >
        <Card {...item} />
      </Animated.View>
    ))}
  </Box>
);
```

**Verdict:** Reanimated handles this well. The API is actually nicer than CSS. Worth implementing.

---

## 8. Web-Only Sections Policy

**Question:** Can we use incompatible patterns for web-only sections?

**Answer:** Yes, with caveats.

### Platform-Specific Components

```tsx
// Create platform-specific implementations
// components/molecules/scroll-carousel/
//   ├── index.tsx                    (exports platform-specific)
//   ├── scroll-carousel.web.tsx      (uses backdrop-blur)
//   └── scroll-carousel.native.tsx   (solid backgrounds)

// index.tsx
export { ScrollCarousel } from './scroll-carousel';

// scroll-carousel.web.tsx
export const ScrollCarousel = ({ children }) => (
  <div className="relative">
    {children}
    <div className="bg-background/80 backdrop-blur-sm">
      {/* Fancy web arrows */}
    </div>
  </div>
);

// scroll-carousel.native.tsx
export const ScrollCarousel = ({ children }) => (
  <ScrollView horizontal>
    {children}
    {/* Simple solid arrows or none */}
  </ScrollView>
);
```

### When Web-Only Patterns Are OK

| Scenario | OK to Use Web Patterns? |
|----------|------------------------|
| Marketing pages (web-only) | ✅ Yes |
| Admin dashboards (web-only) | ✅ Yes |
| Shared UI components | ❌ No - use cross-platform |
| Core app features | ❌ No - use cross-platform |
| Preview/dev tools (`preview-bar`) | ✅ Yes (won't be in mobile) |

### Recommendation

1. **Shared components** (`components/ui`, `components/molecules`, `components/organisms`) - Always cross-platform compatible
2. **Page-level compositions** - Can have platform-specific implementations
3. **Marketing/landing pages** - If web-only, use whatever works

---

## 9. Pattern Alternatives Summary

| Pattern | Alternative | Visual Parity | Effort |
|---------|-------------|---------------|--------|
| `backdrop-blur` | Solid bg or blur library | 70-95% | Low-Med |
| `radial-gradient` | Static image assets | 100% | Low |
| `mix-blend-mode` | Pre-processed images | 100% | Low (design) |
| `invert()` | Dark mode asset variants | 100% | Low |
| `::before/::after` | Explicit View children | 100% | Medium |
| `stagger-children` | Reanimated stagger | 100% | Medium |

**Bottom line:** Most effects are achievable with similar visual results. The main cost is:
1. More explicit component structure (no pseudo-elements)
2. More image assets (gradient backgrounds, dark mode variants)
3. Reanimated learning curve (but it's powerful)

---

*Last updated: January 2026*
*Audit performed against Gluestack v2 component library*
