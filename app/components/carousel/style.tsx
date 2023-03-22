import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const CarouselOverflow = styled.div`
  margin: ${toRem(15)} ${toRem(-20)} ${toRem(20)};
  overflow: hidden;
  padding: ${toRem(5)} ${toRem(20)} 0;
`;

export const CarouselWrapper = styled.div``;

export const CarouselContainer = styled.div`
  display: flex;
  gap: ${toRem(20)};
`;
