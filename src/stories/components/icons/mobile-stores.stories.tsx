import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { AppleAppStoreIcon } from "@/components/icons/mobile-stores/apple-app-store-icon";
import { GooglePlayStoreIcon } from "@/components/icons/mobile-stores/google-play-store-icon";
import { HuaweiStoreIcon } from "@/components/icons/mobile-stores/huawei-store-icon";

const icons = [
  { Icon: AppleAppStoreIcon, name: "AppleAppStore" },
  { Icon: GooglePlayStoreIcon, name: "GooglePlayStore" },
  { Icon: HuaweiStoreIcon, name: "HuaweiStore" },
];

const meta: Meta = {
  title: "Components/Icons/Mobile Stores",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
