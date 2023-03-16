import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
import Button from '../button';
import ButtonGroup from '../button-group';
import Input from '../form-element/input';
import Label from '../form-element/label';
import Plate from '../plate';
import IconVehicle from '../svgs/vehicle';
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
