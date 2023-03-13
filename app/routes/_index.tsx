import { Link, useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import BigTitle from '~/components/big-title';
import PlatesSplash from '~/components/plates-splash';
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
      <div>
        <Link className="button" to="/vehiculos/agregar">
          Agregar vehiculo
        </Link>
        {hideInstall ? null : <button onClick={handleClick}>Instalar</button>}
      </div>
    </SplashLayout>
  );
}
