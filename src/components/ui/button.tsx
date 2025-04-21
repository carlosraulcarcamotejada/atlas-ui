import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  font-medium 
  gap-2
  inline-flex 
  items-center 
  justify-center
  shrink-0 
  text-sm
  transition-all 
  whitespace-nowrap 
  
  [&_svg:not([class*='size-'])]:size-4
  [&_svg]:pointer-events-none 
  [&_svg]:shrink-0 outline-none

  aria-invalid:border-destructive
  aria-invalid:ring-destructive/20 
  dark:aria-invalid:ring-destructive/40

  disabled:opacity-50 
  disabled:pointer-events-none

  focus-visible:border-ring 
  focus-visible:ring-[3px] 
  focus-visible:ring-ring/80
  `,
  {
    variants: {
      variant: {
        primary:
          "bg-red-600     rounded-md text-primary-foreground shadow-xs hover:bg-red-500 active:bg-red-700",
        secondary:
          "bg-transparent rounded-md border-2 border-red-600 text-red-600  hover:border-red-500 active:border-red-700 hover:text-red-500 active:text-red-700",
        tertiary:
          "bg-transparent rounded-md text-red-600  hover:text-red-500 active:text-red-700",
      },
      size: {
        sm: "h-[34px] min-w-[98px] px-4 py-2 has-[>svg]:gap-x-1.5",
        md: "h-12     min-w-48     px-8 py-3 has-[>svg]:gap-x-2 has-[>svg]:min-w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
