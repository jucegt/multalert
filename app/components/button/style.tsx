import styled, { css } from 'styled-components';
import toRem from '~/utils/to-rem';
import { IButtonWrapper, TVariants } from './types';

export const bgVariants = (variant: TVariants) => {
  if (variant === 'primary') return 'var(--bg-button)';
  if (variant === 'secondary') return 'var(--bg-button-secondary)';
  if (variant === 'cancel') return 'var(--bg-button-cancel)';
};

export const ButtonStyles = css`
  align-items: center;
  border-radius: ${toRem(8)};
  border: none;
  box-shadow: 0 ${toRem(20)} ${toRem(20)} ${toRem(-10)} rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: inline-flex;
  font-weight: 700;
  gap: ${toRem(10)};
  padding: ${toRem(16)} ${toRem(18)};
  user-select: none;
  svg {
    flex: 0 0 ${toRem(24)};
    max-width: ${toRem(24)};
    height: ${toRem(24)};
  }
`;

export const ButtonWrapper = styled.button<IButtonWrapper>`
  color: ${(props) =>
    props.variant === 'cancel' ? 'var(--cancel-color)' : 'var(--white)'};
  background: ${(props) => bgVariants(props.variant)};
  ${ButtonStyles}
`;

export const ButtonText = styled.span`
  font-size: ${toRem(16)};
  line-height: ${toRem(24)};
  letter-spacing: ${toRem(-0.1)};
`;
