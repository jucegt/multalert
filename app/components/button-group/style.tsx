import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${toRem(20)};
  margin: ${toRem(30)} 0;
  justify-content: center;
`;
