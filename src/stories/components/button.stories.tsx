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

export const Secondary: Story = {
  render: () => <Button variant="secondary">Click me</Button>,
};

export const Tertiary: Story = {
  args: {
    children: "Click me",
    variant: "tertiary",
  },
};

export const PrimarySmall: Story = {
  render: () => (
    <Button variant="primary" size="sm">
      Click me
    </Button>
  ),
};

export const SecondarySmall: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
    size: "sm",
  },
};

export const TertiarySmall: Story = {
  args: {
    children: "Click me",
    variant: "tertiary",
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

export const SecondaryIconMedium: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-md",
    variant: "secondary",
  },
  render: (args) => <Button {...args} />,
};

export const TertiaryIconMedium: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-md",
    variant: "tertiary",
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

export const SecondaryIconSmall: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-sm",
    variant: "secondary",
  },
  render: (args) => <Button {...args} />,
};

export const TertiaryIconSmall: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "icon-sm",
    variant: "tertiary",
  },
  render: (args) => <Button {...args} />,
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

export const SecondaryDisabled: Story = {
  args: {
    disabled: true,
    children: "Click me",
    variant: "secondary",
  },
};

export const TertiaryDisabled: Story = {
  args: {
    disabled: true,
    children: "Click me",
    variant: "tertiary",
  },
};

export const PrimaryFabMedium: Story = {
  render: () => (
    <Button variant="primary" size="fab-md">
      <ExampleIcon />
    </Button>
  ),
};

export const SecondaryFabMedium: Story = {
  render: () => (
    <Button variant="secondary" size="fab-md">
      <ExampleIcon />
    </Button>
  ),
};

export const TertiaryFabMedium: Story = {
  render: () => (
    <Button variant="tertiary" size="fab-md">
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

export const SecondaryFabSmall: Story = {
  render: () => (
    <Button variant="secondary" size="fab-sm">
      <ExampleIcon />
    </Button>
  ),
};

export const TertiaryFabSmall: Story = {
  render: () => (
    <Button variant="tertiary" size="fab-sm">
      <ExampleIcon />
    </Button>
  ),
};
