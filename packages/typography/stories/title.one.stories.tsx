import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "../src/componets/text";
import { Title } from "../src/componets/heading";

export default {
  title: "Typography/Title/One",
  component: Title.One,
} as ComponentMeta<typeof Title.One>;

export const TitleOne: ComponentStory<typeof Title.One> = () => (
  <Title.One>Lorem ipsum dolor sit amet</Title.One>
);

export const Title1WithParagraph: ComponentStory<typeof Text> = () => (
  <>
    <Title.One>Lorem ipsum dolor sit amet</Title.One>
    <Text>
      Nam a turpis urna. Proin nec pharetra turpis, eget euismod nunc. Aliquam
      pharetra ut odio ac suscipit. Vivamus eu lacinia turpis. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Nullam et dolor ac magna auctor egestas. Vestibulum non turpis
      purus. Fusce at magna vel est ullamcorper egestas. Quisque a elit ac nibh
      rhoncus varius non nec felis. Curabitur non leo nisi. Nunc semper aliquam
      dictum. Aenean et dignissim odio. Cras neque velit, ultricies eu sodales
      nec, auctor a massa. Ut at dignissim lacus. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus.
    </Text>
  </>
);
