import { ActionArgs, redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { useEffect } from 'react';
import PlatesSplash from '~/components/plates-splash';
import SplashLayout from '~/layouts/splash';

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  console.log(Object.fromEntries(body));
  return redirect('/');
}

export default function Index() {
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
    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
    });
  }, []);
  return (
    <SplashLayout>
      <PlatesSplash />
      <p>
        Te <span>notificamos</span>
        <br /> cuando recibes una <br /> multa de tránsito <br /> de Emetra
      </p>
      <Link className="button" to="/vehiculos/agregar">
        Agregar vehiculo
      </Link>
      <button onClick={handleClick}>Instalar</button>
      <small>
        Esta aplicación es segura, ya que no almacenamos ninguna información en
        servidores, toda la información se almacena en tu dispositivo.
      </small>
    </SplashLayout>
  );
}
