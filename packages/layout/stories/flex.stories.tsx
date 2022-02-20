import * as React from "react";
import { Flex } from "../src/components/flex";
import { Box } from "layout/src/components/box";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Components / Layout / Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template = (args) => (
  <Flex {...args}>
    <Box width="40px" height="40px" backgroundColor="red" m={2} />
    <Box width="40px" height="40px" backgroundColor="green" m={2} />
    <Box width="40px" height="40px" backgroundColor="blue" m={2} />
  </Flex>
);

export const Vertical = Template.bind({});
Vertical.args = {
  flexDirection: "column",
};

export const Horizontal = Template.bind({});
Vertical.args = {
  flexDirection: "row",
};
