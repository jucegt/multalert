import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const DefaultLayoutWrapper = styled.div``;

export const DefaultLayoutContainer = styled.div`
  margin: 0 auto ${toRem(100)};
  max-width: ${toRem(500)};
  padding: 0 ${toRem(16)};

  label {
    display: block;
  }
`;

export const DefaultLayoutHeader = styled.header`
  height: ${toRem(60)};
  background: #305876;
  text-align: center;
`;

export const DefaultLayoutFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: ${toRem(60)};
  display: flex;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
  a {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #305876;
  }
`;
