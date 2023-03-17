import { useNavigate } from '@remix-run/react';
import { useState } from 'react';

import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import IconVehicle from '~/components/svgs/vehicle';
import VehicleConfig from '~/components/vehicle-config';
import VehicleInfo from '~/components/vehicle-info';

import { IVehicle } from '~/interfaces/IVehicle';

import useLocalStorage from '~/hooks/use-local-storage';

import { VehicleFormWrapper } from './style';

const VehicleForm = () => {
  const navigate = useNavigate();
  const [duplicated, setDuplicated] = useState<IVehicle>({});
  const [vehicles, setVehicles] = useLocalStorage<IVehicle[]>('vehicles', []);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDuplicated({});

    const data = new FormData(e.target);
    const vehicle = Object.fromEntries(data);
    const vehicleExist = vehicles.filter(
      (v) =>
        v.pType === vehicle.pType &&
        v.pNumber.toString().toLowerCase() ===
          vehicle.pNumber.toString().toLowerCase()
    );

    if (vehicleExist.length) {
      setDuplicated(vehicleExist[0]);
    } else {
      setVehicles([vehicle, ...vehicles]);
      navigate(
        `/vehiculos/${vehicle.pType.toString().toLowerCase()}-${vehicle.pNumber
          .toString()
          .toLowerCase()}`
      );
    }
  };
  return (
    <VehicleFormWrapper method="post" onSubmit={handleSubmit}>
      {JSON.stringify(duplicated)}
      <VehicleInfo />
      <VehicleConfig />
      <ButtonGroup>
        <Button variant="cancel" icon={<IconVehicle />} type="reset">
          Cancelar
        </Button>
        <Button icon={<IconVehicle />}>Guardar Vehículo</Button>
      </ButtonGroup>
    </VehicleFormWrapper>
  );
};

export default VehicleForm;
