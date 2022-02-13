import * as React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { tokens, tokensType } from "./tokens";

interface ThemeProviderProps {
  theme?: tokensType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = tokens,
  children,
}) => <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
