import { useNavigate } from '@remix-run/react';
// import { useState } from 'react';

import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import IconCross from '~/components/svgs/cross';
import IconVehicle from '~/components/svgs/vehicle';
import VehicleConfig from '~/components/vehicle-config';
import VehicleInfo from '~/components/vehicle-info';

// import { IVehicle } from '~/interfaces/IVehicle';

// import useLocalStorage from '~/hooks/use-local-storage';

// import { sUp, sLow, vFormat } from '~/utils/plate-format';

// import { V_KEY } from '~/configs/constants';

import { VehicleFormWrapper } from './style';

const VehicleForm = () => {
  const navigate = useNavigate();
  // const [duplicated, setDuplicated] = useState<IVehicle>({});
  // const [vehicles, setVehicles] = useLocalStorage<IVehicle[]>(V_KEY, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setDuplicated({});

    // const target = e.target as HTMLFormElement;
    // const data = new FormData(target);

    // const vName = data.get('vName');
    // const pType = data.get('pType');
    // const pNumber = data.get('pNumber');
    // if (!vName || !pType || !pNumber) {
    //   return;
    // }

    // const vehicle = Object.fromEntries(data);
    // const lsVehicle = vehicles.filter(
    //   (v) => v.pType === sUp(pType) && v.pNumber === sUp(pNumber)
    // );

    // if (lsVehicle.length) {
    //   setDuplicated(lsVehicle[0]);
    // } else {
    //   const vehicleFormat = vFormat(vehicle) as IVehicle;
    //   setVehicles([vehicleFormat, ...vehicles]);
    //   navigate(`/vehiculos/${sLow(pType)}-${sLow(pNumber)}`);
    // }
    navigate('/vehiculos/p-123abc');
  };
  return (
    <VehicleFormWrapper method="post" onSubmit={handleSubmit}>
      <VehicleInfo />
      <VehicleConfig />
      <ButtonGroup>
        <Button variant="cancel" icon={<IconCross />} type="reset">
          Cancelar
        </Button>
        <Button icon={<IconVehicle />}>Guardar Vehículo</Button>
      </ButtonGroup>
    </VehicleFormWrapper>
  );
};

export default VehicleForm;
