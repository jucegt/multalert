import { IChildren } from '~/interfaces/IChildren';
import { SuccessWrapper } from './style';

const Success = ({ children }: IChildren) => {
  return <SuccessWrapper>{children}</SuccessWrapper>;
};

export default Success;
