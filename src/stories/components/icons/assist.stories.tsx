import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { MegaphoneIcon } from "@/components/icons/assist/megaphone-icon";

const icons = [{ Icon: MegaphoneIcon, name: "Megaphone" }];

const meta: Meta = {
  title: "Components/Icons/Assist",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
