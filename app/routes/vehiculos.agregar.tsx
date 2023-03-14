import SaveVehicle from '~/components/save-vehicle';
import IconPlusSquare from '~/components/svgs/plus-square';
import Title from '~/components/title';

export default function AddVehicle() {
  return (
    <>
      <Title icon={<IconPlusSquare />}>Agregar Vehículo</Title>
      <SaveVehicle />
    </>
  );
}
