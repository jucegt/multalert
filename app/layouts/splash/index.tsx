import Logo from '~/components/logo';
import { IChildren } from '~/interfaces/IChildren';
import {
  SplashBackground,
  SplashContent,
  SplashInfo,
  SplashWrapper,
} from './style';

const SplashLayout = ({ children }: IChildren) => {
  return (
    <SplashWrapper>
      <SplashBackground />
      <SplashContent>
        <Logo />
        {children}
      </SplashContent>
      <SplashInfo>
        No almacenamos nada información en servidores, toda la información se
        almacena en tu dispositivo.
      </SplashInfo>
    </SplashWrapper>
  );
};

export default SplashLayout;
