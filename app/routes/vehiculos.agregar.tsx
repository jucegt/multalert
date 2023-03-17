import IconPlusSquare from '~/components/svgs/plus-square';
import SaveVehicle from '~/components/save-vehicle';
import Title from '~/components/title';

export default function AddVehicle() {
  return (
    <>
      <Title icon={<IconPlusSquare />}>Agregar Vehículo</Title>
      <SaveVehicle />
    </>
  );
}
