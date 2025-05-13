import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Text>;

export const AvatarMediumDefault: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarSmallDefault: Story = {
  render: () => (
    <Avatar size="sm">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarMediumOnline: Story = {
  render: () => (
    <Avatar status="online">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarSmallonline: Story = {
  render: () => (
    <Avatar size="sm" status="online">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarMediumDefaultWithoutPhoto: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.pngss" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarSmallDefaultWithoutPhoto: Story = {
  render: () => (
    <Avatar size="sm">
      <AvatarImage src="https://github.com/shadcn.pngss" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarMediumDefaultWithoutPhotoOnline: Story = {
  render: () => (
    <Avatar status="online">
      <AvatarImage src="https://github.com/shadcn.pngss" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarSmallDefaultWithoutPhotoOnline: Story = {
  render: () => (
    <Avatar size="sm" status="online">
      <AvatarImage src="https://github.com/shadcn.pngss" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
