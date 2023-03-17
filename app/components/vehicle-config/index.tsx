import { frequency } from '~/data/notification-frequency.json';

import Label from '~/components/form-element/label';
import Switch from '~/components/form-element/switch';
import Select from '~/components/form-element/select';
import IconSettings from '~/components/svgs/settings';
import Title from '~/components/title';
import { useState } from 'react';

const VehicleConfig = () => {
  const [disabled, setDisabled] = useState(false);
  const switchValues = {
    on: 'Sí',
    off: 'No',
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setDisabled(!value);
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
            onChange={handleSwitchChange}
          />
        }
      >
        Notificaciones:
      </Label>
      <Label disabled={disabled} htmlFor="vFrequency">
        Frecuencia de revision de multas:
      </Label>
      <Select
        id="vFrequency"
        name="vFrequency"
        options={frequency}
        disabled={disabled}
      />
    </>
  );
};

export default VehicleConfig;
