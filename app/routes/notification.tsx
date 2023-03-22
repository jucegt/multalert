import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import IconWarning from '~/components/svgs/warning';
import Title from '~/components/title';
import Warning from '~/components/warning';
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
      <Title>
        <IconWarning />
        Notificaciones
      </Title>
      <Warning>Esta sección es solo para pruebas</Warning>
      <ButtonGroup>
        <Button onClick={() => SendNotification('multalert', options)}>
          Prueba de Notificacion
        </Button>
      </ButtonGroup>
    </DefaultLayout>
  );
}
