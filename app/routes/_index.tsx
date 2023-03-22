import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

import BigTitle from '~/components/big-title';
import HomeButtons from '~/components/start-buttons';
import PlateGroup from '~/components/plate-group';

import useLocalStorage from '~/hooks/use-local-storage';

import SplashLayout from '~/layouts/splash';

import { V_KEY } from '~/configs/constants';

export default function Index() {
  const navigate = useNavigate();
  const [vehicles] = useLocalStorage(V_KEY, []);

  useEffect(() => {
    if (vehicles?.length) navigate('/vehiculos');
  }, [vehicles]);
  return (
    <SplashLayout>
      <PlateGroup />
      <BigTitle>
        Te <span>notificamos</span>
        <br /> cuando recibes una
        <br /> multa de tránsito
        <br /> de <strong>EMETRA</strong>
      </BigTitle>
      <HomeButtons />
    </SplashLayout>
  );
}
