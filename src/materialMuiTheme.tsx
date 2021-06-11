import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0041a0',
      light: '#00dfe0',
      dark: '#00146e',
    },
    secondary: {
      main: '#fa70d5',
    },
    common: {
      black: '#17191b',
    },
  },
  overrides: {
    MuiAppBar: {
      positionFixed: {
        zIndex: 1,
      },
    },
  },
});

export default theme;
