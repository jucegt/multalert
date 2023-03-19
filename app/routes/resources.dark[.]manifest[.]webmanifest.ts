import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import manifest from '~/configs/manifest';

export let loader: LoaderFunction = () => {
  return json(
    {
      background_color: '#0e0f13',
      theme_color: '#0e0f13',
      ...manifest,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    }
  );
};
