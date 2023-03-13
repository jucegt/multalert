import { createGlobalStyle } from 'styled-components';
import colors from '~/configs/colors';
import toRem from '~/utils/to-rem';

const GlobalStyles = createGlobalStyle`
  :root {
		min-width: 320px;
		font-size: 16px;
    font-family: 'Barlow';
    --bg-box-light: ${colors.lightBoxLight};
    --bg-box: ${colors.lightBox};
    --bg-button-cancel: ${colors.cancelGradientLight};
    --bg-button-secondary: ${colors.red};
    --bg-button: var(---primary-gradient);
    --bg-color: ${colors.lightBlue};
    --bg-success: ${colors.green};
    --bg-warning: ${colors.yellow};
    --decoration-color: ${colors.blue};
    --delete-color: ${colors.red};
    --notification-bg: ${colors.red};
    --primary-gradient: ${colors.defaultGradient};
    --text-color: ${colors.gray};
    --text-highlighted: ${colors.red};
    --text-shadow: none;
	}
  .dark {
    :root {
      --bg-box-light: ${colors.darkBoxLight};
      --bg-box: ${colors.darkBox};
      --bg-button-cancel: ${colors.cancelGradientDark};
      --bg-color: ${colors.darkBlue};
      --text-color: ${colors.white};
      --text-shadow: 0 ${toRem(2)} ${toRem(2)} rgba(0, 0, 0, 0.4);
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
