import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f6f6f6;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
