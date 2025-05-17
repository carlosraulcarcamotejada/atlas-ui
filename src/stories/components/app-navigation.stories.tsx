import type { Meta, StoryObj } from "@storybook/react";
import {
  AppNavigation,
  AppNavigationItem,
} from "@/components/ui/app-navigation";
import { MagnifyingGlassIcon } from "@/components/icons/user-interface/magnifying-glass-icon";
import { HomeIcon } from "@/components/icons/user-interface/home-icon";
import { SettingsIcon } from "@/components/icons/user-interface/settings-icon";

const meta: Meta<typeof Text> = {
  title: "Components/AppNavigation",
  component: AppNavigation,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AppNavigation>;

export const SelectedFirsOption: Story = {
  render: () => (
    <AppNavigation>
      <AppNavigationItem href="/" icon={<HomeIcon />} label="Inicio" />
      <AppNavigationItem
        href="/search"
        icon={<MagnifyingGlassIcon />}
        label="Buscar"
      />
      <AppNavigationItem
        href="/settings"
        icon={<SettingsIcon />}
        label="Setting"
      />
    </AppNavigation>
  ),
};

export const SelectedSecondOption: Story = {
  render: () => (
    <AppNavigation activePath="/search">
      <AppNavigationItem href="/" icon={<HomeIcon />} label="Inicio" />
      <AppNavigationItem
        href="/search"
        icon={<MagnifyingGlassIcon />}
        label="Buscar"
      />
      <AppNavigationItem
        href="/settings"
        icon={<SettingsIcon />}
        label="Setting"
      />
    </AppNavigation>
  ),
};

export const SelectedThirdOption: Story = {
  render: () => (
    <AppNavigation activePath="/settings">
      <AppNavigationItem href="/" icon={<HomeIcon />} label="Inicio" />
      <AppNavigationItem
        href="/search"
        icon={<MagnifyingGlassIcon />}
        label="Buscar"
      />
      <AppNavigationItem
        href="/settings"
        icon={<SettingsIcon />}
        label="Setting"
      />
    </AppNavigation>
  ),
};
