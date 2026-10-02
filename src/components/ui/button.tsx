import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg hover:bg-accent-hover",
        ink: "bg-fg text-bg hover:opacity-90",
        gold: "bg-gold text-gold-fg hover:opacity-90",
        outline:
          "bg-card text-fg shadow-border hover:shadow-border-hover",
        ghost: "bg-transparent text-fg hover:bg-bg-subtle",
      },
      size: {
        default: "h-11 min-h-11 rounded-xl px-5 pr-4 text-sm",
        lg: "h-12 min-h-12 rounded-2xl px-6 pr-5 text-base",
        sm: "h-10 min-h-10 rounded-lg px-4 pr-3.5 text-sm",
        icon: "size-11 min-h-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
