import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { ChartResultUpIcon } from "@/components/icons/documents/chart-result-up-Icon";
import { DocumentCheckIcon } from "@/components/icons/documents/document-check-icon";
import { DocumentSearchIcon } from "@/components/icons/documents/document-search-icon";

const icons = [
  { Icon: ChartResultUpIcon, name: "ChartResultUp" },
  { Icon: DocumentCheckIcon, name: "DocumentCheck" },
  { Icon: DocumentSearchIcon, name: "DocumentSearch" },
];

const meta: Meta = {
  title: "Components/Icons/Documents",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
