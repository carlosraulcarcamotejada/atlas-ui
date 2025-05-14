import * as React from "react";
import { cn } from "@/lib/utils";

function GridContainer({
  className,
  color,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="grid-container" className={cn("", className)} {...props} />
  );
}

export { GridContainer };
