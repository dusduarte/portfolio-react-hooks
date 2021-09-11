import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#002E66',
      light: '#003C87',
      dark: '#001A3B',
    },
    secondary: {
      main: '#0067E6',
      light: '#48B5F0',
      dark: 'rgba(255, 255, 255, 0.2)',
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
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }
    }
  },
});

export default theme;
