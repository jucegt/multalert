import styled from 'styled-components';
import colors from '~/configs/colors';
import toRem from '~/utils/to-rem';

export const SwitchWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: ${toRem(10)};
`;

export const SwitchStatus = styled.span`
  font-size: ${toRem(12)};
  line-height: ${toRem(16)};
  color: var(--decoration-color);
  overflow: hidden;
`;

export const SwitchOff = styled.span`
  display: block;
  width: ${toRem(16)};
  height: ${toRem(16)};
  text-align: center;
  transition: all ease 0.3s;
`;

export const SwitchOn = styled(SwitchOff)`
  position: absolute;
  top: ${toRem(16)};
`;

export const SwitchCustom = styled.span`
  width: ${toRem(40)};
  height: ${toRem(24)};
  border-radius: ${toRem(24)};
  background: var(--bg-box-light);
  outline-offset: ${toRem(4)};
  outline: ${toRem(2)} solid transparent;
  transition: all ease 0.3s;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: ${toRem(4)};
    left: ${toRem(4)};
    width: ${toRem(16)};
    height: ${toRem(16)};
    border-radius: ${toRem(16)};
    transition: all ease 0.3s;
  }
  &:before {
    background: var(--text-color);
    opacity: 0.2;
  }
  &:after {
    background: var(--primary-gradient);
    opacity: 0;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;
  border: 0;
  z-index: 1;
  &:checked {
    & ~ ${SwitchStatus} {
      ${SwitchOff}, ${SwitchOn} {
        transform: translateY(${toRem(-16)});
      }
    }
    & ~ ${SwitchCustom} {
      &:before,
      &:after {
        transform: translateX(${toRem(16)});
      }
      &:after {
        opacity: 1;
      }
    }
  }
  &:focus,
  &:active {
    & ~ ${SwitchCustom} {
      outline: ${toRem(2)} solid var(---decoration-color, ${colors.blue});
      outline-offset: ${toRem(2)};
    }
  }
`;
