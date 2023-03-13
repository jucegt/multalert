import Logo from '~/components/logo';
import GlowLayout from '~/layouts/glow';
import { IChildren } from '~/interfaces/IChildren';

import { SplashContent, SplashInfo, SplashWrapper } from './style';

const SplashLayout = ({ children }: IChildren) => {
  return (
    <GlowLayout>
      <SplashWrapper>
        <SplashContent>
          <Logo />
          {children}
        </SplashContent>
        <SplashInfo>
          No almacenamos nada información en servidores, toda la información se
          almacena en tu dispositivo.
        </SplashInfo>
      </SplashWrapper>
    </GlowLayout>
  );
};

export default SplashLayout;
