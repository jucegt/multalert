import { useEffect, useState } from 'react';

import Anchor from '~/components/anchor';
import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import IconDownload from '~/components/svgs/download';
import IconVehicle from '~/components/svgs/vehicle';

const StartButtons = () => {
  let deferredPrompt: any;
  const [hideInstall, setHideInstall] = useState(false);

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
    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
    });
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(display-mode: standalone)').matches)
        setHideInstall(true);
    }
  }, []);
  return (
    <>
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
    </>
  );
};

export default StartButtons;
