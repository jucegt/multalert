import { IChildren } from '~/interfaces/IChildren';
import IconWarning from '~/components/svgs/warning';

import { WarningText, WarningWrapper } from './style';

const Warning = ({ children }: IChildren) => {
  return (
    <WarningWrapper>
      <WarningText>
        <IconWarning />
        {children}
      </WarningText>
    </WarningWrapper>
  );
};

export default Warning;
