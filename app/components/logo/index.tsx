import { Link } from '@remix-run/react';
import { LogoBold, LogoLight, LogoMedium, LogoWrapper } from './style';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoLight>mult</LogoLight>
        <LogoMedium>a</LogoMedium>
        <LogoBold>lert</LogoBold>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
