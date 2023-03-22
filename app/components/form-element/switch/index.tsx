import {
  SwitchCustom,
  SwitchInput,
  SwitchOff,
  SwitchOn,
  SwitchStatus,
  SwitchWrapper,
} from './style';
import { ISwitch } from './types';

const Switch = ({ values, ...props }: ISwitch) => {
  return (
    <SwitchWrapper>
      <SwitchInput {...props} type="checkbox" />
      {values ? (
        <SwitchStatus>
          <SwitchOff>{values.off}</SwitchOff>
          <SwitchOn>{values.on}</SwitchOn>
        </SwitchStatus>
      ) : null}
      <SwitchCustom />
    </SwitchWrapper>
  );
};

export default Switch;
