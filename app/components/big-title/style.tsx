import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const BigTitleWrapper = styled.h2`
  color: var(--text-color);
  font-family: 'Barlow';
  font-size: ${toRem(36)};
  font-weight: 400;
  strong,
  span {
    font-weight: 700;
  }
  span {
    color: var(--text-highlighted);
  }
`;
