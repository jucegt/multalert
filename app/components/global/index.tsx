import { createGlobalStyle } from 'styled-components';
import colors from '~/configs/colors';

const GlobalStyles = createGlobalStyle`
  :root {
		min-width: 320px;
		font-size: 16px;
    font-family: 'Barlow';
    --bg-color: ${colors.lightBlue};
    --text-color: ${colors.gray};
    --text-highlighted: ${colors.red};
    --primary-gradient: ${colors.defaultGradient};
    --bg-button: var(---primary-gradient);
    --bg-button-secondary: ${colors.red};
    --bg-button-cancel: ${colors.cancelGradientLight};
    --bg-box: ${colors.lightBox};
    --decoration-color: ${colors.blue};
    --notification-bg: ${colors.red};
    --delete-color: ${colors.red};
    --bg-success: ${colors.green};
    --bg-warning: ${colors.yellow};
    --bg-box-light: ${colors.lightBoxLight};
	}
  .dark-mode {
    :root {
      --bg-color: ${colors.darkBlue};
      --text-color: ${colors.white};
      --bg-button-cancel: ${colors.cancelGradientDark};
      --bg-box: ${colors.darkBox};
      --bg-box-light: ${colors.darkBoxLight};
    }
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
    overflow-x: none;
  }
  input, select, textarea, button {
    font-family: 'Barlow';
		appearance: none;
	}
  select::-ms-expand { display: none; }
`;

export default GlobalStyles;
