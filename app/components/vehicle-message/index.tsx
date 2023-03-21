import Success from '~/components/success';
import Warning from '~/components/warning';

import { IVehicleMessage } from './types';

const VehicleMessage = ({ message, total }: IVehicleMessage) => {
  return (
    <>
      {message ? (
        total ? (
          <Warning>{message}</Warning>
        ) : (
          <Success>{message}</Success>
        )
      ) : null}
    </>
  );
};

export default VehicleMessage;
