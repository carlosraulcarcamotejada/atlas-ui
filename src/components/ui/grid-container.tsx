import * as React from "react";
import { cn } from "@/lib/utils";

function GridContainer({
  className,
  color,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="grid-container"
      className={cn(
        "grid grid-cols-[repeat(4,1fr)] gap-x-02 mx-0 md:grid-cols-[repeat(8,1fr)] md:gap-x-02 lg:grid-cols-[1fr,repeat(12,84px),1fr] lg:mx-auto lg:gap-x-05;",
        className
      )}
      {...props}
    />
  );
}

export { GridContainer };
