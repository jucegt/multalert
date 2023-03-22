import { names } from '~/data/vehicle-names.json';

import IconPlusSquare from '~/components/svgs/plus-square';
import Input from '~/components/form-element/input';
import Label from '~/components/form-element/label';
import Plate from '~/components/plate';
import Title from '~/components/title';

import randomInt from '~/utils/random-int';

const VehicleInfo = () => {
  const funnyName = names[randomInt(names.length)];
  const placeholder = `Ej.: ${funnyName}`;

  return (
    <>
      <Title icon={<IconPlusSquare />}>Agregar Vehículo</Title>
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
