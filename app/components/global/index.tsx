import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
		min-width: 320px;
		font-size: 16px;
    font-family: 'Barlow';
	}
  *, *:before, *:after {
    position: relative;
		box-sizing: border-box;
  }
  body {
    margin: 0;
		padding: 0;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
  }
  input, select, textarea, button {
    font-family: 'Barlow';
		appearance: none;
	}
  select::-ms-expand { display: none; }
`;

export default GlobalStyles;
