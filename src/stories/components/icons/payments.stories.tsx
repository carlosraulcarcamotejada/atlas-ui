import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { BancaryInstitutionIcon } from "@/components/icons/payments/bancary-Institution-icon";
import { BulbIcon } from "@/components/icons/payments/bulb-icon";
import { CalculatorIcon } from "@/components/icons/payments/calculator-Icon";
import { CalendarCheckIcon } from "@/components/icons/payments/calendar-check-icon";
import { ChartsIcon } from "@/components/icons/payments/charts-Icon";
import { Charts2Icon } from "@/components/icons/payments/charts-2-icon";
import { DolarSignIcon } from "@/components/icons/payments/dolar-sign-icon";
import { GivenHandMoneyIcon } from "@/components/icons/payments/given-hand-money";
import { LempiraSignIcon } from "@/components/icons/payments/lempira-sign-icon";
import { PrintingCalculatorIcon } from "@/components/icons/payments/printing-calculator-icon";
import { ReceivingMoneyIcon } from "@/components/icons/payments/receiving-money-icon";
import { TransferIcon } from "@/components/icons/payments/transfer-icon";

const icons = [
  { Icon: BancaryInstitutionIcon, name: "BancaryInstitution" },
  { Icon: BulbIcon, name: "Bulb" },
  { Icon: CalculatorIcon, name: "Calculator" },
  { Icon: CalendarCheckIcon, name: "CalendarCheck" },
  { Icon: ChartsIcon, name: "Charts" },
  { Icon: Charts2Icon, name: "Charts2" },
  { Icon: DolarSignIcon, name: "DolarSign" },
  { Icon: GivenHandMoneyIcon, name: "GivenHandMoney" },
  { Icon: LempiraSignIcon, name: "LempiraSign" },
  { Icon: PrintingCalculatorIcon, name: "PrintingCalculator" },
  { Icon: ReceivingMoneyIcon, name: "ReceivingMoney" },
  { Icon: TransferIcon, name: "Transfer" },
];

const meta: Meta = {
  title: "Components/Icons/Payments",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
