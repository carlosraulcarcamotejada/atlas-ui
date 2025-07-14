"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons/arrows/chevron-down-icon";
import { typographyVariants } from "./typography";

const accordionTriggerVariants = cva(
  `
  flex
  gap-x-02 
  items-center 
  justify-start
  outline-none 
  pb-04
  rounded-01
  transition
  w-full

  disabled:opacity-50
  disabled:pointer-events-none
  focus-visible:border-red-600 
  focus-visible:ring-[3px] 
  focus-visible:ring-gray-400
  hover:cursor-pointer
  [&_svg]:duration-200 
  [&_svg]:pointer-events-none 
  [&_svg]:shrink-0 
  [&_svg]:size-05 
  [&_svg]:text-primary
  [&_svg]:transition-transform
  [&[data-state=open]>svg]:rotate-x-180


  `,
  {
    variants: {
      size: {
        sm: `!pt-04 ${typographyVariants({
          variant: "body-m",
          weight: "bold",
          color: "gray-900",
        })}`,
        md: `!pt-05 ${typographyVariants({
          variant: "heading-xs",
          weight: "bold",
          color: "gray-900",
        })}`,
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type AccordionSize = VariantProps<typeof accordionTriggerVariants>["size"];

interface AccordionContextProps {
  showDivider?: boolean;
  size?: AccordionSize;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  showDivider: true,
  size: "md",
});

const accordionItemVariants = cva("", {
  variants: {
    showDivider: {
      true: "border-b last:border-b-0 border-b-gray-300",
      false: "",
    },
  },
  defaultVariants: {
    showDivider: true,
  },
});

const accordionContentVariants = cva("pt-0 pb-04 text-gray-700 font-regular", {
  variants: {
    size: {
      sm: `!text-02`,
      md: `!text-03`,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Accordion({
  className,
  showDivider,
  size,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> &
  AccordionContextProps) {
  return (
    <AccordionContext.Provider value={{ size, showDivider }}>
      <AccordionPrimitive.Root
        className={className}
        data-slot="accordion"
        {...props}
      />
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used whitin Accordion");

  const { showDivider } = context;

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemVariants({ showDivider }), className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const context = React.useContext(AccordionContext);

  if (!context)
    throw new Error("AccordionTrigger must be used whitin Accordion");

  const { size } = context;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ size }), className)}
        {...props}
      >
        <ChevronDownIcon />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const context = React.useContext(AccordionContext);

  if (!context)
    throw new Error("AccordionContent must be used whitin Accordion");

  const { size } = context;

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn(accordionContentVariants({ size }), className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
