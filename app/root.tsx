import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LoaderFunction } from '@remix-run/node';
import { useLoaderData, useLocation, useMatches } from '@remix-run/react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import GlobalStyles from '~/components/global';
import Icons from './components/icons';
import useCookie from './hooks/use-cookie';

export { links } from '~/configs/links';
export { meta } from '~/configs/meta-data';
let isMount = true;

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get('Cookie');
  const cookieList = cookies?.split(';');
  const cookieTheme = cookieList?.find((cookie) =>
    cookie.includes('_ma-theme=')
  );
  const themeSlpit = cookieTheme?.split('=');
  const theme = themeSlpit?.[themeSlpit?.length - 1];
  return { theme };
};

export default function App() {
  const location = useLocation();
  const matches = useMatches();
  const { theme } = useLoaderData<typeof loader>();
  const [maTheme, setTheme] = useCookie('_ma-theme', 'light');

  useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ('serviceWorker' in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: 'REMIX_NAVIGATION',
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: 'REMIX_NAVIGATION',
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener('controllerchange', listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            'controllerchange',
            listener
          );
        };
      }
    }
  }, [location]);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const themeMode = isDarkMode ? 'dark' : 'light';
    if (theme !== themeMode) {
      setTheme(themeMode, 365);
    }
  }, []);

  return (
    <html lang="es" className={theme || maTheme}>
      <head>
        <Meta />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#d0daff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0e0f13"
        />
        <Links />
        <Icons />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <GlobalStyles />
        <Outlet />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
