import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { CommunicationIcon } from "@/components/icons/communication/communication-icon";

const icons = [{ Icon: CommunicationIcon, name: "Communication" }];

const meta: Meta = {
  title: "Components/Icons/Communication",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
