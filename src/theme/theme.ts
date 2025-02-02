import { colorSchemes, typography, shadows, shape } from './themePrimitives';
import { createTheme } from '@mui/material/styles';

const themeConfig = {
  cssVariables: {
    colorSchemeSelector: 'class',
    cssVarPrefix: 'template',
  },
  colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
  typography,
  shadows,
  shape,
};

const theme = createTheme(themeConfig);

export { themeConfig, colorSchemes };

export default theme;
