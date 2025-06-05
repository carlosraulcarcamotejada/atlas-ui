import * as React from "react";

import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon } from "@/components/icons/arrows/chevron-left-icon";
import { ChevronRightIcon } from "@/components/icons/arrows/chevron-right-icon";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-white rounded-02 w-full m-04", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-02",
        month: "flex flex-col gap-04",
        caption: "flex justify-center pt-01@ relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-01@",
        nav_button: "",
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full",
        head_row: "flex",
        head_cell:
          "text-gray-900  rounded-01 w-full font-normal text-[0.8rem]",
        row: "flex w-full mt-02",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost", size: "sm", iconOnly: true }),
          "text-gray-800"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-green-700 text-white focus:bg-primary hover:text-white",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            {...props}
            className="absolute top-0 left-0"
          >
            <ChevronLeftIcon />
          </Button>
        ),
        IconRight: ({ ...props }) => (
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            {...props}
            className="absolute top-0 right-0"
          >
            <ChevronRightIcon />
          </Button>
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
