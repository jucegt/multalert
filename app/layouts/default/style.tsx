import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const DefaultLayoutWrapper = styled.div``;

export const DefaultLayoutContainer = styled.div`
  margin: 0 auto ${toRem(100)};
  max-width: ${toRem(500)};
  padding: 0 ${toRem(16)};

  label {
    display: block;
  }
`;
