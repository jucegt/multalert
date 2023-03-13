import { IChildren } from '~/interfaces/IChildren';
import { BigTitleWrapper } from './style';

const BigTitle = ({ children }: IChildren) => {
  return <BigTitleWrapper>{children}</BigTitleWrapper>;
};

export default BigTitle;
