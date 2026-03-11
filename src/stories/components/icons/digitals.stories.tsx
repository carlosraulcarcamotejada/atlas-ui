import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { BubbleQuestionIcon } from "@/components/icons/digitals/bubble-question-icon";
import { CircleChevronLeftIcon } from "@/components/icons/digitals/circle-chevron-left-icon";
import { ClockIcon } from "@/components/icons/digitals/clock-icon";
import { DotLocationIcon } from "@/components/icons/digitals/dot-location-icon";
import { DownloadIcon } from "@/components/icons/digitals/download-icon";
import { LaptopIcon } from "@/components/icons/digitals/laptop-icon";
import { LetterIcon } from "@/components/icons/digitals/letter-icon";
import { MobilePhoneIcon } from "@/components/icons/digitals/mobile-phone-icon";
import { PadlockIcon } from "@/components/icons/digitals/padlock-icon";
import { PencilIcon } from "@/components/icons/digitals/pencil-icon";
import { PencilOnPaperIcon } from "@/components/icons/digitals/pencil-on-paper-icon";
import { ShieldIcon } from "@/components/icons/digitals/shield-icon";
import { SpinnerIcon } from "@/components/icons/digitals/spinner-icon";
import { TargetShootingIcon } from "@/components/icons/digitals/target-shooting-icon";
import { TraditionalPhoneIcon } from "@/components/icons/digitals/traditional-phone-Icon";

const icons = [
  { Icon: BubbleQuestionIcon, name: "BubbleQuestion" },
  { Icon: CircleChevronLeftIcon, name: "CircleChevronLeft" },
  { Icon: ClockIcon, name: "Clock" },
  { Icon: DotLocationIcon, name: "DotLocation" },
  { Icon: DownloadIcon, name: "Download" },
  { Icon: LaptopIcon, name: "Laptop" },
  { Icon: LetterIcon, name: "Letter" },
  { Icon: MobilePhoneIcon, name: "MobilePhone" },
  { Icon: PadlockIcon, name: "Padlock" },
  { Icon: PencilIcon, name: "Pencil" },
  { Icon: PencilOnPaperIcon, name: "PencilOnPaper" },
  { Icon: ShieldIcon, name: "Shield" },
  { Icon: SpinnerIcon, name: "Spinner" },
  { Icon: TargetShootingIcon, name: "TargetShooting" },
  { Icon: TraditionalPhoneIcon, name: "TraditionalPhone" },
];

const meta: Meta = {
  title: "Components/Icons/Digitals",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
