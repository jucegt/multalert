import styled from 'styled-components';
import colors from '~/configs/colors';
import toRem from '~/utils/to-rem';

export const InputWrapper = styled.input`
  background: var(--bg-box-light);
  border-radius: ${toRem(6)};
  border: 0;
  color: var(--text-color);
  display: block;
  font-size: ${toRem(16)};
  height: ${toRem(46)};
  line-height: ${toRem(20)};
  margin: 0 0 ${toRem(20)};
  outline-offset: ${toRem(4)};
  outline: ${toRem(2)} solid transparent;
  padding: 0 ${toRem(16)};
  transition: all ease 0.3s;
  width: 100%;
  &::-webkit-input-placeholder {
    color: var(--text-color);
    opacity: 0.2;
  }
  &::-moz-placeholder {
    color: var(--text-color);
    opacity: 0.2;
  }
  &:-ms-input-placeholder {
    color: var(--text-color);
    opacity: 0.2;
  }
  &:-moz-placeholder {
    color: var(--text-color);
    opacity: 0.2;
  }
  &:focus,
  &:active {
    outline: ${toRem(2)} solid var(---decoration-color, ${colors.blue});
    outline-offset: ${toRem(2)};
  }
  &:disabled {
    outline-color: transparent;
    opacity: 0.2;
  }
`;
