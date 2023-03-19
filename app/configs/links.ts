import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'manifest',
    href: '/resources/manifest.webmanifest',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'manifest',
    href: '/resources/dark.manifest.webmanifest',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'stylesheet',
    href: '/styles/fonts.css',
  },
];
