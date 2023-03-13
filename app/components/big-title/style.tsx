import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const BigTitleWrapper = styled.h2`
  color: var(--text-color);
  font-family: 'Barlow';
  font-size: ${toRem(34)};
  font-weight: 400;
  margin: ${toRem(30)} 0;
  strong,
  span {
    font-weight: 700;
  }
  span {
    color: var(--text-highlighted);
  }
  @media screen and (min-width: ${toRem(400)}) {
    font-size: ${toRem(36)};
  }
`;
