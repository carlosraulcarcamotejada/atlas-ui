import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/ui/alert";
import { ExampleIcon } from "@/components/icons/example/example-icon";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const WaringMD: Story = {
  render: () => (
    <Alert variant="error" size="sm" isOpen>
      <Alert.Icon>
        <ExampleIcon />
      </Alert.Icon>

      <Alert.Title>Error</Alert.Title>
      <Alert.Description>Algo salió mal. Intenta de nuevo.</Alert.Description>
    </Alert>
  ),
};
