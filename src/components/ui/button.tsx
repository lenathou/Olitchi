import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-premium-orange text-white border-none shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_20px_rgba(230,92,37,0.25)] hover:scale-105 hover:shadow-[0_12px_24px_rgba(230,92,37,0.35)] transition-transform rounded-full",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-gradient-premium-beige border border-[var(--premium-beige-border)] text-[#5C4030] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_6px_12px_rgba(0,0,0,0.06)] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform rounded-full",
        tertiary:
          "bg-gradient-premium-tertiary border border-[var(--premium-tertiary-border)] text-[#5C4030] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_6px_12px_rgba(0,0,0,0.06)] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform rounded-full",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        cream:
          "bg-[#F3E2CF] border border-[#F3E2CF] text-[#3a2b1f] hover:bg-[#ebd5c1] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_6px_12px_rgba(0,0,0,0.06)] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform font-semibold rounded-full",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
