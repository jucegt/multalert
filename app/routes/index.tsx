import { useEffect } from 'react';
import Plate from '~/components/plate';

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
      <Plate />
      <button
        style={{ margin: '0 auto', display: 'block' }}
        onClick={handleClick}
      >
        Install
      </button>
    </div>
  );
}
