import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const DefaultLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const DefaultLayoutContainer = styled.div`
  margin: 0 auto;
  max-width: ${toRem(440)};
  width: 100%;
  padding: 0 ${toRem(20)};
`;
