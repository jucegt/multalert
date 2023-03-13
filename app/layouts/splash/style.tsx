import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const SplashWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: ${toRem(40)};
  background: var(--bg-color);
  overflow-x: hidden;
  button,
  .button {
    text-decoration: none;
    color: #000;
    display: inline-flex;
    align-items: center;
    border: none;
    background: #fff;
    border-radius: 100px;
    height: 60px;
    padding: 0 30px;
    margin: 0 10px;
    font-family: 'Barlow';
    font-weight: 700;
    font-size: 18px;
  }
`;

export const SplashContent = styled.div`
  max-width: 500px;
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
