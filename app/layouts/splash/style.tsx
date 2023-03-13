import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const SplashWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  min-height: 100vh;
  overflow-x: hidden;
  padding: ${toRem(40)};
  width: 100vw;
`;

export const SplashBackground = styled.div`
  height: 100vh;
  left: 50%;
  max-width: ${toRem(500)};
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: 100vw;
  &:before {
    background: var(--bg-color);
    box-shadow: ${toRem(-300)} ${toRem(150)} ${toRem(100)} ${toRem(100)}
      rgba(235, 87, 87, 0.2);
    content: '';
    height: ${toRem(55)};
    position: absolute;
    right: ${toRem(-72)};
    top: ${toRem(-27)};
    width: ${toRem(100)};
  }
  &:after {
    background: var(--bg-color);
    bottom: ${toRem(-24)};
    box-shadow: ${toRem(300)} ${toRem(-150)} ${toRem(100)} ${toRem(100)}
      rgba(37, 117, 252, 0.2);
    content: '';
    height: ${toRem(130)};
    left: ${toRem(-50)};
    position: absolute;
    width: ${toRem(58)};
  }
`;

export const SplashContent = styled.div`
  max-width: ${toRem(500)};
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SplashInfo = styled.small`
  margin-top: auto;
  margin-bottom: 0;
  display: block;
  color: var(--text-color);
  opacity: 0.4;
  font-family: 'Barlow';
  font-weight: 400;
  font-size: ${toRem(12)};
  line-height: ${toRem(14)};
`;
