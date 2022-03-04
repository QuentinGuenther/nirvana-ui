export type tokensType = {
  colors: {
    text: {
      dark: string;
    };
    background: {
      light: string;
    };
  };
  fontSizes: {
    title1: number;
    title2: number;
    title3: number;
    base: number;
    small: number;
  };
  fontWeights: {
    light: number;
    medium: number;
    bold: number;
  };
  lineHeights: {
    title: number;
    base: number;
    small: number;
  };
  fontFamilies: {
    title: string;
    base: string;
    monospace: string;
  };
  letterSpacings: {
    title: number;
    base: number;
    monospace: number;
  };
  wordSpacings: {
    title: number;
    base: number;
    monospace: number;
  };
  space: {
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    paragraph: number;
  };
};

export const tokens: tokensType = {
  fontSizes: {
    title1: 31,
    title2: 26,
    title3: 22,
    base: 18,
    small: 16,
  },
  colors: {
    text: {
      dark: "rgb(29, 29, 31)",
    },
    background: {
      light: "rgb(50, 50, 50)",
    },
  },
  space: {
    xsmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 36,
    paragraph: 800,
  },
  fontWeights: {
    light: 200,
    medium: 400,
    bold: 600,
  },
  lineHeights: {
    title: 1.125,
    base: 1.5,
    small: 1.5,
  },
  letterSpacings: {
    title: 0.012,
    base: 0.012,
    monospace: 0.012,
  },
  wordSpacings: {
    title: 0.016,
    base: 0.016,
    monospace: 0.016,
  },
  fontFamilies: {
    title: '"Libre Franklin", sans-serif',
    base: '"Inter", sans-serif',
    monospace: '"Inter", sans-serif',
  },
};
