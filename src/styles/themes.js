/* eslint-disable import/prefer-default-export */
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const lightMainTheme = responsiveFontSizes(
  createMuiTheme({
    direction: "rtl",
    // type: "light",
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      common: { black: "rgba(14, 14, 14, 1)", white: "rgba(255, 255, 255, 1)" },
      background: {
        paper: "rgba(255, 255, 255, 1)",
        default: "rgba(255, 255, 255, 1)",
      },
      primary: {
        light: "rgba(60, 179, 229, 1)",
        main: "rgba(12, 160, 223, 1)",
        dark: "rgba(8, 112, 156, 1)",
        contrastText: "#fff",
      },
      secondary: {
        light: "rgba(255, 91, 173, 1)",
        main: "rgba(255, 51, 153, 1)",
        dark: "rgba(178, 35, 107, 1)",
        contrastText: "rgba(255, 255, 255, 1)",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(14, 14, 14, 0.54)",
        disabled: "rgba(107, 107, 107, 0.38)",
        hint: "rgba(211, 211, 211, 0.38)",
      },
    },
  })
);

export const darkMainTheme = responsiveFontSizes(
  createMuiTheme({
    direction: "rtl",
    type: "dark",
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      common: { black: "rgba(255, 255, 255, 1)", white: "rgba(14, 14, 14, 1)" },
      background: {
        paper: "rgba(14, 14, 14, 1)",
        default: "rgba(14, 14, 14, 1)",
      },
      primary: {
        light: "rgba(60, 179, 229, 1)",
        main: "rgba(12, 160, 223, 1)",
        dark: "rgba(8, 112, 156, 1)",
        contrastText: "#fff",
      },
      secondary: {
        light: "rgba(255, 91, 173, 1)",
        main: "rgba(255, 51, 153, 1)",
        dark: "rgba(178, 35, 107, 1)",
        contrastText: "rgba(255, 255, 255, 1)",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      text: {
        primary: "rgba(200, 200, 200, 0.87)",
        secondary: "rgba(236, 236, 236, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(211, 211, 211, 0.38)",
      },
    },
  })
);
// palette: {
//   primary: {
//     light: "#3cb3e5",
//     main: "#0CA0DF",
//     dark: "#08709c",
//     contrastText: "#ffffff",
//   },
//   secondary: {
//     light: "#ff5bad",
//     main: "#FF3399",
//     dark: "#b2236b",
//     contrastText: "#ffffff",
//   },
//   warning: {
//     light: "#ffbb3a",
//     main: "#ff9933",
//     dark: "#fc7d2f",
//   },
//   error: {
//     light: "#ed6e72",
//     main: "#ff3333",
//     dark: "#de192c",
//   },
//   info: {
//     light: "#7fe2eb",
//     main: "#14CCDD",
//     dark: "#00b3c5",
//   },
//   success: {
//     light: "#b4f0cd",
//     main: "#14dd89",
//     dark: "#00a53e",
//   },
//   background: {
//     default: "#fefefe",
//   },
// },
