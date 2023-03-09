import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import randomInt from '~/utils/random-int';
import {
  LogoBold,
  LogoHTag,
  LogoLight,
  LogoMedium,
  LogoNotification,
  LogoWrapper,
} from './style';

const Logo = () => {
  const [notification, setNotification] = useState<number>();

  useEffect(() => {
    setNotification(randomInt(9));
  }, []);
  return (
    <LogoWrapper>
      <LogoHTag>
        <Link to="/">
          <LogoLight>mult</LogoLight>
          <LogoMedium>a</LogoMedium>
          <LogoBold>lert</LogoBold>
          <LogoNotification number={notification} />
        </Link>
      </LogoHTag>
    </LogoWrapper>
  );
};

export default Logo;
