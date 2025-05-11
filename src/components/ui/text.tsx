import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { PolymorphicComponentPropsWithRef } from "@/interfaces/polymorphic-component-props";

const textVariants = cva("w-full", {
  variants: {
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
      weight: {
        regular: "font-regular",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "body-m",
      weight: "regular",
    },
  },
});

type TextOwnProps = VariantProps<typeof textVariants>;

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  TextOwnProps
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

const TextImpl = <C extends React.ElementType = "span">(
  {
    align,
    as,
    className,
    emphasis,
    italic,
    size,
    underline,
    variants,
    weight,
    ...props
  }: TextProps<C>,
  ref: React.Ref<Element> // Cambiar el tipo de ref a React.Ref<Element>
) => {
  const Component = as || "span"; // Por defecto es un span
  return (
    <Component
      ref={ref} // Pasa el ref correctamente
      className={cn(textVariants({ variants, className }))}
      {...props}
    />
  );
};

// Asegurarse de que el ref se pase correctamente usando forwardRef
const Text = React.forwardRef(TextImpl) as TextComponent;

export { Text };
