import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { typographyVariants } from "./typography";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: `size-07 ${typographyVariants({
          variant: "body-xs",
          weight: "bold",
          color: "gray-700",
        })}`,
        md: `size-09 ${typographyVariants({
          variant: "body-l",
          weight: "bold",
          color: "gray-700",
        })}`,
      },
      status: {
        default: "shadow-01",
        online: "border-green-300 shadow-success",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        status: "online",
        class: "border-2",
      },
      {
        size: "md",
        status: "online",
        class: "border-4",
      },
    ],
    defaultVariants: {
      status: "default",
      size: "md",
    },
  }
);

function Avatar({
  className,
  status,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ className, status, size }))}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full ring-4", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  status,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-gray-200 flex size-full items-center justify-center rounded-full ",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
