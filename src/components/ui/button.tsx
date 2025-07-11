"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { typographyVariants } from "@/components/ui/typography";

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
          "bg-primary rounded-02 text-white  hover:bg-red-500    active:bg-red-700 disabled:bg-gray-200 disabled:text-gray-500",
        outline:
          "bg-white rounded-02 text-primary hover:text-red-500 active:text-red-700  border-2 border-primary hover:border-red-500 active:border-red-700 disabled:border-gray-500 disabled:text-gray-500",
        ghost:
          "bg-transparent rounded-02 text-primary  hover:text-red-500   active:text-red-700 disabled:text-gray-500",
        fab: "bg-primary text-white  hover:bg-red-500 active:bg-red-700 disabled:bg-gray-200 disabled:text-gray-500 rounded-full",
        "quick-button":
          "bg-white shadow-01 rounded-02 flex flex-col !pt-03 !pb-04 text-primary hover:shadow-02 active:text-white active:bg-primary active:shadow-none disabled:bg-gray-200 disabled:text-gray-500 disabled:shadow-none",
      },
      size: {
        sm: "",
        md: "",
        auto: "",
      },
      iconOnly: {
        true: "",
        false: "",
      },
      fullWidth: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "outline", "ghost"],
        size: "sm",
        class: `h-06 px-04 py-02 gap-x-01 ${!typographyVariants({
          variant: "label-s",
        })}`,
      },
      {
        variant: ["primary", "outline", "ghost"],
        size: "sm",
        iconOnly: false,
        fullWidth: false,
        class: "min-w-[76px]",
      },
      {
        variant: ["primary", "outline", "ghost"],
        size: "md",
        class: `h-08 px-06 py-03 gap-x-02 ${!typographyVariants({
          variant: "label-m",
        })}`,
      },
      {
        variant: ["primary", "outline", "ghost"],
        size: "md",
        iconOnly: false,
        fullWidth: false,
        class: "min-w-[192px]",
      },
      {
        variant: ["primary", "outline", "ghost"],
        fullWidth: true,
        iconOnly: false,
        class: "!w-full",
      },

      {
        variant: ["primary", "outline", "ghost"],
        fullWidth: false,
        iconOnly: true,
        size: "sm",
        class: "min-w-06 p-01",
      },

      {
        variant: ["primary", "outline", "ghost"],
        fullWidth: false,
        iconOnly: true,
        size: "md",
        class: "min-w-08 p-04",
      },

      {
        variant: "quick-button",
        size: "sm",
        class: cn(
          typographyVariants({
            variant: "body-xs",
            weight: "bold",
            color: "primary",
          }),
          "h-full w-full [&_svg]:size-06 gap-y-01 px-03"
        ),
      },
      {
        variant: "quick-button",
        size: "md",
        class: cn(
          typographyVariants({
            variant: "body-m",
            weight: "bold",
            color: "primary",
          }),
          "h-full w-full [&_svg]:size-08 gap-y-02 px-04"
        ),
      },
      {
        variant: "fab",
        size: "sm",
        class: "px-0 py-0 min-w-0 size-06",
      },
      {
        variant: "fab",
        size: "md",
        class: "px-0 py-0 min-w-0 size-07",
      },
    ],
    defaultVariants: {
      iconOnly: false,
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

function Button({
  asChild = false,
  fullWidth = false,
  className,
  iconOnly = false,
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
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ fullWidth, className, iconOnly, size, variant })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
