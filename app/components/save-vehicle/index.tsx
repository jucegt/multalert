import { Form } from '@remix-run/react';
import Plate from '../plate';

const SaveVehicle = () => {
  return (
    <Form method="post">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
      </div>
      <Plate />
      <button>Guardar</button>
    </Form>
  );
};

export default SaveVehicle;
