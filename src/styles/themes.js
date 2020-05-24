/* eslint-disable import/prefer-default-export */
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const lightMainTheme = responsiveFontSizes(
  createMuiTheme({
    direction: 'rtl',
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    palette: {
      primary: {
        light: '#3cb3e5',
        main: '#0CA0DF',
        dark: '#08709c',
        contrastText: '#ffffff'
      },
      secondary: {
        light: '#ff5bad',
        main: '#FF3399',
        dark: '#b2236b',
        contrastText: '#ffffff'
      },
      warning: {
        light: '#ffbb3a',
        main: '#ff9933',
        dark: '#fc7d2f'
      },
      error: {
        light: '#ed6e72',
        main: '#ff3333',
        dark: '#de192c'
      },
      info: {
        light: '#7fe2eb',
        main: '#14CCDD',
        dark: '#00b3c5'
      },
      success: {
        light: '#b4f0cd',
        main: '#14dd89',
        dark: '#00a53e'
      },
      background: {
        default: '#fefefe'
      }
    }
  })
);
