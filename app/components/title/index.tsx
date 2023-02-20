import { IChildren } from '~/interfaces/IChildren';
import { TitleWrapper } from './style';

const Title = ({ children }: IChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;
