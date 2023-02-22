import DefaultLayout from '~/layouts/default';

import { SendNotification } from '~/utils/pwa/client/pwa-utils.client';

const options = {
  body: 'Tienes una multa en tu vehiculo P-744GQJ',
  icon: '/icons/apple-icon-precomposed.png',
  silent: false,
};

export default function Settings() {
  return (
    <DefaultLayout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => SendNotification('multalert', options)}>
        Notificacion
      </button>
    </DefaultLayout>
  );
}
