'use client';

import { createTheme } from '@mui/material/styles';

const backgroundBeige = '#F0F0E8';
const customBlack = '#181818';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: backgroundBeige,
      // dark: '#00FF17',
      // light: '#00FF17',
    },
    secondary: {
      main: customBlack,
      // dark: '#00FF17',
      // light: '#00FF17',
    },
    // error: {
    //   main: '#00FF17',
    // },
    // warning: {
    //   main: '#00FF17',
    // },
    // info: {
    //   main: '#00FF17',
    // },
    // success: {
    //   main: '#00FF17',
    // },
  },
});

export default theme;
