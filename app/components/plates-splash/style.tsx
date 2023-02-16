import styled from 'styled-components';
import toRem from '~/utils/to-rem';
import { PlateWrapper } from '../plate/style';

export const PlatesSplashWrapper = styled.div`
  margin: ${toRem(30)} ${toRem(-16)} ${toRem(-150)};
  transform: scale(0.7);
  transform-origin: top left;
  ${PlateWrapper} {
    margin: 0;
    box-shadow: none;
    transform: perspective(1000px) rotateY(45deg) rotate(10deg) translateY(-20%);
    &:first-child {
      transform: perspective(1000px) rotateY(-45deg) rotate(-10deg) scale(0.6)
        translate(50%, 25%);
    }
    &:last-child {
      transform: perspective(1000px) rotateY(-20deg) rotate(-5deg) scale(0.8)
        translate(20%, -30%);
    }
  }

  @media screen and (min-width: ${toRem(500)}) {
    margin: 0 ${toRem(-16)} ${toRem(-200)};
  }
`;
