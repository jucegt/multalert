import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

import BigTitle from '~/components/big-title';
import HomeButtons from '~/components/start-buttons';
import PlateGroup from '~/components/plate-group';

import useLocalStorage from '~/hooks/use-local-storage';

import SplashLayout from '~/layouts/splash';

export default function Index() {
  const navigate = useNavigate();
  const [vehicles] = useLocalStorage('vehicles', []);

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
