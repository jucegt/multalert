import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const SplashWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${toRem(16)};
  background: rgb(43, 88, 118);
  overflow-x: hidden;
  background: linear-gradient(
    180deg,
    rgba(43, 88, 118, 1) 0%,
    rgba(78, 67, 118, 1) 100%
  );
  p {
    font-size: 36px;
    font-family: 'Barlow';
    color: #fff;
    span {
      color: #fa3e3e;
    }
  }
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
  small {
    margin-top: auto;
    margin-bottom: 0;
    display: block;
    color: #fff;
    opacity: 0.4;
    font-family: 'Barlow';
  }
`;

export const SplashContent = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
