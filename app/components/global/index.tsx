import { createGlobalStyle } from 'styled-components';
import colors from '~/configs/colors';
import toRem from '~/utils/to-rem';

const GlobalStyles = createGlobalStyle`
  :root {
		min-width: 320px;
		font-size: 16px;
    font-family: 'Barlow';
    --bg-box-light-blur: ${colors.lightBoxLightBlur};
    --bg-box-light: ${colors.lightBoxLight};
    --bg-box: ${colors.lightBox};
    --bg-button-cancel: ${colors.cancelGradientLight};
    --bg-button-secondary: ${colors.red};
    --bg-button: ${colors.defaultGradient};
    --bg-color: ${colors.lightBlue};
    --bg-success: ${colors.green};
    --bg-warning: ${colors.yellow};
    --cancel-color: ${colors.gray};
    --decoration-color: ${colors.blue};
    --delete-color: ${colors.red};
    --notification-bg: ${colors.red};
    --primary-gradient: ${colors.defaultGradient};
    --text-color: ${colors.gray};
    --text-highlighted: ${colors.red};
    --text-shadow: none;
    --white: ${colors.white};
    --gray: ${colors.gray};
	}
  .dark {
    :root {
      --bg-box-light-blur: ${colors.darkBoxLightBlur};
      --bg-box-light: ${colors.darkBoxLight};
      --bg-box: ${colors.darkBox};
      --bg-button-cancel: ${colors.cancelGradientDark};
      --bg-color: ${colors.darkBlue};
      --cancel-color: ${colors.white};
      --text-color: ${colors.white};
      --text-shadow: 0 ${toRem(2)} ${toRem(2)} rgba(0, 0, 0, 0.4);
    }
  }
  *, *:before, *:after {
    position: relative;
		box-sizing: border-box;
  }
  body {
    background: var(--bg-color);
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
