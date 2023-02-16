import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const LogoWrapper = styled.div`
  font-size: ${toRem(40)};
  font-family: 'Barlow';
  letter-spacing: ${toRem(-2)};
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const LogoLight = styled.span`
  font-weight: 300;
  letter-spacing: ${toRem(-4)};
`;

export const LogoMedium = styled.span`
  font-weight: normal;
`;

export const LogoBold = styled.span`
  font-weight: 700;
`;
