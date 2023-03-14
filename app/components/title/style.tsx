import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const TitleWrapper = styled.h2`
  align-items: center;
  color: var(--text-color);
  display: flex;
  font-size: ${toRem(18)};
  gap: ${toRem(10)};
  margin: 0 0 ${toRem(30)};
  text-align: center;
  font-size: ${toRem(20)};
  line-height: ${toRem(24)};
  &:after {
    content: '';
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    height: ${toRem(1)};
    background: var(--decoration-color);
  }
  svg {
    color: var(--decoration-color);
    flex: 0 0 ${toRem(24)};
    max-width: ${toRem(24)};
    height: ${toRem(24)};
  }
`;
