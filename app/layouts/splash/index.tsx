import Logo from '~/components/logo';
import { IChildren } from '~/interfaces/IChildren';
import { SplashContent, SplashWrapper } from './style';

const SplashLayout = ({ children }: IChildren) => {
  return (
    <SplashWrapper>
      <SplashContent>
        <Logo />
        {children}
      </SplashContent>
    </SplashWrapper>
  );
};

export default SplashLayout;
