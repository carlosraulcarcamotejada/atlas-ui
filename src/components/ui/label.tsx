import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import { typographyVariants } from "./typography";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        `flex 
        gap-2 
        group-data-[disabled=true]:opacity-50 
        group-data-[disabled=true]:pointer-events-none
        items-center 
        leading-none 
        peer-disabled:cursor-not-allowed 
        peer-disabled:opacity-50
        select-none 
        `,
        typographyVariants({ variant: "body-m" }),
        className
      )}
      {...props}
    />
  );
}

export { Label };
