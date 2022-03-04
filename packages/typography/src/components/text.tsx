import styled from "styled-components";
import { color, ColorProps } from "styled-system";

export const Text = styled.p<ColorProps>`
  font-family: ${(props) => props.theme.fontFamilies.base};
  color: ${(props) => props.theme.colors.text.dark};
  max-width: ${(props) => props.theme.space.paragraph}px;
  padding-bottom: ${(props) => props.theme.space.large}px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.base}px;
  line-height: ${(props) => props.theme.lineHeights.body};
  letter-spacing: ${(props) => props.theme.letterSpacings.base}em;
  word-spacing: ${(props) => props.theme.wordSpacings.base}em;
`;
