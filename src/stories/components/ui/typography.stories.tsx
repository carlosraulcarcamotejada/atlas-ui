import type { Meta, StoryObj } from "@storybook/react";
import { Typography, typographyVariants } from "@/components/ui/typography";

const meta: Meta<typeof Typography> = {
  title: "Components/UI/Typography",
  component: Typography,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Text>;

export const DisplayLBold: Story = {
  render: () => (
    <Typography as="h1" variant="display-l" weight="bold">
      Atlántida
    </Typography>
  ),
};

export const TestingTextStyle: Story = {
  render: () => (
    <span className={typographyVariants({ variant: "display-l" })}>
      Atlántida
    </span>
  ),
};
