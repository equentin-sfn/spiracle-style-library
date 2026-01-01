import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Button Component - Multi-Platform Excellence
 *
 * Touch targets: All sizes meet 44px minimum for accessibility
 * Hover states: Scoped to desktop via CSS @media (hover: hover) in globals.css
 *
 * The hover effects are delightful on desktop but don't interfere with touch.
 */
const buttonVariants = cva(
  // Base styles: work everywhere, no hover dependency
  [
    // Layout & sizing
    "inline-flex items-center justify-center whitespace-nowrap shrink-0",
    // Typography
    "text-sm font-medium tracking-wide",
    // Border & shape
    "rounded-sm border border-transparent bg-clip-padding",
    // Focus states (accessible on all devices)
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    // Invalid states
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 aria-invalid:ring-[3px]",
    // Transition (applies to color changes, hover handled in CSS)
    "transition-colors duration-200 ease-out",
    // Active/press state (works on touch AND desktop)
    "active:scale-[0.98] transition-transform",
    // Disabled state
    "disabled:pointer-events-none disabled:opacity-50",
    // Icon handling
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    // Misc
    "outline-none group/button select-none",
  ],
  {
    variants: {
      variant: {
        // Base colors only - hover states handled in globals.css
        default: "bg-primary text-primary-foreground shadow-sm",
        outline: "border-border bg-transparent aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 focus-visible:border-destructive/40",
        link: "text-primary underline underline-offset-4 decoration-primary/40",
        // Literary style - elegant with subtle warmth
        literary: "bg-foreground text-background shadow-sm font-serif",
      },
      size: {
        // All sizes now meet 44px minimum touch target
        default: "h-11 min-h-[44px] gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-11 min-h-[44px] gap-1 px-3 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-11 min-h-[44px] gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        lg: "h-12 min-h-[48px] gap-2 px-6 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        // Icon buttons: 44px minimum touch target
        icon: "size-11 min-w-[44px] min-h-[44px]",
        "icon-xs": "size-11 min-w-[44px] min-h-[44px] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-11 min-w-[44px] min-h-[44px]",
        "icon-lg": "size-12 min-w-[48px] min-h-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
