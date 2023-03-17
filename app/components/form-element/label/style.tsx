import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const LabelWrapper = styled.label<{
  hasComponent: boolean;
  isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 ${(props) => (props.hasComponent ? toRem(20) : toRem(6))};
  user-select: none;
  transition: all ease 0.3s;
  opacity: ${(props) => (props.isDisabled ? 0.2 : 1)};
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
