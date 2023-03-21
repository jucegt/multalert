import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';

import Plate from '~/components/plate';
import IconVehicle from '~/components/svgs/vehicle';
import Title from '~/components/title';
import Message from '~/components/message';

import useLocalStorage from '~/hooks/use-local-storage';

import { IVehicle } from '~/interfaces/IVehicle';

import { getEmetraInfo } from '~/services/emetra';

import { sUp } from '~/utils/plate-format';
import Info from '~/components/info';
import FineCard from '~/components/fine-card';
import Carousel from '~/components/carousel';

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
  const plate = `${data?.type}-${data?.number}`;
  const [vehicles] = useLocalStorage<IVehicle[]>('vehicles', []);
  const [, setNotificacion] = useLocalStorage<number>(plate, 0);
  const [vehicle, setVehicle] = useState<IVehicle>();

  useEffect(() => {
    if (vehicles) {
      const vFound = vehicles.find(
        (v) => v.pType === data?.type && sUp(v.pNumber) === data?.number
      );
      if (vFound) setVehicle(vFound);
    }
  }, [vehicles]);

  useEffect(() => {
    if (data?.total) setNotificacion(data.total);
  }, [data]);

  return (
    <>
      <Title icon={<IconVehicle />}>{vehicle?.vName.toString()}</Title>
      <Plate notForm type={data?.type} number={data?.number} />
      <Message message={data?.message} total={data?.total} />
      {data?.info ? <Info>{data.info}</Info> : null}
      {data?.fines.length ? (
        <Carousel>
          {data.fines.map(({ fecha, lugar, costo }) => (
            <FineCard key={fecha} date={fecha} location={lugar} cost={costo} />
          ))}
        </Carousel>
      ) : null}
    </>
  );
}
