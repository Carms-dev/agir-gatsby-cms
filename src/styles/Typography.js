import { createGlobalStyle } from 'styled-components';
import TajawalRegular from '../assets/fonts/Tajawal/Tajawal-Regular.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Tajawal";
    src: url(${TajawalRegular});
  }

  html {
    font-family: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default Typography
