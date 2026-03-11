import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { CardsTransactionsIcon } from "@/components/icons/transactions/cards-transactions-icon";
import { HandMobilePhoneIcon } from "@/components/icons/transactions/hand-mobile-phone-icon";
import { MoneyHandIcon } from "@/components/icons/transactions/money-hand-icon";
import { SaveMoneyIcon } from "@/components/icons/transactions/save-money-icon";

const icons = [
  { Icon: CardsTransactionsIcon, name: "CardsTransactions" },
  { Icon: HandMobilePhoneIcon, name: "HandMobilePhone" },
  { Icon: MoneyHandIcon, name: "MoneyHand" },
  { Icon: SaveMoneyIcon, name: "SaveMoney" },
];

const meta: Meta = {
  title: "Components/Icons/Transactions",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
