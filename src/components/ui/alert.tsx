import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { XIcon } from "@/components/icons/user-interface/x-icon";

const alertVariants = cva(
  `
  flex
  font-regular
  min-h-09
  items-center
  gap-x-02
  relative
  w-full



  [&_svg]:size-05
  [&_svg]:pointer-events-none
  [&_svg]:shrink-0

  [&_a]:underline
  [&_a]:underline-offset-2
  [&_a]:font-bold
  [&_a]:hover:underline
  [&_a]:hover:cursor-pointer

  `,
  {
    variants: {
      variant: {
        warning: "bg-yellow-200 text-yellow-800",
        success: "bg-green-200 text-green-700",
        error: "bg-red-100 text-red-700",
      },
      size: {
        sm: "py-04 pl-04 pr-08 justify-start !text-02",
        md: "py-05 pl-05 pr-08 justify-center !text-03",
      },
    },
    defaultVariants: {
      variant: "warning",
      size: "md",
    },
  }
);

function Alert({
  children,
  className,
  isOpen = false,
  size = "md",
  variant,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & { isOpen?: boolean }) {
  const [open, setOpen] = React.useState<boolean>(isOpen);

  const handleOnClose = () => {
    setOpen(false);
  };

  if (!open) return <></>;

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ size, variant }), className)}
      {...props}
    >
      {children}
      <Button
        onClick={handleOnClose}
        className={cn(
          "text-current hover:text-current/80 active:text-current absolute top-1/2 -translate-y-1/2 right-03 cursor-pointer"
        )}
        variant="tertiary"
        size="icon-sm"
      >
        <XIcon />
      </Button>
    </div>
  );
}

Alert.displayNane = "Alert";

export { Alert };
