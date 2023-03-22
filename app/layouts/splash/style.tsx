import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const SplashWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  padding: ${toRem(16)};
  max-width: 100vw;
  @media screen and (min-width: ${toRem(375)}) {
    padding: ${toRem(28)};
  }
  @media screen and (min-width: ${toRem(400)}) {
    padding: ${toRem(40)};
  }
`;

export const SplashContent = styled.div`
  width: 100%;
  max-width: ${toRem(500)};
  margin: 0 auto;
  height: 100%;
`;

export const SplashInfo = styled.small`
  display: block;
  color: var(--text-color);
  opacity: 0.4;
  font-family: 'Barlow';
  font-weight: 400;
  font-size: ${toRem(12)};
  line-height: ${toRem(14)};
  max-width: ${toRem(500)};
  margin: auto auto 0;
`;
