import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#4c1499',
      dark: '#2c0a5c',
      light: '#1a1a1a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#191919',
      dark: '#0C0C0C',
      light: '#fff',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#f7f6f3',
    },
  },
});
