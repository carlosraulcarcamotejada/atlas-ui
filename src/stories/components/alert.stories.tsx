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
    <Alert isOpen={true}>
      <ExampleIcon />
      <span>You can add components to your app using the CLI.</span>
      <a>Mas información</a>
    </Alert>
  ),
};

export const SuccessMD: Story = {
  render: () => (
    <Alert variant="success" isOpen={true}>
      <ExampleIcon />
      <span>You can add components to your app using the CLI.</span>
      <a>Mas información</a>
    </Alert>
  ),
};

export const ErrorMD: Story = {
  render: () => (
    <Alert variant="error" isOpen={true}>
      <ExampleIcon />
      <span>You can add components to your app using the CLI.</span>
      <a>Mas información</a>
    </Alert>
  ),
};

export const WaringSmall: Story = {
  render: () => (
    <Alert isOpen={true} size="sm">
      <ExampleIcon />
      <span>You can add components to your app using the CLI.</span>
      <a>Mas información</a>
    </Alert>
  ),
};

export const SuccessSmall: Story = {
  render: () => (
    <Alert variant="success" isOpen={true} size="sm">
      <ExampleIcon />
      <span>You can add components to your app using the CLI.</span>
      <a>Mas información</a>
    </Alert>
  ),
};

export const ErrorSmall: Story = {
  render: () => (
    <Alert variant="error" isOpen={true} size="sm">
      <ExampleIcon />
      <span>You can add components to your app using the CLI.</span>
      <a>Mas información</a>
    </Alert>
  ),
};
