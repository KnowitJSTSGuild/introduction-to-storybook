import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DefaultLogo = Template.bind({});

export const BigLogo = Template.bind({});
BigLogo.args = {
  size: "64",
};
