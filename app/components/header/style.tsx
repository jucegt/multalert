import styled from 'styled-components';
import toRem from '~/utils/to-rem';
import { AnchorWrapper } from '../anchor/style';
import { LogoWrapper } from '../logo/style';

export const HeaderWrapper = styled.header`
  align-items: center;
  background: var(--bg-box-light-blur);
  backdrop-filter: blur(${toRem(8)});
  border-radius: ${toRem(6)};
  box-shadow: 0 ${toRem(20)} ${toRem(20)} ${toRem(-15)} rgba(0, 0, 0, 0.3);
  display: flex;
  height: ${toRem(60)};
  justify-content: space-between;
  margin: ${toRem(20)} ${toRem(20)} ${toRem(30)};
  max-width: ${toRem(400)};
  padding: ${toRem(10)};
  position: sticky;
  top: ${toRem(20)};
  z-index: 20;
  ${LogoWrapper} {
    font-size: ${toRem(26.5)};
    margin-left: ${toRem(10)};
  }
  ${AnchorWrapper} {
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: ${toRem(5)};
    a {
      aspect-ratio: inherit;
      height: inherit;
      padding: 0;
      justify-content: center;
    }
  }
  @media screen and (min-width: ${toRem(440)}) {
    margin: ${toRem(20)} auto ${toRem(30)};
    width: 100%;
  }
`;
