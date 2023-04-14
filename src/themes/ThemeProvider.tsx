import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';

interface NatesThemeProviderProps {
  children?: React.ReactElement | React.ReactElement[] | undefined;
}

const NatesThemeProvider: React.FC<NatesThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default NatesThemeProvider;
