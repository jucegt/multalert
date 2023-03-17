import styled from 'styled-components';

import {
  bgVariants,
  ButtonStyles,
  ButtonText,
} from '~/components/button/style';
import { IButtonWrapper } from '~/components/button/types';

export const AnchorWrapper = styled.div<IButtonWrapper>`
  a {
    text-decoration: none;
    background: ${(props) => bgVariants(props.variant)};
    ${ButtonStyles}
  }
`;

export const AnchorText = styled(ButtonText)``;
