"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Base styles
        "flex size-5 items-center justify-center rounded-[4px] border-2 shrink-0",
        "transition-all duration-200 ease-out",
        // Default state
        "border-border bg-background",
        // Checked state - Spiracle forest green
        "data-[state=checked]:bg-spiracle-forest data-[state=checked]:border-spiracle-forest data-[state=checked]:text-spiracle-cream",
        // Hover state
        "hover:border-spiracle-forest/60",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spiracle-terracotta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        <Check className="size-3.5" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
