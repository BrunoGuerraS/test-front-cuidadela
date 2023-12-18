import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

  const theme = createTheme({
    palette: {
      primary:{
        light: "#ffffff",
        main: "#bbcf01",
        dark: "#308e3d"
      },
      secondary:{
        light: "#c71b1e",
        main: "#c71b1e",
        dark: "#c71b1e"
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiTextField: {
        styleOverrides:{
          root: {
            fieldset: {
              bordercolor: "#e60022",


            }
          }
        }
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'info' && {
              backgroundColor: '#60a5fa',
            }),
          }),
        },
      },
    },
  });

  export default theme