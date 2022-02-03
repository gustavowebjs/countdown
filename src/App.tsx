import React, { useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyles from './themes';
import { light } from './themes/light';
import { dark } from './themes/dark';
import { ThemeSwitcher } from './components';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <ThemeSwitcher />
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
