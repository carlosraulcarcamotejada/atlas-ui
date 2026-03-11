import type { Meta, StoryObj } from "@storybook/react";
import { IconGrid } from "./IconGrid";
import { AbiIcon } from "@/components/icons/social-media/abi-Icon";
import { FacebookIcon } from "@/components/icons/social-media/facebook-icon";
import { InstagramIcon } from "@/components/icons/social-media/instagram-icon";
import { LinkedinIcon } from "@/components/icons/social-media/linkedin-icon";
import { MessengerIcon } from "@/components/icons/social-media/messenger-icon";
import { TiktokIcon } from "@/components/icons/social-media/tiktok-icon";
import { TwitterIcon } from "@/components/icons/social-media/twitter-icon";
import { WhatsappIcon } from "@/components/icons/social-media/whatsapp-icon";
import { XTwitterIcon } from "@/components/icons/social-media/x-twitter-icon";
import { YoutubeIcon } from "@/components/icons/social-media/youtube-icon";

const icons = [
  { Icon: AbiIcon, name: "Abi" },
  { Icon: FacebookIcon, name: "Facebook" },
  { Icon: InstagramIcon, name: "Instagram" },
  { Icon: LinkedinIcon, name: "Linkedin" },
  { Icon: MessengerIcon, name: "Messenger" },
  { Icon: TiktokIcon, name: "Tiktok" },
  { Icon: TwitterIcon, name: "Twitter" },
  { Icon: WhatsappIcon, name: "Whatsapp" },
  { Icon: XTwitterIcon, name: "XTwitter" },
  { Icon: YoutubeIcon, name: "Youtube" },
];

const meta: Meta = {
  title: "Components/Icons/Social Media",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const All: Story = {
  render: () => <IconGrid icons={icons} />,
};
