import { useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Plate from '~/components/plate';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
import DefaultLayout from '~/layouts/default';

export default function VehiclePlate() {
  const [vehicles] = useLocalStorage<IVehicle[]>('vehicles', []);
  const { plate } = useParams();
  const [vehicle, setVehicle] = useState<IVehicle>();
  const plateSplit = plate?.split('-');
  const plateType = plateSplit?.[0].toUpperCase();
  const plateNumber = plateSplit?.[1].toUpperCase();

  useEffect(() => {
    const vehicleInfo = vehicles.find(
      (vehicle) =>
        vehicle['plate-type'] === plateType &&
        vehicle['plate-number'].toString().toUpperCase() === plateNumber
    );
    if (vehicleInfo) setVehicle(vehicleInfo);
  }, [vehicles]);
  return (
    <DefaultLayout>
      <p>Pagina de {vehicle?.['vehicle-name'].toString()}</p>
      <Plate notForm type={plateType} number={plateNumber} />
    </DefaultLayout>
  );
}
