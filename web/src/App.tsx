import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import light from "./assets/styles/Themes/light";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
