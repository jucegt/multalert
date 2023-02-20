import styled from 'styled-components';
import toRem from '~/utils/to-rem';
import { PlateWrapper } from '../plate/style';

export const VehiclesListWrapper = styled.div`
  text-align: center;
  a {
    display: inline-block;
    text-decoration: none;
    padding: ${toRem(6)} ${toRem(16)};
    border-radius: ${toRem(4)} ${toRem(4)} 0 0;
    background: #305876;
    color: #fff;
    transition: all ease 0.3s;
    &:hover,
    &:active {
      background: #4e4376;
    }
  }
  ${PlateWrapper} {
    margin-bottom: ${toRem(20)};
  }
`;
