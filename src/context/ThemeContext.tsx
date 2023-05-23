import { createTheme } from "@mui/material";
import { red, grey } from "@mui/material/colors";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: grey[300],
      light: red[200],
      contrastText: "black",
    },
    secondary: {
      main: "#ffffff",
      dark: grey[700],
      light: grey[300],
      contrastText: "white",
    },
    background: {
      default: "#f7f6f3",
    },
  },
  typography: {
    fontFamily: "arial",
    h1: {
      color: "#ffffff",
    },
    h2: {
      color: "#ffffff",
      alignItems: "center",
      justifyItems: "center",
      alignContent: "center",
    },
    body1: {
      color: "#ffffff",
    },
    body2: {
      color: "#ffffff",
    },
  },
});
