// Atoms: Basic building blocks of the UI
// These are the smallest, most fundamental components that can't be broken down further.

// Core interactive elements
export { Button, buttonVariants } from "@/components/ui/button";
export { Input } from "@/components/ui/input";
export { Textarea } from "@/components/ui/textarea";
export { Label } from "@/components/ui/label";

// Visual elements
export { Badge, badgeVariants } from "@/components/ui/badge";
export { Separator } from "@/components/ui/separator";

// Theme
export { ThemeToggle, type ThemeToggleProps } from "./theme-toggle";

// Brand elements
export { WaveDecoration, type WaveDecorationProps } from "./wave-decoration";

// Tags & Labels
export {
  Tag,
  MinimalDotTag,
  BelowCoverTag,
  CornerBadge,
  type TagProps,
  type TagVariant,
  type TagColor,
  type CornerPosition,
  type MinimalDotTagProps,
  type BelowCoverTagProps,
  type CornerBadgeProps,
} from "./tag";
