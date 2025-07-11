import type { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/ui/alert";
import { ExampleIcon } from "@/components/icons/example-icon";

const meta: Meta<typeof Alert> = {
  title: "Components/UI/Alert",
  component: Alert,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const WaringMD: Story = {
  render: () => (
    <Alert variant="error" size="sm" isOpen>
      <AlertIcon>
        <ExampleIcon />
      </AlertIcon>

      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Algo salió mal. Intenta de nuevo.</AlertDescription>
    </Alert>
  ),
};
