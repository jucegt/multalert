import IconPlusSquare from '~/components/svgs/plus-square';
import Title from '~/components/title';
import VehicleForm from '~/components/forms/vehicle';

export default function AddVehicle() {
  return (
    <>
      <Title icon={<IconPlusSquare />}>Agregar Vehículo</Title>
      <VehicleForm />
    </>
  );
}
