import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title:
    'multalert - Recibe notificaciones cuando te coloquen una multa de tránsito en Emetra',
  viewport: 'width=device-width,initial-scale=1',
});
