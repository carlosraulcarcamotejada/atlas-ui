import { Checkbox } from "@/components/ui/checkbox";
import { GridContainer } from "@/components/ui/grid-container";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GridContainer> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const CheckboxBase: Story = {
  render: () => (
    <div className="flex items-center gap-x-02">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
