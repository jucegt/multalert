import { LoaderArgs } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Plate from '~/components/plate';
import Success from '~/components/success';
import IconVehicle from '~/components/svgs/vehicle';
import Title from '~/components/title';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
import { getEmetraInfo } from '~/services/emetra';

export const loader = async ({ params }: LoaderArgs) => {
  const plateSplit = params.plate?.split('-');
  const plateType = plateSplit?.[0];
  const plateNumber = plateSplit?.[1];
  if (plateType && plateNumber) {
    const fines = await getEmetraInfo(plateType, plateNumber);

    return fines;
  }
  return null;
};

export default function VehiclePlate() {
  const data = useLoaderData<typeof loader>();
  const [vehicles] = useLocalStorage<IVehicle[]>('vehicles', []);
  const { plate } = useParams();
  const [, setNotificacion] = useLocalStorage<number>(`${plate}`, 0);
  const [vehicle, setVehicle] = useState<IVehicle>();
  const plateSplit = plate?.split('-');
  const plateType = plateSplit?.[0].toUpperCase();
  const plateNumber = plateSplit?.[1].toUpperCase();

  useEffect(() => {
    if (vehicles) {
      const vehicleInfo = vehicles.find(
        (vehicle) =>
          vehicle['plate-type'] === plateType &&
          vehicle['plate-number'].toString().toUpperCase() === plateNumber
      );
      if (vehicleInfo) setVehicle(vehicleInfo);
    }
  }, [vehicles]);

  useEffect(() => {
    if (data?.total) setNotificacion(data.total);
  }, [data]);

  return (
    <>
      <Title icon={<IconVehicle />}>
        {vehicle?.['vehicle-name'].toString()}
      </Title>
      <Plate notForm type={plateType} number={plateNumber} />
      <div style={{ color: '#fff' }}>
        {data?.message ? <p>{data.message}</p> : null}
        {data?.info ? <p>{data.info}</p> : null}
        {data?.fines
          ? data.fines.map(({ fecha, lugar, costo }, index) => (
              <div key={index}>
                <p>Fecha y Hora: {fecha}</p>
                <p>Lugar: {lugar}</p>
                <p>Costo: {costo}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
