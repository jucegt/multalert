import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const PlateWrapper = styled.div`
  aspect-ratio: 488/248;
  background: #fff;
  border-radius: ${toRem(12)};
  box-shadow: 0 0 ${toRem(30)} rgba(0, 0, 0, 0.15),
    0 ${toRem(45)} ${toRem(20)} ${toRem(-40)} rgba(0, 0, 0, 0.1);
  font-family: 'Barlow';
  margin: 0 auto;
  width: 100%;
  z-index: 2;
  &:before {
    background: repeating-linear-gradient(
      135deg,
      #222,
      #222 ${toRem(8)},
      #383838 ${toRem(8)},
      #383838 ${toRem(12)}
    );
    border-radius: ${toRem(7)};
    content: '';
    inset: ${toRem(5)};
    position: absolute;
  }
  &:after {
    background: #fff;
    border-radius: ${toRem(3)};
    content: '';
    inset: ${toRem(10)};
    position: absolute;
  }
  @media screen and (min-width: ${toRem(440)}) {
    width: ${toRem(400)};
  }
`;

export const PlateContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  height: 100%;
  justify-content: space-between;
  padding: ${toRem(10)};
  text-align: center;
  z-index: 1;
  font-size: 19.1vw;
  letter-spacing: ${toRem(-3)};
  &:before,
  &:after {
    font-size: 3.62vw;
    font-weight: 700;
    letter-spacing: ${toRem(6)};
    padding: ${toRem(5)} 0;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
  }
  &:before {
    background: #2575fc;
    color: #fff;
    content: 'Guatemala';
    border-radius: ${toRem(2)} ${toRem(2)} 0 0;
  }
  &:after {
    content: 'Centro América';
  }

  @media screen and (max-width: ${toRem(319)}) {
    font-size: ${toRem(60)};
  }
  @media screen and (min-width: ${toRem(440)}) {
    font-size: ${toRem(84)};
    &:before,
    &:after {
      font-size: ${toRem(16)};
    }
  }
`;

export const PlateValue = styled.div`
  background: repeating-linear-gradient(
    135deg,
    #222,
    #222 ${toRem(8)},
    #383838 ${toRem(8)},
    #383838 ${toRem(12)}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  padding: 0 ${toRem(10)};
`;

export const PlateType = styled.select`
  appearance: none;
  background: inherit;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: ${toRem(-2)};
  outline: none;
  padding: 0;
  order: 1;
`;

export const PlateNumber = styled(PlateType)`
  width: 100%;
  text-align: right;
  text-transform: uppercase;
  order: 2;
  &:placeholder-shown {
    opacity: 0.2;
    & ~ ${PlateType} {
      opacity: 0.2;
    }
  }
  &:focus {
    opacity: 1;
    ::-webkit-input-placeholder {
      background: #fff;
    }
    ::-moz-placeholder {
      background: #fff;
      opacity: 1;
    }
    :-ms-input-placeholder {
      background: #fff;
    }
    :-moz-placeholder {
      background: #fff;
      opacity: 1;
    }
  }
`;

export const PlateNotification = styled.span`
  width: ${toRem(40)};
  height: ${toRem(40)};
  border-radius: ${toRem(40)};
  background: #eb5757;
  position: absolute;
  top: ${toRem(-15)};
  right: ${toRem(-15)};
  z-index: 2;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: ${toRem(20)};
  line-height: ${toRem(38)};
`;
