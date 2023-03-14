import Header from '~/components/header';
import Nav from '~/components/nav';
import { IChildren } from '~/interfaces/IChildren';

import { DefaultLayoutContainer, DefaultLayoutWrapper } from './style';

const DefaultLayout = ({ children }: IChildren) => {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
      <Nav />
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
