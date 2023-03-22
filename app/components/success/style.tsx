import styled, { css } from 'styled-components';
import toRem from '~/utils/to-rem';

export const SuccessStyles = css`
  border-radius: ${toRem(6)};
  margin: ${toRem(20)} auto;
  max-width: ${toRem(400)};
  padding: ${toRem(20)};
  * {
  }
`;

export const SuccessTextStyles = css`
  align-items: center;
  display: flex;
  font-size: ${toRem(18)};
  font-weight: 700;
  gap: ${toRem(10)};
  margin: 0;

  svg {
    flex: 0 0 ${toRem(24)};
    height: ${toRem(24)};
    max-width: ${toRem(24)};
  }
`;

export const SuccessWrapper = styled.div`
  background: var(--bg-success);
  ${SuccessStyles}
`;

export const SuccessText = styled.p`
  color: var(--white);
  text-shadow: 0 ${toRem(2)} ${toRem(2)} rgba(0, 0, 0, 0.25);
  ${SuccessTextStyles}
`;
