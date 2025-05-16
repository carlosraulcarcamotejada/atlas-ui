import type { Meta, StoryObj } from "@storybook/react";
import { MagnifyingGlassIcon } from "@/components/icons/user-interface/magnifying-glass-icon";

const meta: Meta<typeof MagnifyingGlassIcon> = {
  title: "Components/Icon",
  component: MagnifyingGlassIcon,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MagnifyingGlassIcon>;

export const SelectedFirsOption: Story = {
  render: () => <MagnifyingGlassIcon />,
};
