import React from "react";
import { Container } from "./Container";

export default {
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Test = Template.bind({});
