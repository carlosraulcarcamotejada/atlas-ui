import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { CalendarIcon } from "@/components/icons/user-interface/calendar-icon";
import { CheckIcon } from "@/components/icons/user-interface/check-icon";
import { CopyIcon } from "@/components/icons/user-interface/copy-icon";
import { ErrorIcon } from "@/components/icons/user-interface/error-icon";
import { EyeIcon } from "@/components/icons/user-interface/eye-icon";
import { FavoriteIcon } from "@/components/icons/user-interface/favorite-icon";
import { GearIcon } from "@/components/icons/user-interface/gear-icon";
import { HideIcon } from "@/components/icons/user-interface/hide-icon";
import { HomeIcon } from "@/components/icons/user-interface/home-icon";
import { ImageIcon } from "@/components/icons/user-interface/image-icon";
import { MagnifyingGlassIcon } from "@/components/icons/user-interface/magnifying-glass-icon";
import { MenuExpandibleIcon } from "@/components/icons/user-interface/menu-expandible-icon";
import { MenuIcon } from "@/components/icons/user-interface/menu-icon";
import { MinusIcon } from "@/components/icons/user-interface/minus-icon";
import { PlusIcon } from "@/components/icons/user-interface/plus-icon";
import { SettingsIcon } from "@/components/icons/user-interface/settings-icon";
import { SlashIcon } from "@/components/icons/user-interface/slash-icon";
import { StarIcon } from "@/components/icons/user-interface/star-icon";
import { TrashIcon } from "@/components/icons/user-interface/trash-icon";
import { UpCloudIcon } from "@/components/icons/user-interface/up-cloud-icon";
import { UserIcon } from "@/components/icons/user-interface/user-icon";
import { WarningIcon } from "@/components/icons/user-interface/warning-icon";
import { XIcon } from "@/components/icons/user-interface/x-icon";

const icons = [
  { Icon: CalendarIcon, name: "Calendar" },
  { Icon: CheckIcon, name: "Check" },
  { Icon: CopyIcon, name: "Copy" },
  { Icon: ErrorIcon, name: "Error" },
  { Icon: EyeIcon, name: "Eye" },
  { Icon: FavoriteIcon, name: "Favorite" },
  { Icon: GearIcon, name: "Gear" },
  { Icon: HideIcon, name: "Hide" },
  { Icon: HomeIcon, name: "Home" },
  { Icon: ImageIcon, name: "Image" },
  { Icon: MagnifyingGlassIcon, name: "MagnifyingGlass" },
  { Icon: MenuExpandibleIcon, name: "MenuExpandible" },
  { Icon: MenuIcon, name: "Menu" },
  { Icon: MinusIcon, name: "Minus" },
  { Icon: PlusIcon, name: "Plus" },
  { Icon: SettingsIcon, name: "Settings" },
  { Icon: SlashIcon, name: "Slash" },
  { Icon: StarIcon, name: "Star" },
  { Icon: TrashIcon, name: "Trash" },
  { Icon: UpCloudIcon, name: "UpCloud" },
  { Icon: UserIcon, name: "User" },
  { Icon: WarningIcon, name: "Warning" },
  { Icon: XIcon, name: "X" },
];

const meta: Meta = {
  title: "Components/Icons/User Interface",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
