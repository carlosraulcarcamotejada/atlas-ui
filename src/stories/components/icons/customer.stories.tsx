import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { CustomerIcon } from "@/components/icons/customer/customer-icon";
import { CustomerMenuIcon } from "@/components/icons/customer/customer-menu-icon";
import { CustomerReadingIcon } from "@/components/icons/customer/customer-reading-icon";
import { CustomersIcon } from "@/components/icons/customer/customers-icon";
import { GivenHandCheckIcon } from "@/components/icons/customer/given-hand-check-icon";
import { HandToHandIcon } from "@/components/icons/customer/hand-to-hand-icon";
import { HandshakeIcon } from "@/components/icons/customer/handshake-icon";
import { WorkerPersonIcon } from "@/components/icons/customer/worker-person-icon";

const icons = [
  { Icon: CustomerIcon, name: "Customer" },
  { Icon: CustomerMenuIcon, name: "CustomerMenu" },
  { Icon: CustomerReadingIcon, name: "CustomerReading" },
  { Icon: CustomersIcon, name: "Customers" },
  { Icon: GivenHandCheckIcon, name: "GivenHandCheck" },
  { Icon: HandToHandIcon, name: "HandToHand" },
  { Icon: HandshakeIcon, name: "Handshake" },
  { Icon: WorkerPersonIcon, name: "WorkerPerson" },
];

const meta: Meta = {
  title: "Components/Icons/Customer",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
