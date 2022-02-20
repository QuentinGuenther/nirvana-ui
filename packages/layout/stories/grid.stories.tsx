import * as React from "react";
import { Grid } from "../src/components/grid";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Components / Layout / Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template = (args) => (
  <Grid display="grid" height="100vh" {...args}>
    <Grid gridArea="header" backgroundColor="red" />
    <Grid gridArea="main" backgroundColor="green" />
    <Grid gridArea="sidebar" backgroundColor="blue" />
    <Grid gridArea="footer" backgroundColor="orange" />
  </Grid>
);

export const Basic = Template.bind({});
Basic.args = {
  gridTemplateAreas: ` 
  "header header header header"
  "sidebar main main main"
  "sidebar main main main"
  "footer footer footer footer"  
  `,
};
