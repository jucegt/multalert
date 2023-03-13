import styled from 'styled-components';
import toRem from '~/utils/to-rem';
import { PlateWrapper } from '../plate/style';

export const PlatesSplashWrapper = styled.div`
  margin: ${toRem(30)} ${toRem(-20)} -60%;
  left: 50%;
  transform: scale(0.7) translateX(calc(-50% + 20px));
  transform-origin: top left;
  ${PlateWrapper} {
    margin: 0 auto;
    box-shadow: none;
    transform: perspective(${toRem(700)}) rotateY(45deg) rotate(10deg)
      translate(-3%, -20%);
    &:first-child {
      transform: perspective(${toRem(700)}) rotateY(-45deg) rotate(-10deg)
        scale(0.6) translate(35%, 25%);
    }
    &:last-child {
      transform: perspective(${toRem(700)}) rotateY(-20deg) rotate(-5deg)
        scale(0.8) translate(8%, -30%);
    }
  }

  @media screen and (min-width: ${toRem(500)}) {
    margin: ${toRem(30)} 0 -42%;
  }
`;
