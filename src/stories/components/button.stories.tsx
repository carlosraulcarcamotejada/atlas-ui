import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { ExampleIcon } from "@/components/icons/example-icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <Button variant="primary">
      <ExampleIcon />
      Atlántida
    </Button>
  ),
};

export const Outline: Story = {
  render: () => <Button variant="outline">Click me</Button>,
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  },
};

export const PrimarySmall: Story = {
  render: () => (
    <Button variant="primary" size="sm">
      Click me
    </Button>
  ),
};

export const OutlineSmall: Story = {
  args: {
    children: "Click me",
    variant: "outline",
    size: "sm",
  },
};

export const GhostSmall: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
    size: "sm",
  },
};

export const PrimaryIconMedium: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-md",
    variant: "primary",
  },
  render: (args) => <Button {...args} />,
};

export const OutlineIconMedium: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-md",
    variant: "outline",
  },
  render: (args) => <Button {...args} />,
};

export const GhostIconMedium: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-md",
    variant: "ghost",
  },
  render: (args) => <Button {...args} />,
};

export const PrimaryIconSmall: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-sm",
    variant: "primary",
  },
  render: (args) => <Button {...args} />,
};

export const OutlineIconSmall: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-sm",
    variant: "outline",
  },
  render: (args) => <Button {...args} />,
};

export const GhostIconSmall: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-sm",
    variant: "ghost",
  },
  render: (args) => <Button {...args} />,
};

export const PrimaryFabMedium: Story = {
  render: () => (
    <Button variant="primary" size="fab-md">
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineFabMedium: Story = {
  render: () => (
    <Button variant="outline" size="fab-md">
      <ExampleIcon />
    </Button>
  ),
};

export const GhostFabMedium: Story = {
  render: () => (
    <Button variant="ghost" size="fab-md">
      <ExampleIcon />
    </Button>
  ),
};

export const PrimaryFabSmall: Story = {
  render: () => (
    <Button variant="primary" size="fab-sm">
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineFabSmall: Story = {
  render: () => (
    <Button variant="outline" size="fab-sm">
      <ExampleIcon />
    </Button>
  ),
};

export const GhostFabSmall: Story = {
  render: () => (
    <Button variant="ghost" size="fab-sm">
      <ExampleIcon />
    </Button>
  ),
};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <ExampleIcon />
        Atlántida
      </>
    ),
    variant: "primary",
  },
};

export const OutlineDisabled: Story = {
  args: {
    disabled: true,
    children: "Click me",
    variant: "outline",
  },
};

export const GhostDisabled: Story = {
  args: {
    disabled: true,
    children: "Click me",
    variant: "ghost",
  },
};
