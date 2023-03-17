import { names } from '~/data/vehicle-names.json';

import Input from '~/components/form-element/input';
import Label from '~/components/form-element/label';
import Plate from '~/components/plate';
import randomInt from '~/utils/random-int';

const VehicleInfo = () => {
  const funnyName = names[randomInt(names.length - 1)];
  const placeholder = `Ej.: ${funnyName}`;
  return (
    <>
      <Label htmlFor="vName" required>
        Nombre:
      </Label>
      <Input id="vName" name="vName" placeholder={placeholder} type="text" />
      <Label
        htmlFor="pNumber"
        required
        description="Toca el tipo o número de placa para editar"
      >
        Placa:
      </Label>
      <Plate />
    </>
  );
};

export default VehicleInfo;
