import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyles from './themes';
import { light } from './themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
