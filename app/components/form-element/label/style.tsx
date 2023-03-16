import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${toRem(6)} 0;
`;

export const LabelText = styled.span`
  font-size: ${toRem(16)};
  line-height: ${toRem(20)};
  color: var(--text-color);
`;

export const LabelRequired = styled.span`
  font-weight: 700;
  color: var(--text-highlighted);
`;

export const LabelDescription = styled.span`
  font-size: ${toRem(12)};
  line-height: ${toRem(16)};
  color: var(--text-color);
  opacity: 0.3;
`;
