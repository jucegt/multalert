import { useEffect, useState } from 'react';
import IconVehicle from '~/components/svgs/vehicle';
import Title from '~/components/title';
import VehiclesList from '~/components/vehicles';
import { IVehicle } from '~/interfaces/IVehicle';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localVehicles = localStorage.getItem('vehicles');

      if (localVehicles) setVehicles(JSON.parse(localVehicles));
    }
  }, []);
  return (
    <>
      <Title icon={<IconVehicle />}>Mis Vehículos</Title>
      <VehiclesList vehicles={vehicles} />
    </>
  );
}
