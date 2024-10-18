// import { useEffect, useState } from 'react';

import IconVehicle from '~/components/svgs/vehicle';
import Title from '~/components/title';
import VehicleCard from '~/components/vehicle-card';
import Warning from '~/components/warning';

// import { getLocalStorage, setLocalStorage } from '~/hooks/use-local-storage';

// import { IVehicle } from '~/interfaces/IVehicle';

// import migrateVehicleInfo from '~/utils/migrate-vehicle';

// import { V_KEY } from '~/configs/constants';

import { demos } from '~/data/demos.json';
import { names } from '~/data/vehicle-names.json';

export default function Vehicles() {
  // const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const vehicleList = getLocalStorage<IVehicle[]>(V_KEY, []);

  //     if (vehicleList) {
  //       const anyWithOldStructure = migrateVehicleInfo(vehicleList);
  //       if (anyWithOldStructure.length) {
  //         setLocalStorage(V_KEY, anyWithOldStructure);
  //         setVehicles(anyWithOldStructure);
  //       } else {
  //         setVehicles(vehicleList);
  //       }
  //     }
  //   }
  // }, []);
  return (
    <>
      <Title icon={<IconVehicle />}>Mis Vehículos</Title>
      <Warning>La siguiente información es solo demostración</Warning>
      {demos.map((vehicle, index) => (
        <VehicleCard
          key={`${vehicle.type}-${vehicle.number}`}
          type={vehicle.type}
          number={vehicle.number}
          name={names[index]}
          total={vehicle.total}
        />
      ))}
    </>
  );
}
