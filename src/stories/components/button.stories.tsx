import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { ExampleIcon } from "@/components/icons/example/example-icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
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


export const PrimaryTextAndIcon: Story = {
  args: {
    children: (
      <>
        Click me
        <ExampleIcon />
      </>
    ),
    size: "md",
  },
  render: (args) => <Button {...args} />,
};

export const PrimarySmallTextAndIcon: Story = {
  args: {
    children: (
      <>
        Click me
        <ExampleIcon />
      </>
    ),
    size: "sm",
  },
  render: (args) => <Button {...args} />,
};

export const PrimaryJustIcon: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "md",
  },
  render: (args) => <Button {...args} />,
};

export const PrimarySmallJustIcon: Story = {
  args: {
    children: (
      <>
        <ExampleIcon />
      </>
    ),
    size: "sm",
  },
  render: (args) => <Button {...args} />,
};
