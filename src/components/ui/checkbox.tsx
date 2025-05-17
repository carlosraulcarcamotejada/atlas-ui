import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/icons/user-interface/check-icon";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
   
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          `
        aria-invalid:border-primary 
        aria-invalid:ring-destructive/20 
        border-[2px]
        border-gray-400 
        grid
        outline-none 
        peer
        place-content-center
        rounded-[4px]
        shrink-0
        size-[18px]
        transition

        dark:data-[state=checked]:bg-primary
        data-[state=checked]:bg-primary
        data-[state=checked]:border-primary
        data-[state=checked]:text-primary

        disabled:cursor-not-allowed 
        disabled:opacity-50

        hover:border-red-200 

        focus-visible:ring-[4px]
        focus-visible:ring-gray-400 
        `,
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none size-04 rounded-[4px]"
        >
          <CheckIcon className="size-04 text-white " />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

    
  );
}


function CheckboxContainer() {
  return (
     <div className="flex items-center gap-x-02" />
    
  );
}

export { Checkbox, CheckboxContainer };
