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
  args: {
    children: (
      <>
        <ExampleIcon />
        Atlántida
      </>
    ),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Click me",
    variant: "tertiary",
  },
};

export const PrimarySmall: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "sm",
  },
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
