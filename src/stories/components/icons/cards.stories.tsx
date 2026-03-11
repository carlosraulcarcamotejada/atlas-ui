import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { CardDolarSignIcon } from "@/components/icons/cards/card-dolar-sign-icon";
import { TelephoneIcon } from "@/components/icons/cards/telephone-icon";
import { WristWatchIcon } from "@/components/icons/cards/wrist-watch-icon";

const icons = [
  { Icon: CardDolarSignIcon, name: "CardDolarSign" },
  { Icon: TelephoneIcon, name: "Telephone" },
  { Icon: WristWatchIcon, name: "WristWatch" },
];

const meta: Meta = {
  title: "Components/Icons/Cards",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
