import Logo from '~/components/logo';
import Anchor from '~/components/anchor';
import IconSettings from '~/components/svgs/settings';

import { HeaderWrapper } from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Anchor href="/ajustes" icon={<IconSettings />} />
    </HeaderWrapper>
  );
};

export default Header;
