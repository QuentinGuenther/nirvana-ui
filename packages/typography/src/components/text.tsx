import styled from "styled-components";
import { color, ColorProps } from "styled-system";

export const Text = styled.p<ColorProps>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap");
  font-family: ${(props) => props.theme.fontFamilies.base};
  color: ${(props) => props.theme.colors.text};
  max-width: ${(props) => props.theme.space[15]}px;
  padding-bottom: ${(props) => props.theme.space[9]}px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.base}px;
  line-height: ${(props) => props.theme.lineHeights.body};
  letter-spacing: ${(props) => props.theme.letterSpacings.base}em;
  word-spacing: ${(props) => props.theme.wordSpacings.base}em;
`;
