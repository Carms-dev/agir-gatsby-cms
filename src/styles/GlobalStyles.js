import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
    --off-white: #FFFBF3;
    --primary-light: #FDE8CE;
    --primary-alt: #C44D1D;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: bold;
  }
  a {
    font-weight: bold;
    text-decoration: none;
  }
  button:focus, button:hover {
    outline: none;
  }

  // font sizes
  html {
    font-size: 16px;
    background: #F6F1E5;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
  @media (min-width: 640px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    html {
      font-size: 18px;
    }
    h1 {
      font-size: 2.25rem;
    }
  }
`

export default GlobalStyles
