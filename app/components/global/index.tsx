import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    position: relative;
    box-sizing: border-box;
  }
  body {
    background: #ccc;
    margin: 0;
    padding: 0;
    font-family: 'Barlow';
  }
`;

export default GlobalStyles;
