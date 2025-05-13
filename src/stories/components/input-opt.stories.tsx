import type { Meta, StoryObj } from "@storybook/react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const meta: Meta<typeof InputOTP> = {
  title: "Components/InputOpt",
  component: InputOTP,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputOTP>;

export const InputOpt: Story = {
  render: () => (
    <InputOTP disabled={false} maxLength={5}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const InputOptDisabled: Story = {
  render: () => (
    <InputOTP disabled={true} maxLength={5}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
