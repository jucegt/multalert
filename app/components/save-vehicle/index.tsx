import { useNavigate } from '@remix-run/react';
import { useState } from 'react';

import { IVehicle } from '~/interfaces/IVehicle';
import Button from '~/components/button';
import ButtonGroup from '~/components/button-group';
import IconVehicle from '~/components/svgs/vehicle';
import Input from '~/components/form-element/input';
import Label from '~/components/form-element/label';
import Plate from '~/components/plate';

import useLocalStorage from '~/hooks/use-local-storage';

import { SaveVehicleForm } from './style';

const SaveVehicle = () => {
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
        v['plate-type'] === vehicle['plate-type'] &&
        v['plate-number'].toString().toLowerCase() ===
          vehicle['plate-number'].toString().toLowerCase()
    );

    if (vehicleExist.length) {
      setDuplicated(vehicleExist[0]);
    } else {
      setVehicles([vehicle, ...vehicles]);
      navigate(
        `/vehiculos/${vehicle['plate-type'].toString().toLowerCase()}-${vehicle[
          'plate-number'
        ]
          .toString()
          .toLowerCase()}`
      );
    }
  };
  return (
    <SaveVehicleForm method="post" onSubmit={handleSubmit}>
      {duplicated?.['vehicle-name'] ? (
        <>
          El vehiculo que estas intentando guardar ya esta guardado con el
          nombre de {duplicated['vehicle-name']}
        </>
      ) : null}
      <Label htmlFor="vehicle-name" required>
        Nombre:
      </Label>
      <Input
        placeholder="Ej.: Rayo McQueen"
        type="text"
        id="vehicle-name"
        name="vehicle-name"
      />
      <Label
        htmlFor="plate-number"
        required
        description="Toca el tipo o número de placa para editar"
      >
        Placa:
      </Label>
      <Plate />
      <ButtonGroup>
        <Button variant="cancel" icon={<IconVehicle />} type="reset">
          Cancelar
        </Button>
        <Button icon={<IconVehicle />}>Guardar Vehículo</Button>
      </ButtonGroup>
    </SaveVehicleForm>
  );
};

export default SaveVehicle;
