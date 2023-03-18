import { useEffect, useState } from 'react';

import IconVehicle from '~/components/svgs/vehicle';
import Title from '~/components/title';
import VehiclesList from '~/components/vehicles';

import { IVehicle } from '~/interfaces/IVehicle';

import migrateVehicleInfo from '~/utils/migrate-vehicle';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lsVehicle = localStorage.getItem('vehicles');

      if (lsVehicle) {
        const vehicleList = JSON.parse(lsVehicle) as IVehicle[];
        const anyWithOldStructure = migrateVehicleInfo(vehicleList);
        if (anyWithOldStructure.length) {
          localStorage.setItem('vehicles', JSON.stringify(anyWithOldStructure));
          setVehicles(anyWithOldStructure);
        } else {
          setVehicles(vehicleList);
        }
      }
    }
  }, []);
  return (
    <>
      <Title icon={<IconVehicle />}>Mis Vehículos</Title>
      <VehiclesList vehicles={vehicles} />
    </>
  );
}
