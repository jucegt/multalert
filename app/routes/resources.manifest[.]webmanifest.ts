import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import manifest from '~/configs/manifest';

export let loader: LoaderFunction = () => {
  return json(
    {
      background_color: '#d0daff',
      theme_color: '#d0daff',
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
