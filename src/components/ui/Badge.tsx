"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

/**
 * Variantes de Badge inspiradas en Frutero
 * Con rotación opcional y colores vibrantes
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1 text-sm font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
        secondary:
          "bg-[var(--secondary)] text-white hover:bg-[var(--secondary-dark)]",
        accent:
          "bg-[var(--accent-pink)] text-white hover:bg-[var(--accent-pink-dark)]",
        yellow:
          "bg-[var(--accent-yellow)] text-[var(--foreground)] hover:bg-[var(--accent-yellow-dark)]",
        outline:
          "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
        ghost:
          "bg-[var(--primary-light)]/20 text-[var(--primary)] hover:bg-[var(--primary-light)]/40",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-2",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      rotate: {
        none: "rotate-0",
        left: "-rotate-2",
        right: "rotate-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "full",
      rotate: "none",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Componente Badge de FinQuest
 * Inspirado en los inline badges de Frutero con rotación
 */
const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, rounded, rotate, children, ...props }, ref) => {
    return (
      <div 
        className={cn(
          badgeVariants({ variant, size, rounded, rotate, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
