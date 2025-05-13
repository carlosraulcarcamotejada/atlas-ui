import type { Meta, StoryObj } from "@storybook/react";
import { AppNavigation } from "@/components/ui/app-navigation";
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
      <AppNavigation.Item href="/" icon={<HomeIcon />} label="Inicio" />
      <AppNavigation.Item
        href="/search"
        icon={<MagnifyingGlassIcon />}
        label="Buscar"
      />
      <AppNavigation.Item
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
      <AppNavigation.Item href="/" icon={<HomeIcon />} label="Inicio" />
      <AppNavigation.Item
        href="/search"
        icon={<MagnifyingGlassIcon />}
        label="Buscar"
      />
      <AppNavigation.Item
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
      <AppNavigation.Item href="/" icon={<HomeIcon />} label="Inicio" />
      <AppNavigation.Item
        href="/search"
        icon={<MagnifyingGlassIcon />}
        label="Buscar"
      />
      <AppNavigation.Item
        href="/settings"
        icon={<SettingsIcon />}
        label="Setting"
      />
    </AppNavigation>
  ),
};
