import { TitleWrapper } from './style';
import { ITitle } from './types';

const Title = ({ icon, children }: ITitle) => {
  return (
    <TitleWrapper>
      {icon}
      {children}
    </TitleWrapper>
  );
};

export default Title;
