import { IChildren } from '~/interfaces/IChildren';
import { SuccessText, SuccessWrapper } from './style';

const Success = ({ children }: IChildren) => {
  return (
    <SuccessWrapper>
      <SuccessText>{children}</SuccessText>
    </SuccessWrapper>
  );
};

export default Success;
