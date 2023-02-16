import { Link } from '@remix-run/react';
import React from 'react';
import Plate from '~/components/plate';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
import DefaultLayout from '~/layouts/default';

export default function Vehicles() {
  const [vehicles] = useLocalStorage<IVehicle[]>('vehicles', []);
  return (
    <DefaultLayout>
      <p>Pagina de Vehiculos</p>
      <>
        {vehicles.map((vehicle, index) => (
          <React.Fragment key={index}>
            <Link
              to={`/vehiculos/${vehicle['plate-type']
                .toString()
                .toLowerCase()}-${vehicle['plate-number']
                .toString()
                .toLowerCase()}`}
            >
              {vehicle['vehicle-name'].toString()}
            </Link>
            <Plate
              key={index}
              notForm
              type={vehicle['plate-type'].toString()}
              number={vehicle['plate-number'].toString()}
            />
          </React.Fragment>
        ))}
      </>
    </DefaultLayout>
  );
}
