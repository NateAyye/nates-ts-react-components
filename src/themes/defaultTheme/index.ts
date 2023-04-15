import { DefaultTheme } from './models';

export const defaultTheme: DefaultTheme = {
  type: 'light',
  className: '', // optional
  theme: {
    colors: {
      // generic colors
      white: '#ffffff',
      black: '#000000',

      // background colors (light)
      background: '#fff',
      backgroundAlpha: 'rgba(255, 255, 255, 0.8)', // used for semi-transparent backgrounds like the navbar
      foreground: '#000',
      backgroundContrast: '#fff',

      //semantic colors (light)

      // Blues
      blue50: '#10253E',
      blue100: '#102C4C',
      blue200: '#0F3158',
      blue300: '#0D3868',
      blue400: '#0A4281',
      blue500: '#0952A5',
      blue600: '#0072F5',
      blue700: '#3694FF',
      blue800: '#3694FF',
      blue900: '#EAF4FF',

      // Purple
      purple50: '#1F0A33',
      purple100: '#240C3C',
      purple200: '#2E0F4D',
      purple300: '#3B1362',
      purple400: '#451773',
      purple500: '#571D91',
      purple600: '#7828C8',
      purple700: '#9750DD',
      purple800: '#B583E7',
      purple900: '#F7ECFC',

      // Green
      green50: '#042F14',
      green100: '#06381B',
      green200: '#074A24',
      green300: '#0A6130',
      green400: '#0B7439',
      green500: '#0F9549',
      green600: '#17C964',
      green700: '#41EC8B',
      green800: '#78F2AD',
      green900: '#ECFDF4',

      // Yellow
      yellow50: '#3A2503',
      yellow100: '#442B03',
      yellow200: '#583804',
      yellow300: '#704705',
      yellow400: '#845306',
      yellow500: '#A66908',
      yellow600: '#F5A524',
      yellow700: '#F6AD37',
      yellow800: '#F8C572',
      yellow900: '#FEF7EC',

      // Reds
      red50: '#300313',
      red100: '#300313',
      red200: '#44041A',
      red300: '#5C0523',
      red400: '#6F062B',
      red500: '#910838',
      red600: '#F31260',
      red700: '#F4256D',
      red800: '#F75F94',
      red900: '#FDD8E5',

      // Cyan
      cyan50: '#012A32',
      cyan100: '#023A46',
      cyan200: '#024B5A',
      cyan300: '#036072',
      cyan400: '#037086',
      cyan500: '#048EA9',
      cyan600: '#06B7DB',
      cyan700: '#33D9FA',
      cyan800: '#6FE4FB',
      cyan900: '#EBFBFE',

      // Pink
      pink50: '#330025',
      pink100: '#470033',
      pink200: '#5C0042',
      pink300: '#750054',
      pink400: '#8A0063',
      pink500: '#AD007C',
      pink600: '#FF4ECD',
      pink700: '#FF2EC4',
      pink800: '#FF6BD5',
      pink900: '#FFEBF9',

      // Gray
      gray50: '#16181A',
      gray100: '#26292B',
      gray200: '#2B2F31',
      gray300: '#313538',
      gray400: '#3A3F42',
      gray500: '#4C5155',
      gray600: '#697177',
      gray700: '#787F85',
      gray800: '#9BA1A6',
      gray900: '#ECEDEE',

      // brand colors
      primaryLight: '#0F3158',
      primaryLightHover: '#0D3868', // commonly used on hover state
      primaryLightActive: '#0A4281', // commonly used on pressed state
      primaryLightContrast: '#0072F5', // commonly used for text inside the component
      primary: '#0072F5',
      primaryBorder: '#0952A5',
      primaryBorderHover: '#0072F5',
      primarySolidHover: '#3694FF',
      primarySolidContrast: '#ffffff', // commonly used for text inside the component
      primaryShadow: '#0952A5',

      secondaryLight: '#2E0F4D',
      secondaryLightHover: '#3B1362', // commonly used on hover state
      secondaryLightActive: '#451773', // commonly used on pressed state
      secondaryLightContrast: '#7828C8', // commonly used for text inside the component
      secondary: '#7828C8',
      secondaryBorder: '#571D91',
      secondaryBorderHover: '#7828C8',
      secondarySolidHover: '#9750DD',
      secondarySolidContrast: '#ffffff', // commonly used for text inside the component
      secondaryShadow: '#571D91',

      successLight: '#074A24',
      successLightHover: '#0A6130', // commonly used on hover state
      successLightActive: '#0B7439', // commonly used on pressed state
      successLightContrast: '#17C964', // commonly used for text inside the component
      success: '#17C964',
      successBorder: '#0F9549',
      successBorderHover: '#17C964',
      successSolidHover: '#41EC8B',
      successSolidContrast: '#ffffff', // commonly used for text inside the component
      successShadow: '#0F9549',

      warningLight: '#583804',
      warningLightHover: '#704705', // commonly used on hover state
      warningLightActive: '#845306', // commonly used on pressed state
      warningLightContrast: '#F5A524', // commonly used for text inside the component
      warning: '#F5A524',
      warningBorder: '#A66908',
      warningBorderHover: '#F5A524',
      warningSolidHover: '#F6AD37',
      warningSolidContrast: '#ffffff', // commonly used for text inside the component
      warningShadow: '#A66908',

      errorLight: '#44041A',
      errorLightHover: '#5C0523', // commonly used on hover state
      errorLightActive: '#6F062B', // commonly used on pressed state
      errorLightContrast: '#F31260', // commonly used for text inside the component
      error: '#F31260',
      errorBorder: '#910838',
      errorBorderHover: '#F31260',
      errorSolidHover: '#F4256D',
      errorSolidContrast: '#ffffff', // commonly used for text inside the component
      errorShadow: '#910838',
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
    },
    fontSizes: {
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      md: '1rem' /* 16px */,
      lg: '1.125rem' /* 18px */,
      xl: '1.25rem' /* 20px */,
      '2xl': '1.5rem' /* 24px */,
      '3xl': '1.875rem' /* 30px */,
      '4xl': '2.25rem' /* 36px */,
      '5xl': '3rem' /* 48px */,
      '6xl': '3.75rem' /* 60px */,
      '7xl': '4.5rem' /* 72px */,
      '8xl': '6rem' /* 96px */,
      '9xl': '8rem' /* 128px */,
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: 1 /* 16px */,
      sm: 1.25 /* 20px */,
      base: 1.5 /* 24px */,
      md: 1.5 /* 24px */,
      lg: 1.75 /* 28px */,
      xl: 1.75 /* 28px */,
      '2xl': 2 /* 32px */,
      '3xl': 2.25 /* 36px */,
      '4xl': 2.5 /* 40px */,
      '5xl': 1 /* 16px */,
      '6xl': 1 /* 16px */,
      '7xl': 1 /* 16px */,
      '8xl': 1 /* 16px */,
      '9xl': 1 /* 16px */,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    space: {
      0: '0rem',
      mini: '0.2rem',
      xxs: '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.375rem',
      xl: '2.25rem',
      '2xl': '3rem',
      '3xl': '5rem',
      '4xl': '10rem',
      '5xl': '14rem',
      '6xl': '18rem',
      '7xl': '24rem',
      '8xl': '32rem',
      '9xl': '40rem',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      screen: '100vw',
      full: '100%',
      px: '1px',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    sizes: {},
    borderWidths: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px',
    },
    borderStyles: {
      thin: '1px solid black',
      small: '2px solid black',
      medium: '3px solid black',
      large: '5px solid black',
    },
    radii: {
      xxs: '4px',
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px', // preferred value by NextUI components
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    shadows: {},
    zIndices: {
      '1': '100',
      '2': '200',
      '3': '300',
      '4': '400',
      '5': '500',
      '6': '600',
      '7': '700',
      '8': '800',
      '9': '900',
      '10': '1000',
      max: '9999',
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
  },
};

export type FontSizeKeys = keyof DefaultTheme['theme']['fontSizes'];

export type ZIndicesKeys = keyof DefaultTheme['theme']['zIndices'];

export type ThemeColorKeys = keyof DefaultTheme['theme']['colors'];
