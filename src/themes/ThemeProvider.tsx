import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';

interface NatesThemeProviderProps {
  children?: React.ReactElement | React.ReactElement[] | undefined;
}

export const NatesThemeProvider: React.FC<NatesThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={defaultTheme.theme}>{children}</ThemeProvider>;
};

