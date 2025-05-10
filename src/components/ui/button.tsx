import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  font-regular
  inline-flex 
  items-center 
  justify-center
  shrink-0 
  transition-all 
  whitespace-nowrap
  

  [&_svg:not([class*='size-'])]:size-04
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
          "bg-red-600     rounded-02 text-white hover:bg-red-500 active:bg-red-700",
        secondary:
          "bg-transparent rounded-02 border-2 border-red-600 text-red-600  hover:border-red-500 active:border-red-700 hover:text-red-500 active:text-red-700",
        tertiary:
          "bg-transparent rounded-02 text-red-600  hover:text-red-500 active:text-red-700",
      },
      size: {
        sm: "h-06  min-w-[76px] px-04 py-02 gap-x-01 text-02",
        md: "h-08 min-w-[192px] px-06 py-03 gap-x-02 text-03",
        iconSm: "h-06 min-w-06 p-02  gap-x-01 text-02",
        iconMd: "h-8 min-w-08 p-04   gap-x-02 text-03",
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
