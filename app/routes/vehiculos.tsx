import { Outlet } from '@remix-run/react';
import DefaultLayout from '~/layouts/default';

export default function Vehicles() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
