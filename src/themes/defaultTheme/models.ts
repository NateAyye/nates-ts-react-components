import { CSSProperties } from 'react';

export interface DefalultColorTypes {
  [key: string]: CSSProperties['color'];
}

export interface DefaultTheme {
  type: 'light' | 'dark';
  className: string;
  theme: {
    colors: DefalultColorTypes;
    space: {};
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
      '8xl': string;
      '9xl': string;
    };
    fonts: {
      [K: string]: string;
    };
    fontWeights: {
      [K: string]: number;
    };
    lineHeights: {};
    letterSpacings: {};
    sizes: {};
    borderWidths: {};
    borderStyles: {};
    radii: {};
    shadows: {};
    zIndices: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
      max: string;
    };
    breakpoints: {};
  };
}
