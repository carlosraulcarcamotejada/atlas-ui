'use client'
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
  
  [&_svg]:size-04
  [&_svg]:pointer-events-none 
  [&_svg]:shrink-0 outline-none

  aria-invalid:border-red-600
  aria-invalid:ring-red-600/20

  disabled:pointer-events-none

  focus-visible:border-gray-400 
  focus-visible:ring-[3px] 
  focus-visible:ring-gray-400
  `,
  {
    variants: {
      variant: {
        primary:
          "bg-red-600     rounded-02 text-white  hover:bg-red-500     active:bg-red-700 disabled:bg-gray-200 disabled:text-gray-500",
        secondary:
          "bg-transparent rounded-02 text-primary hover:text-red-500 active:text-red-700  border-2 border-red-600 hover:border-red-500 active:border-red-700 disabled:border-gray-500 disabled:text-gray-500",
        tertiary:
          "bg-transparent rounded-02 text-primary  hover:text-red-500 active:text-red-700 disabled:text-gray-500",
      },
      size: {
        sm: "h-06  min-w-[76px] px-04 py-02 gap-x-01 !text-02",
        md: "h-08 min-w-[192px] px-06 py-03 gap-x-02 !text-03",
        "icon-sm": "h-06 min-w-06 p-01  gap-x-01 !text-02",
        "icon-md": "h-8 min-w-08 p-04   gap-x-02 !text-03",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  asChild = false,
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
}

Button.displayName = "Button";

export { Button, buttonVariants };
