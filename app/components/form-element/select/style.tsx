import styled from 'styled-components';
import { InputWrapper } from '~/components/form-element/input/style';
import toRem from '~/utils/to-rem';

export const SelectWrapper = styled.div`
  color: var(--text-color);
  transition: all ease 0.3s;
  svg {
    position: absolute;
    top: ${toRem(12)};
    right: ${toRem(10)};
    width: ${toRem(24)};
    height: ${toRem(24)};
    opacity: 0.3;
    transition: all ease 0.3s;
    path {
      transition: all ease 0.3s;
    }
  }
`;

export const SelectElement = styled(InputWrapper)`
  &:focus {
    & ~ svg {
      transform: rotate(-180deg);
      opacity: 1;
      path {
        stroke: var(--decoration-color) !important;
      }
    }
  }
  &:disabled {
    & ~ svg {
      opacity: 0.05;
    }
  }
`;
