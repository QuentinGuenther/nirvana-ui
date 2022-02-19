import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../src/componets/box";

export default {
  title: "Layout/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const Paragraph: ComponentStory<typeof Box> = () => (
  <Box height={"300px"} />
);
