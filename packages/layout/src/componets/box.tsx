import styled from "styled-components";
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

interface BoxProps extends ColorProps, LayoutProps, SpaceProps {}

export const Box = styled.div<BoxProps>`
  ${compose(space, layout, color)}
`;

Box.defaultProps = {
  backgroundColor: "red",
  width: "100px",
  height: "100px",
};
