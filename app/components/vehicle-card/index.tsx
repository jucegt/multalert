import { Link } from 'react-router-dom';

import Plate from '~/components/plate';
import IconTrash from '~/components/svgs/trash';

import useLocalStorage from '~/hooks/use-local-storage';

import { sLow } from '~/utils/plate-format';

import { V_KEY } from '~/configs/constants';

import { IVehicleCard } from './types';
import {
  VehicleCardDelete,
  VehicleCardInfo,
  VehicleCardNotification,
  VehicleCardWrapper,
} from './style';
import { IVehicle } from '~/interfaces/IVehicle';

const VehicleCard = ({ type, number, name, setList }: IVehicleCard) => {
  const plate = `${sLow(type)}-${sLow(number)}`;
  const [fines, _s, _g, removeLocalFines] = useLocalStorage<number>(plate, 0);
  const [vehicles, setLocalVehicles] = useLocalStorage<IVehicle[]>(V_KEY, []);
  const vehicleLink = `/vehiculos/${plate}`;

  const handleDelete = (plate: string) => () => {
    const notRemoved = vehicles.filter((vehicle) => {
      const vPlate = `${sLow(vehicle.pType)}-${sLow(vehicle.pNumber)}`;
      return plate !== vPlate;
    });

    removeLocalFines();
    setLocalVehicles(notRemoved);
    setList(notRemoved);
  };
  return (
    <VehicleCardWrapper>
      <Link to={vehicleLink}>
        <Plate asLink type={type.toString()} number={number.toString()} />
      </Link>
      <VehicleCardInfo>
        <Link to={vehicleLink}>
          {name.toString()}
          {fines ? (
            <VehicleCardNotification>{fines}</VehicleCardNotification>
          ) : null}
        </Link>
        <VehicleCardDelete onClick={handleDelete(plate)}>
          <IconTrash />
        </VehicleCardDelete>
      </VehicleCardInfo>
    </VehicleCardWrapper>
  );
};

export default VehicleCard;
