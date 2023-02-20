import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const WarningText = styled.p`
  background: #eed202;
  color: #000;
  padding: ${toRem(16)};
  border-radius: ${toRem(4)};
`;

export const InputWrapper = styled.div`
  margin: ${toRem(20)} 0;
  label {
    font-size: ${toRem(12)};
  }
  input {
    width: 100%;
    border: 1px solid #888888;
    height: ${toRem(40)};
    border-radius: ${toRem(4)};
    padding: 0 ${toRem(16)};
  }
`;

export const ButtonWrapper = styled.button`
  display: block;
  height: ${toRem(60)};
  margin: ${toRem(20)} auto;
  padding: 0 ${toRem(40)};
  font-size: ${toRem(18)};
  font-family: 'Barlow';
  background: #fff;
  border: 0;
  border-radius: ${toRem(60)};
`;
