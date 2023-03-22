import { IVehicle } from '~/interfaces/IVehicle';

// For migrate the vehicle info from 0.1.0 to 0.2.0
const migrateVehicleInfo = (vehicles: IVehicle[]) => {
  const changeKeys = vehicles.map((vehicle) => {
    if (vehicle['plate-type'] !== undefined) {
      return {
        vName: vehicle['vehicle-name'],
        pType: vehicle['plate-type'],
        pNumber: vehicle['plate-number'],
        vNotifications: true,
        vFrequency: 86400000,
      };
    }
    return null;
  });

  const vehiclesFilter = changeKeys.filter((vehicle) => vehicle !== null);
  return vehiclesFilter as IVehicle[];
};

export default migrateVehicleInfo;
