import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const textVariants = cva("w-full", {
  variants: {
    variant: {
      "display-l": "text-09 -tracking-03 leading-auto",
      "display-m": "text-[3.5rem] -tracking-03 leading-auto",
      "display-s": "text-08 -tracking-02 leading-auto",

      "heading-xl": "text-[2.625rem] -tracking-01 leading-auto",
      "heading-l": "text-[2.25rem] -tracking-01 leading-auto",
      "heading-m": "text-06 -tracking-01 leading-auto",
      "heading-s": "text-[1.75rem] tracking-0 leading-auto",
      "heading-xs": "text-[1.375rem] tracking-0 leading-auto",

      "body-l": "text-04 tracking-0 leading-auto",
      "body-m": "text-03 tracking-0 leading-auto",
      "body-s": "text-02 tracking-0 leading-auto",
      "body-xs": "text-01 tracking-0 leading-auto",

      "label-m": "text-03 !font-semibold tracking-0 leading-06",
      "label-s": "text-02 !font-semibold tracking-0 leading-05",
    },
    color: {
      "gray-900": "!text-gray-900",
      "gray-700": "!text-gray-700",
      "gray-500": "!text-gray-500",
      "gray-300": "!text-gray-300",
      "red-700": "!text-red-700",
      "red-600": "!text-red-600",
      "red-500": "!text-red-500",
      white: "!text-white",
    },
    weight: {
      regular: "font-regular",
      bold: "font-bold",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    variant: "body-l",
    weight: "regular",
    color: "gray-900",
  },
});

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";

function Text({
  as = "h1",
  asChild = false,
  className,
  color,
  italic,
  underline,
  variant,
  weight,
  ...props
}: React.ComponentProps<TextType> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  } & { as?: TextType }) {
  const Comp = asChild ? Slot : as;

  return (
    <Comp
      data-slot={as}
      className={cn(
        textVariants({ className, color, italic, underline, variant, weight })
      )}
      {...props}
    />
  );
}

Text.displayName = "Text";

export { Text, textVariants };
