import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --darker: #474335;
    --white: #fff;
    --off-white: #FFFBF3;
    --primary-light: #FDE8CE;
    --primary-alt: #C44D1D;
  }
  * {
    box-sizing: border-box;
    color: var(--darker);
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }
  a {
    font-weight: 500;
    text-decoration: none;
  }
  button {
    font-weight: 500;
  }
  button:focus, button:hover {
    outline: none;
  }

  // Section
  section {
    margin: 5rem 0;
  }

  // font sizes
  html {
    font-size: 16px;
    background: #F6F1E5;
  }
  h1 {
    font-size: 2.25rem;
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
  }
`

export default GlobalStyles
