import styled from 'styled-components';
import { SuccessStyles, SuccessTextStyles } from '~/components/success/style';

export const WarningWrapper = styled.div`
  background: var(--bg-warning);
  ${SuccessStyles}
`;

export const WarningText = styled.p`
  color: var(--gray);
  text-shadow: none;
  ${SuccessTextStyles}
`;
