import styled, { keyframes } from 'styled-components';
import toRem from '~/utils/to-rem';

const rotate360 = keyframes`
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
`;

export const GlowBackground = styled.div`
  height: 100vh;
  left: 50%;
  max-width: ${toRem(500)};
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: 100vw;
  animation: ${rotate360} 100s linear infinite;
  &:before,
  &:after {
    content: '';
    background: var(--bg-color);
    position: absolute;
    border-radius: 100%;
  }
  &:before {
    box-shadow: ${toRem(-300)} ${toRem(150)} ${toRem(100)} ${toRem(100)}
      rgba(235, 87, 87, 0.2);
    height: ${toRem(55)};
    right: ${toRem(-100)};
    top: ${toRem(-27)};
    width: ${toRem(100)};
  }
  &:after {
    bottom: ${toRem(-24)};
    box-shadow: ${toRem(300)} ${toRem(-150)} ${toRem(100)} ${toRem(100)}
      rgba(37, 117, 252, 0.2);
    height: ${toRem(130)};
    left: ${toRem(-58)};
    width: ${toRem(58)};
  }
`;
