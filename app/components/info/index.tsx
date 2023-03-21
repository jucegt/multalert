import { IChildren } from '~/interfaces/IChildren';
import IconInfo from '~/components/svgs/info';

import { InfoText, InfoWrapper } from './style';

const Info = ({ children }: IChildren) => {
  return (
    <InfoWrapper>
      <IconInfo />
      <InfoText>{children}</InfoText>
    </InfoWrapper>
  );
};

export default Info;
