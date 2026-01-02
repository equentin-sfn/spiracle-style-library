"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base styles - pill shape
        "inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent",
        "transition-colors duration-200 ease-out",
        // Touch target
        "cursor-pointer",
        // Default (off) state
        "bg-spiracle-sand dark:bg-secondary",
        // Checked (on) state - Spiracle forest green
        "data-[state=checked]:bg-spiracle-forest",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spiracle-terracotta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Thumb styles
          "pointer-events-none block size-5 rounded-full bg-spiracle-cream shadow-sm",
          "ring-0 transition-transform duration-200 ease-out",
          // Position
          "translate-x-0 data-[state=checked]:translate-x-5",
          // Dark mode thumb
          "dark:bg-foreground"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
