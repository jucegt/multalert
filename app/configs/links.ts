import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'manifest',
    href: '/resources/manifest.webmanifest',
  },
  {
    rel: 'stylesheet',
    href: '/styles/fonts.css',
  },
];
