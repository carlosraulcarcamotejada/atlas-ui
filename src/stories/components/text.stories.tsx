import type { Meta, StoryObj } from "@storybook/react";
import { Text, textVariants } from "@/components/ui/text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    variant: "display-l",
    as: "p",
    children: "Atlántida",
  },
};

export const TestingTextStyle: Story = {
  render: () => (
    <span className={textVariants({ variant: "display-l" })}>Atlántida</span>
  ),
};
