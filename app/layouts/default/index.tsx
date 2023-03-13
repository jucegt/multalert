import Header from '~/components/header';
import { IChildren } from '~/interfaces/IChildren';

import { DefaultLayoutContainer, DefaultLayoutWrapper } from './style';

const DefaultLayout = ({ children }: IChildren) => {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
