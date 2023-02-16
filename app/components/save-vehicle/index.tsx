import { Form } from '@remix-run/react';
import Plate from '../plate';

const SaveVehicle = () => {
  return (
    <Form method="post">
      <div>
        <label htmlFor="vehicle-name">Nombre:</label>
        <input type="text" id="vehicle-name" name="vehicle-name" />
      </div>
      <Plate />
      <button>Guardar</button>
    </Form>
  );
};

export default SaveVehicle;
