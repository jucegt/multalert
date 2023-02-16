import Logo from '~/components/logo';
import { IChildren } from '~/interfaces/IChildren';
import { SplashWrapper } from './style';

const SplashLayout = ({ children }: IChildren) => {
  return (
    <SplashWrapper>
      <Logo />
      {children}
    </SplashWrapper>
  );
};

export default SplashLayout;
