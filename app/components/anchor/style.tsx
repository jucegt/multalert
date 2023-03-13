import styled from 'styled-components';
import toRem from '~/utils/to-rem';
import { bgVariants, ButtonText, ButtonWrapper } from '../button/style';
import { IButtonWrapper } from '../button/types';

export const AnchorWrapper = styled(ButtonWrapper)<IButtonWrapper>`
  background: ${(props) => bgVariants(props.variant)};
  padding: 0;
  a {
    display: inline-flex;
    padding: ${toRem(16)} ${toRem(18)};
    color: var(--white);
    text-decoration: none;
    gap: ${toRem(10)};
    align-items: center;
  }
`;

export const AnchorText = styled(ButtonText)``;
