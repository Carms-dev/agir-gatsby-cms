import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  button:focus, button:hover {
    outline: none;
  }
`;

export default GlobalStyles;
