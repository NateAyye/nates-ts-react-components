import { CSSProperties, ColgroupHTMLAttributes } from 'react';

export interface DefalultColorTypes {
  [key: string]: CSSProperties['color'];
}

export interface DefaultTheme {
  type: 'light' | 'dark';
  className: string;
  theme: {
    colors: DefalultColorTypes;
    space: {};
    fontSizes: {};
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
    zIndices: {};
    breakpoints: {};
  };
}
