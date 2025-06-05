import * as React from "react";
import { format } from "date-fns";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@/components/icons/user-interface/calendar-icon";
import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";

const meta: Meta<typeof Popover> = {
  title: "Components/Datepicker",
  component: Popover,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const PrimaryMedium: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>();
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-regular",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent >
          <Calendar
            locale={es}
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
};
