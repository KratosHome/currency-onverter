import {createGlobalStyle} from "styled-components";

export const GlobalCss = createGlobalStyle`
  *,
  a,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: calc((90vw - 470px) / (1980 - 470) * (16 - 10) + 25px);
    text-decoration: none;
  }
`