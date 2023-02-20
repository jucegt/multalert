import SaveVehicle from '~/components/save-vehicle';
import Title from '~/components/title';
import DefaultLayout from '~/layouts/default';

export default function AddVehicle() {
  return (
    <DefaultLayout>
      <Title>Agregar Vehículo</Title>
      <SaveVehicle />
    </DefaultLayout>
  );
}
