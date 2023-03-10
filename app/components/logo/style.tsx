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

export const LogoHTag = styled.h1`
  margin: 0;
  font-size: inherit;
  font-weight: normal;
  text-shadow: 0 ${toRem(2)} ${toRem(2)} rgba(0, 0, 0, 0.4);
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

export const LogoNotification = styled.span<{ number?: number }>`
  position: absolute;
  top: 4%;
  right: -8%;
  aspect-ratio: 1/1;
  background: #eb5757;
  border-radius: 100%;
  display: block;
  width: 15%;
  box-shadow: 0 0 ${toRem(6)} rgba(0, 0, 0, 0.7);
  &:before {
    display: block;
    line-height: 0.3;
    content: '${(props) => props.number}';
    font-weight: 900;
    font-size: 0.3em;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: none;
  }
`;
