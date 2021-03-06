import styled, { css } from "styled-components";

const baseStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap");
  font-family: ${(props) => props.theme.fontFamilies.title};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.title};
  letter-spacing: ${(props) => props.theme.letterSpacings.title}em;
  word-spacing: ${(props) => props.theme.wordSpacings.title}em;
`;

const Title1 = styled.h1`
  ${baseStyles}
  font-size: ${(props) => props.theme.fontSizes.title1}px;
  padding-bottom: ${(props) => props.theme.space[8]}px;
`;

const Title2 = styled.h2`
  ${baseStyles};
  font-size: ${(props) => props.theme.fontSizes.title2}px;
  padding-bottom: ${(props) => props.theme.space[7]}px;
`;

const Title3 = styled.h3`
  ${baseStyles};
  font-size: ${(props) => props.theme.fontSizes.title3}px;
  padding-bottom: ${(props) => props.theme.space[6]}px;
`;

export const Title = {
  One: Title1,
  Two: Title2,
  Three: Title3,
};
