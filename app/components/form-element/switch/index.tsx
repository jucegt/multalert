import {
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
          <SwitchOn>{values.on}</SwitchOn>
          <SwitchOff>{values.off}</SwitchOff>
        </SwitchStatus>
      ) : null}
    </SwitchWrapper>
  );
};

export default Switch;
