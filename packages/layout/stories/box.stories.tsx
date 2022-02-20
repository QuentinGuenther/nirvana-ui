import * as React from "react";
import { ComponentMeta } from "@storybook/react";
import { Box } from "../src/components/box";

export default {
  title: "Components / Layout / Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Box>;

const Template = (args) => <Box {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  backgroundColor: "#00FF00",
};
