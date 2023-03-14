import { IChildren } from '~/interfaces/IChildren';
import { WarningText, WarningWrapper } from './style';

const Warning = ({ children }: IChildren) => {
  return (
    <WarningWrapper>
      <WarningText>{children}</WarningText>
    </WarningWrapper>
  );
};

export default Warning;
