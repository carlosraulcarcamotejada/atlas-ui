import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const BadgeMedium: Story = {
  render: () => (
    <Badge content={5}>
      <Avatar>
        <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_kS_s6ERSLWmsZTqzs87cdd8p5qLaO-g78_VL_x7f0sPO8=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
    </Badge>
  ),
};

export const BadgeSmall: Story = {
  render: () => (
    <Badge size="sm" content="5">
      <Avatar>
        <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_kS_s6ERSLWmsZTqzs87cdd8p5qLaO-g78_VL_x7f0sPO8=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
    </Badge>
  ),
};

export const BadgeMediumWord: Story = {
  render: () => (
    <Badge content="Badge">
      <Avatar>
        <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_kS_s6ERSLWmsZTqzs87cdd8p5qLaO-g78_VL_x7f0sPO8=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
    </Badge>
  ),
};

export const BadgeSmallWord: Story = {
  render: () => (
    <Badge size="sm" content="Badge">
      <Avatar>
        <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_kS_s6ERSLWmsZTqzs87cdd8p5qLaO-g78_VL_x7f0sPO8=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
    </Badge>
  ),
};

export const BadgeWithoutChild: Story = {
  render: () => <Badge content={5} />,
};
