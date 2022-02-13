import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "../src/componets/text";

export default {
  title: "Typography/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Paragraph: ComponentStory<typeof Text> = () => (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est
    eu tempor sollicitudin. Aenean nisl tortor, tempor eu magna in, facilisis
    ornare felis. Aliquam tristique eros maximus, posuere felis eu, euismod
    augue. Nunc tellus dui, malesuada eu magna molestie, consequat suscipit
    mauris. Sed volutpat euismod dignissim. Phasellus lacinia mi non nisl rutrum
    pellentesque. Sed fermentum odio sed orci lobortis accumsan. Vestibulum
    suscipit mollis odio. Suspendisse iaculis porttitor fringilla. Donec vitae
    magna nec nisl accumsan pulvinar. Donec mattis urna eu libero sollicitudin,
    ac euismod quam consequat. Praesent ultricies ultrices enim, et maximus
    mauris vulputate in. Ut ornare ut libero sed faucibus.
  </Text>
);

export const MultiParagraph: ComponentStory<typeof Text> = () => (
  <>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est
      eu tempor sollicitudin. Aenean nisl tortor, tempor eu magna in, facilisis
      ornare felis. Aliquam tristique eros maximus, posuere felis eu, euismod
      augue. Nunc tellus dui, malesuada eu magna molestie, consequat suscipit
      mauris. Sed volutpat euismod dignissim. Phasellus lacinia mi non nisl
      rutrum pellentesque. Sed fermentum odio sed orci lobortis accumsan.
      Vestibulum suscipit mollis odio. Suspendisse iaculis porttitor fringilla.
      Donec vitae magna nec nisl accumsan pulvinar. Donec mattis urna eu libero
      sollicitudin, ac euismod quam consequat. Praesent ultricies ultrices enim,
      et maximus mauris vulputate in. Ut ornare ut libero sed faucibus.
    </Text>
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
