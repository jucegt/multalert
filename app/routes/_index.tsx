import { useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Anchor from '~/components/anchor';
import BigTitle from '~/components/big-title';
import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import PlatesSplash from '~/components/plates-splash';
import IconDownload from '~/components/svgs/download';
import IconVehicle from '~/components/svgs/vehicle';
import useLocalStorage from '~/hooks/use-local-storage';
import SplashLayout from '~/layouts/splash';

export default function Index() {
  const navigate = useNavigate();
  const [vehicles] = useLocalStorage('vehicles', []);
  const [hideInstall, setHideInstall] = useState(false);
  let deferredPrompt: any;

  const handleClick = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt = null;
      }
    }
  };

  useEffect(() => {
    if (vehicles?.length) navigate('/vehiculos');
  }, [vehicles]);
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
    });
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(display-mode: standalone)').matches)
        setHideInstall(true);
    }
  }, []);
  return (
    <SplashLayout>
      <PlatesSplash />
      <BigTitle>
        Te <span>notificamos</span>
        <br /> cuando recibes una
        <br /> multa de tránsito
        <br /> de <strong>EMETRA</strong>
      </BigTitle>
      <ButtonGroup>
        <Anchor href="/vehiculos/agregar" icon={<IconVehicle />}>
          Agregar Vehículo
        </Anchor>
        {hideInstall ? null : (
          <Button
            variant="secondary"
            icon={<IconDownload />}
            onClick={handleClick}
          >
            Instalar
          </Button>
        )}
      </ButtonGroup>
    </SplashLayout>
  );
}
