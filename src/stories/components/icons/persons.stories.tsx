import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { BriefcaseIcon } from "@/components/icons/persons/briefcase-icon";
import { DolarBriefcaseIcon } from "@/components/icons/persons/dolar-briefcase-icon";
import { DolarPersonIcon } from "@/components/icons/persons/dolar-personIcon";
import { ThinkingPersonIcon } from "@/components/icons/persons/thinking-personIcon";

const icons = [
  { Icon: BriefcaseIcon, name: "Briefcase" },
  { Icon: DolarBriefcaseIcon, name: "DolarBriefcase" },
  { Icon: DolarPersonIcon, name: "DolarPerson" },
  { Icon: ThinkingPersonIcon, name: "ThinkingPerson" },
];

const meta: Meta = {
  title: "Components/Icons/Persons",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
