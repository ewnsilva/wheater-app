import React from "react";
import { Forecast } from "./pages";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./context";

const App = (): JSX.Element => { 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Forecast />
    </ThemeProvider>
  );
};

export default App
