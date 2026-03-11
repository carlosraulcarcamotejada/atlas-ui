import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { ChevronDownIcon } from "@/components/icons/arrows/chevron-down-icon";
import { ChevronLeftIcon } from "@/components/icons/arrows/chevron-left-icon";
import { ChevronRightIcon } from "@/components/icons/arrows/chevron-right-icon";
import { ChevronUpIcon } from "@/components/icons/arrows/chevron-up-icon";
import { ChevronDoubleLeftIcon } from "@/components/icons/arrows/chevron-double-left-icon";
import { ChevronDoubleRightIcon } from "@/components/icons/arrows/chevron-double-right-icon";
import { CornerChevronTopLeftIcon } from "@/components/icons/arrows/corner-chevron-top-left-icon";
import { CornerChevronTopLeftIcon as CornerChevronTopRightIcon } from "@/components/icons/arrows/corner-chevron-top-right-icon";
import { MoreHorizontalIcon } from "@/components/icons/arrows/more-horizontal-icon";

const icons = [
  { Icon: ChevronDownIcon, name: "ChevronDown" },
  { Icon: ChevronLeftIcon, name: "ChevronLeft" },
  { Icon: ChevronRightIcon, name: "ChevronRight" },
  { Icon: ChevronUpIcon, name: "ChevronUp" },
  { Icon: ChevronDoubleLeftIcon, name: "ChevronDoubleLeft" },
  { Icon: ChevronDoubleRightIcon, name: "ChevronDoubleRight" },
  { Icon: CornerChevronTopLeftIcon, name: "CornerChevronTopLeft" },
  { Icon: CornerChevronTopRightIcon, name: "CornerChevronTopRight" },
  { Icon: MoreHorizontalIcon, name: "MoreHorizontal" },
];

const meta: Meta = {
  title: "Components/Icons/Arrows",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Small (16px)</h3>
        <IconGrid icons={icons} size={16} />
      </div>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Medium (24px)</h3>
        <IconGrid icons={icons} size={24} />
      </div>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Large (32px)</h3>
        <IconGrid icons={icons} size={32} />
      </div>
    </div>
  ),
};

export const WithColor: Story = {
  render: () => <IconGrid icons={icons} color="red" />,
};
