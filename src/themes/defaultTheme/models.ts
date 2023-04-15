import { CSSProperties } from 'react';

export interface DefalultColorTypes {
  [key: string]: CSSProperties['color'];
}

export interface DefaultTheme {
  type: 'light' | 'dark';
  className: string;
  theme: {
    colors: {
      white: string;
      black: string;

      background: string;
      backgroundAlpha: string;
      foreground: string;
      backgroundContrast: string;

      blue50: string;
      blue100: string;
      blue200: string;
      blue300: string;
      blue400: string;
      blue500: string;
      blue600: string;
      blue700: string;
      blue800: string;
      blue900: string;

      purple50: string;
      purple100: string;
      purple200: string;
      purple300: string;
      purple400: string;
      purple500: string;
      purple600: string;
      purple700: string;
      purple800: string;
      purple900: string;

      green50: string;
      green100: string;
      green200: string;
      green300: string;
      green400: string;
      green500: string;
      green600: string;
      green700: string;
      green800: string;
      green900: string;

      yellow50: string;
      yellow100: string;
      yellow200: string;
      yellow300: string;
      yellow400: string;
      yellow500: string;
      yellow600: string;
      yellow700: string;
      yellow800: string;
      yellow900: string;

      red50: string;
      red100: string;
      red200: string;
      red300: string;
      red400: string;
      red500: string;
      red600: string;
      red700: string;
      red800: string;
      red900: string;

      cyan50: string;
      cyan100: string;
      cyan200: string;
      cyan300: string;
      cyan400: string;
      cyan500: string;
      cyan600: string;
      cyan700: string;
      cyan800: string;
      cyan900: string;

      pink50: string;
      pink100: string;
      pink200: string;
      pink300: string;
      pink400: string;
      pink500: string;
      pink600: string;
      pink700: string;
      pink800: string;
      pink900: string;

      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;

      primaryLight: string;
      primaryLightHover: string;
      primaryLightActive: string;
      primaryLightContrast: string;
      primary: string;
      primaryBorder: string;
      primaryBorderHover: string;
      primarySolidHover: string;
      primarySolidContrast: string;
      primaryShadow: string;

      secondaryLight: string;
      secondaryLightHover: string;
      secondaryLightActive: string;
      secondaryLightContrast: string;
      secondary: string;
      secondaryBorder: string;
      secondaryBorderHover: string;
      secondarySolidHover: string;
      secondarySolidContrast: string;
      secondaryShadow: string;

      successLight: string;
      successLightHover: string;
      successLightActive: string;
      successLightContrast: string;
      success: string;
      successBorder: string;
      successBorderHover: string;
      successSolidHover: string;
      successSolidContrast: string;
      successShadow: string;

      warningLight: string;
      warningLightHover: string;
      warningLightActive: string;
      warningLightContrast: string;
      warning: string;
      warningBorder: string;
      warningBorderHover: string;
      warningSolidHover: string;
      warningSolidContrast: string;
      warningShadow: string;

      errorLight: string;
      errorLightHover: string;
      errorLightActive: string;
      errorLightContrast: string;
      error: string;
      errorBorder: string;
      errorBorderHover: string;
      errorSolidHover: string;
      errorSolidContrast: string;
      errorShadow: string;
    };
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
