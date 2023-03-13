import Logo from '~/components/logo';
import { IChildren } from '~/interfaces/IChildren';
import { SplashContent, SplashInfo, SplashWrapper } from './style';

const SplashLayout = ({ children }: IChildren) => {
  return (
    <SplashWrapper>
      <SplashContent>
        <Logo />
        {children}
        <SplashInfo>
          No almacenamos nada información en servidores, toda la información se
          almacena en tu dispositivo.
        </SplashInfo>
      </SplashContent>
    </SplashWrapper>
  );
};

export default SplashLayout;
