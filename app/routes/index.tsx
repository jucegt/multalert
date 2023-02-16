import { ActionArgs, redirect } from '@remix-run/node';
import { useEffect } from 'react';
import SaveVehicle from '~/components/save-vehicle';

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  console.log(body.get('name'));
  console.log(body.get('plate-type'));
  console.log(body.get('plate-number'));
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
    <div>
      <SaveVehicle />
      <button
        style={{ margin: '0 auto', display: 'block' }}
        onClick={handleClick}
      >
        Install
      </button>
    </div>
  );
}
