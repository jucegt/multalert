import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';

export let loader: LoaderFunction = () => {
  return json(
    {
      short_name: 'multalert',
      name: 'multalert',
      description:
        'Recibe notificaciones cuando te coloquen una multa de tránsito en EMETRA',
      start_url: '/?utm_source=pwa',
      display: 'standalone',
      lang: 'es-GT',
      orientation: 'portrait',
      background_color: '#2575fc',
      theme_color: '#2575fc',
      // shortcuts: [
      //   {
      //     name: 'Mis Vehículos',
      //     url: '/vehiculos',
      //     icons: [
      //       {
      //         src: '/icons/android-icon-96x96.png',
      //         sizes: '96x96',
      //         type: 'image/png',
      //         purpose: 'any monochrome',
      //       },
      //     ],
      //   },
      //   {
      //     name: 'Agregar Vehículo',
      //     url: '/vehiculos/agregar',
      //     icons: [
      //       {
      //         src: '/icons/android-icon-96x96.png',
      //         sizes: '96x96',
      //         type: 'image/png',
      //         purpose: 'any monochrome',
      //       },
      //     ],
      //   },
      //   {
      //     name: 'Ajustes',
      //     url: '/ajustes',
      //     icons: [
      //       {
      //         src: '/icons/android-icon-96x96.png',
      //         sizes: '96x96',
      //         type: 'image/png',
      //         purpose: 'any monochrome',
      //       },
      //     ],
      //   },
      // ],
      icons: [
        {
          src: '/icons/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
          density: '0.75',
        },
        {
          src: '/icons/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0',
        },
        {
          src: '/icons/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          density: '1.5',
        },
        {
          src: '/icons/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '2.0',
        },
        {
          src: '/icons/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0',
        },
        {
          src: '/icons/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          density: '1.0',
        },
        {
          src: '/icons/multalert-icon.svg',
          sizes: '1000x1000',
          type: 'image/svg+xml',
          density: '4.0',
        },
      ],
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    }
  );
};
