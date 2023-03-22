import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { V_KEY } from '~/configs/constants';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
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
  const [vehicles] = useLocalStorage<IVehicle[]>(V_KEY, []);

  useEffect(() => {
    setNotification(randomInt(9));
  }, []);
  return (
    <LogoWrapper>
      <LogoHTag>
        <Link to={vehicles.length ? '/vehiculos' : '/'}>
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
