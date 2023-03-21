import { Link } from '@remix-run/react';
import React from 'react';
import { IVehicle } from '~/interfaces/IVehicle';
import { sLow } from '~/utils/plate-format';
import Plate from '../plate';
import { VehiclesListWrapper } from './style';

const VehiclesList = ({ vehicles }: { vehicles: IVehicle[] }) => {
  return (
    <VehiclesListWrapper>
      {vehicles.map((vehicle, index) => (
        <React.Fragment key={index}>
          <Link
            to={`/vehiculos/${sLow(vehicle.pType)}-${sLow(vehicle.pNumber)}`}
          >
            {vehicle.vName?.toString()}
            <Plate
              key={index}
              asLink
              type={vehicle.pType?.toString()}
              number={vehicle.pNumber?.toString()}
            />
          </Link>
        </React.Fragment>
      ))}
    </VehiclesListWrapper>
  );
};

export default VehiclesList;
