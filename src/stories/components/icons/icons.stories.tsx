import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { ExampleIcon } from "@/components/icons/example-icon";

const icons = [{ Icon: ExampleIcon, name: "Example" }];

const meta: Meta = {
  title: "Components/Icons/Icons",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
