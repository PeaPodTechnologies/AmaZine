'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from '../theme/customizations/inputs';
import { dataDisplayCustomizations } from '../theme/customizations/dataDisplay';
import { feedbackCustomizations } from '../theme/customizations/feedback';
import { navigationCustomizations } from '../theme/customizations/navigation';
import { surfacesCustomizations } from '../theme/customizations/surfaces';

import { themeConfig } from '../theme/theme';

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export const theTheme = createTheme({
  // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
  ...themeConfig,
  components: {
    ...inputsCustomizations,
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...navigationCustomizations,
    ...surfacesCustomizations,
  },
  cssVariables: true,
});

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme ? {} : { ...theTheme, components: { ...theTheme.components, ...themeComponents } };
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
