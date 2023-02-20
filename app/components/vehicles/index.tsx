import { Link } from '@remix-run/react';
import React from 'react';
import { IVehicle } from '~/interfaces/IVehicle';
import Plate from '../plate';
import { VehiclesListWrapper } from './style';

const VehiclesList = ({ vehicles }: { vehicles: IVehicle[] }) => {
  return (
    <VehiclesListWrapper>
      {vehicles.map((vehicle, index) => (
        <React.Fragment key={index}>
          <Link
            to={`/vehiculos/${vehicle['plate-type']
              .toString()
              .toLowerCase()}-${vehicle['plate-number']
              .toString()
              .toLowerCase()}`}
          >
            {vehicle['vehicle-name'].toString()}
          </Link>
          <Plate
            key={index}
            notForm
            type={vehicle['plate-type'].toString()}
            number={vehicle['plate-number'].toString()}
          />
        </React.Fragment>
      ))}
    </VehiclesListWrapper>
  );
};

export default VehiclesList;
