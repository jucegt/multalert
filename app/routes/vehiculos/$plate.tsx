import { LoaderArgs } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Plate from '~/components/plate';
import Success from '~/components/success';
import Title from '~/components/title';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
import DefaultLayout from '~/layouts/default';
import { getEmetraInfo } from '~/services/emetra';

export const loader = async ({ params }: LoaderArgs) => {
  const plateSplit = params.plate?.split('-');
  const plateType = plateSplit?.[0];
  const plateNumber = plateSplit?.[1];
  if (plateType && plateNumber) {
    const multas = await getEmetraInfo(plateType, plateNumber);

    return multas;
  }
  return null;
};

export default function VehiclePlate() {
  const multas = useLoaderData<typeof loader>();
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

  console.log(multas);

  return (
    <DefaultLayout>
      <Title>{vehicle?.['vehicle-name'].toString()}</Title>
      <Plate notForm type={plateType} number={plateNumber} />
      <>
        {multas?.info ? <p>{multas.info}</p> : null}
        {multas?.tieneMultas ? (
          <ul>
            {multas.multas.map((multa, index) => (
              <li key={index}>{multa}</li>
            ))}
          </ul>
        ) : (
          <Success>{multas?.multas?.toString()}</Success>
        )}
      </>
    </DefaultLayout>
  );
}
