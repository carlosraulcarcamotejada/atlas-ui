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

export const PrimaryMedium: Story = {
  render: () => (
    <Button>
      Atlántida
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineMedium: Story = {
  render: () => (
    <Button variant="outline">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const GhostMedium: Story = {
  render: () => (
    <Button variant="ghost">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const PrimaryMediumBlock: Story = {
  render: () => (
    <Button fullWidth>
      <ExampleIcon />
      Atlántida
    </Button>
  ),
};

export const OutlineMediumBlock: Story = {
  render: () => (
    <Button fullWidth variant="outline">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const GhostMediumBlock: Story = {
  render: () => (
    <Button fullWidth variant="ghost">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const PrimarySmall: Story = {
  render: () => (
    <Button size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const OutlineSmall: Story = {
  render: () => (
    <Button variant="outline" size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const GhostSmall: Story = {
  render: () => (
    <Button variant="ghost" size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const PrimarySmallBlock: Story = {
  render: () => (
    <Button fullWidth size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const OutlineSmallBlock: Story = {
  render: () => (
    <Button fullWidth variant="outline" size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const GhostSmallBlock: Story = {
  render: () => (
    <Button fullWidth variant="ghost" size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const PrimaryIconMedium: Story = {
  render: () => (
    <Button iconOnly size="md">
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineIconMedium: Story = {
  render: () => (
    <Button iconOnly size="md" variant="outline">
      <ExampleIcon />
    </Button>
  ),
};

export const GhostIconMedium: Story = {
  render: () => (
    <Button iconOnly size="md" variant="ghost">
      <ExampleIcon />
    </Button>
  ),
};

export const PrimaryIconSmall: Story = {
  render: () => (
    <Button iconOnly size="sm">
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineIconSmall: Story = {
  render: () => (
    <Button iconOnly size="sm" variant="outline">
      <ExampleIcon />
    </Button>
  ),
};

export const GhostIconSmall: Story = {
  render: () => (
    <Button iconOnly size="sm" variant="ghost">
      <ExampleIcon />
    </Button>
  ),
};

export const FabMedium: Story = {
  render: () => (
    <Button variant="fab" size="md">
      <ExampleIcon />
    </Button>
  ),
};

export const FabSmall: Story = {
  render: () => (
    <Button variant="fab" size="sm">
      <ExampleIcon />
    </Button>
  ),
};

export const QuickButtonMedium: Story = {
  render: () => (
    <Button variant="quick-button" size="md">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const QuickButtonSmall: Story = {
  render: () => (
    <Button variant="quick-button" size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const PrimaryMediumDisabled: Story = {
  render: () => (
    <Button disabled>
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const OutlineMediumDisabled: Story = {
  render: () => (
    <Button disabled variant="outline">
      Click me
    </Button>
  ),
};

export const GhostMediumDisabled: Story = {
  render: () => (
    <Button disabled variant="ghost">
      Click me
    </Button>
  ),
};

export const PrimarySmallDisabled: Story = {
  render: () => (
    <Button disabled size="sm">
      Click me
    </Button>
  ),
};

export const OutlineSmallDisabled: Story = {
  render: () => (
    <Button disabled variant="outline" size="sm">
      Click me
    </Button>
  ),
};

export const GhostSmallDisabled: Story = {
  render: () => (
    <Button disabled variant="ghost" size="sm">
      Click m
    </Button>
  ),
};

export const PrimaryIconMediumDisabled: Story = {
  render: () => (
    <Button disabled iconOnly size="md">
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineIconMediumDisabled: Story = {
  render: () => (
    <Button disabled iconOnly size="md" variant="outline">
      <ExampleIcon />
    </Button>
  ),
};

export const GhostIconMediumDisabled: Story = {
  render: () => (
    <Button disabled iconOnly size="md" variant="ghost">
      <ExampleIcon />
    </Button>
  ),
};

export const PrimaryIconSmallDisabled: Story = {
  render: () => (
    <Button disabled iconOnly size="sm">
      <ExampleIcon />
    </Button>
  ),
};

export const OutlineIconSmallDisabled: Story = {
  render: () => (
    <Button disabled iconOnly size="sm" variant="outline">
      <ExampleIcon />
    </Button>
  ),
};

export const GhostIconSmallDisabled: Story = {
  render: () => (
    <Button disabled iconOnly size="sm" variant="ghost">
      <ExampleIcon />
    </Button>
  ),
};

export const FabMediumDisabled: Story = {
  render: () => (
    <Button disabled variant="fab" size="md">
      <ExampleIcon />
    </Button>
  ),
};

export const FabSmallDisabled: Story = {
  render: () => (
    <Button disabled variant="fab" size="sm">
      <ExampleIcon />
    </Button>
  ),
};

export const QuickButtonMediumDisabled: Story = {
  render: () => (
    <Button disabled variant="quick-button" size="md">
      <ExampleIcon />
      Click me
    </Button>
  ),
};

export const QuickButtonSmallDisabled: Story = {
  render: () => (
    <Button disabled variant="quick-button" size="sm">
      <ExampleIcon />
      Click me
    </Button>
  ),
};
