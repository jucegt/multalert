import { useEffect, useState } from 'react';
import Title from '~/components/title';
import VehiclesList from '~/components/vehicles';
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
      <Title>Tus Vehículos</Title>
      <VehiclesList vehicles={vehicles} />
    </DefaultLayout>
  );
}
