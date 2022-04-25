import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Submit } from "./Submit";

export default {
  title: "MyComponents/Submit",
  component: Submit,
};

const Template: ComponentStory<typeof Submit> = (args) => <Submit {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
