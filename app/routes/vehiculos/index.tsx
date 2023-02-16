import { Link } from '@remix-run/react';
import React, { useEffect, useState } from 'react';
import Plate from '~/components/plate';
import { IVehicle } from '~/interfaces/IVehicle';
import DefaultLayout from '~/layouts/default';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localVehicles = localStorage.getItem('vehicles');

      if (localVehicles) setVehicles(JSON.parse(localVehicles));
    }
  }, []);
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
