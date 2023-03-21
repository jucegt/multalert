import { IChildren } from '~/interfaces/IChildren';
import IconCheck from '~/components/svgs/check';

import { SuccessText, SuccessWrapper } from './style';

const Success = ({ children }: IChildren) => {
  return (
    <SuccessWrapper>
      <SuccessText>
        <IconCheck /> {children}
      </SuccessText>
    </SuccessWrapper>
  );
};

export default Success;
