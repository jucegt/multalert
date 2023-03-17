import styled, { css } from 'styled-components';
import toRem from '~/utils/to-rem';
import { IButtonWrapper, TVariants } from './types';

export const bgVariants = (variant: TVariants) => {
  if (variant === 'primary') return 'var(--bg-button)';
  if (variant === 'secondary') return 'var(--bg-button-secondary)';
  if (variant === 'cancel') return 'var(--bg-button-cancel)';
};

export const ButtonStyles = css`
  box-shadow: 0 ${toRem(20)} ${toRem(20)} ${toRem(-10)} rgba(0, 0, 0, 0.2);
  border-radius: ${toRem(8)};
  color: var(--white);
  border: none;
  font-weight: 700;
  padding: ${toRem(16)} ${toRem(18)};
  display: inline-flex;
  align-items: center;
  gap: ${toRem(10)};
  svg {
    flex: 0 0 ${toRem(24)};
    max-width: ${toRem(24)};
    height: ${toRem(24)};
  }
`;

export const ButtonWrapper = styled.button<IButtonWrapper>`
  background: ${(props) => bgVariants(props.variant)};
  ${ButtonStyles}
`;

export const ButtonText = styled.span`
  font-size: ${toRem(16)};
  line-height: ${toRem(24)};
  letter-spacing: ${toRem(-0.1)};
`;
