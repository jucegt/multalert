import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import useLocalStorage from '~/hooks/use-local-storage';
import { IVehicle } from '~/interfaces/IVehicle';
import Plate from '../plate';
import { ButtonWrapper, InputWrapper, WarningText } from './style';

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
      setVehicles([...vehicles, vehicle]);
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
    <form method="post" onSubmit={handleSubmit}>
      {duplicated?.['vehicle-name'] ? (
        <WarningText>
          <>
            El vehiculo que estas intentando guardar ya esta guardado con el
            nombre de {duplicated['vehicle-name']}
          </>
        </WarningText>
      ) : null}
      <InputWrapper>
        <label htmlFor="vehicle-name">Nombre:</label>
        <input type="text" id="vehicle-name" name="vehicle-name" />
      </InputWrapper>
      <Plate />
      <ButtonWrapper>Guardar</ButtonWrapper>
    </form>
  );
};

export default SaveVehicle;
