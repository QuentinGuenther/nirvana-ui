export type tokensType = {
  colors: {
    text: string;
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
    small: string;
  };
  letterSpacings: {
    title: number;
    base: number;
    small: number;
  };
  wordSpacings: {
    title: number;
    base: number;
    small: number;
  };
  space: number[];
};

export const tokens: tokensType = {
  fontSizes: {
    title1: 36,
    title2: 30,
    title3: 26,
    base: 21,
    small: 16,
  },
  colors: {
    text: "rgb(29, 29, 31)",
  },
  space: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987],
  fontWeights: {
    light: 200,
    medium: 400,
    bold: 600,
  },
  lineHeights: {
    title: 1.7,
    base: 1.5,
    small: 1.5,
  },
  letterSpacings: {
    title: 0.012,
    base: 0.012,
    small: 0.012,
  },
  wordSpacings: {
    title: 0.016,
    base: 0.016,
    small: 0.016,
  },
  fontFamilies: {
    title: '"Libre Franklin", sans-serif',
    base: '"Inter", sans-serif',
    small: '"Inter", sans-serif',
  },
};
