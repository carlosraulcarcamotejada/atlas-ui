import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { typographyVariants } from "./typography";

const badgeChildVariants = cva(
  `
  -translate-y-1/2
  absolute 
  bg-primary 
  flex
  items-center
  justify-center
  rounded-full
  translate-x-1/2 
  z-50
  `,
  {
    variants: {
      size: {
        sm: `h-04 min-w-04 p-01 top-02 right-02 ${typographyVariants({
          variant: "body-xs",
          weight: "bold",
          color: "white",
        })}`,
        md: `h-05 min-w-05 py-[2.5px] px-[7.5px] top-02 right-01 ${typographyVariants(
          { variant: "body-s", weight: "bold", color: "white" }
        )}`,
        auto: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Badge({
  children,
  className,
  content,
  size = "md",
  ...props
}: Omit<React.ComponentProps<"div">, "content"> & {
  content?: string | number;
} & { size?: VariantProps<typeof badgeChildVariants>["size"] }) {
  return (
    <div
      data-slot="badge"
      role="badge"
      className={cn("relative w-fit", className)}
      {...props}
    >
      <BadgeChild size={size}>{content}</BadgeChild>
      {children}
    </div>
  );
}

function BadgeChild({
  className,
  children,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeChildVariants>) {
  return (
    <div
      data-slot="badge-child"
      role="badge-child"
      className={cn(badgeChildVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge };
