'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from '../theme/customizations/inputs';
import { dataDisplayCustomizations } from '../theme/customizations/dataDisplay';
import { feedbackCustomizations } from '../theme/customizations/feedback';
import { navigationCustomizations } from '../theme/customizations/navigation';
import { surfacesCustomizations } from '../theme/customizations/surfaces';

import { themeConfig, colorSchemes } from '../theme/theme';

interface AppThemeProps {
  children: React.ReactNode;
  themeComponents?: ThemeOptions['components'];
}

const theThemeConfig = {
  // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
  ...themeConfig,
  components: {
    ...inputsCustomizations,
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...navigationCustomizations,
    ...surfacesCustomizations,
  },
  colorSchemes,
  cssVariables: {
    colorSchemeSelector: 'class',
  },
};

export const theTheme = createTheme(theThemeConfig);

export default function AppTheme(props: AppThemeProps) {
  const { children, themeComponents } = props;
  const theme = React.useMemo(() => {
    return createTheme({
      // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
      ...theThemeConfig,
      components: {
        ...theThemeConfig.components,
        ...themeComponents,
      },
    });
  }, [themeComponents]);
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
