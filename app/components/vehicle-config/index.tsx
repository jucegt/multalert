import Label from '~/components/form-element/label';
import Switch from '~/components/form-element/switch';
import IconSettings from '../svgs/settings';
import Title from '../title';

const VehicleConfig = () => {
  const switchValues = {
    on: 'Sí',
    off: 'No',
  };
  return (
    <>
      <Title icon={<IconSettings />}>Configuración</Title>
      <Label
        htmlFor="vNotifications"
        component={
          <Switch
            id="vNotifications"
            name="vNotifications"
            values={switchValues}
            defaultChecked
          />
        }
      >
        Notificaciones:
      </Label>
    </>
  );
};

export default VehicleConfig;
