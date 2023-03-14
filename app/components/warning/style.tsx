import styled from 'styled-components';
import { SuccessText, SuccessWrapper } from '../success/style';

export const WarningWrapper = styled(SuccessWrapper)`
  background: var(--bg-warning);
`;

export const WarningText = styled(SuccessText)`
  color: var(--gray);
  text-shadow: none;
`;
