import { IVehicle } from '~/interfaces/IVehicle';

export const sUp = (
  string: string | FormDataEntryValue | null | undefined | number | boolean
) => {
  return string?.toString().toUpperCase();
};

export const sLow = (
  string: string | FormDataEntryValue | null | undefined | number | boolean
) => {
  return string?.toString().toLowerCase();
};

export const vFormat = (vehicle: IVehicle) => {
  return {
    ...vehicle,
    pType: sUp(vehicle.pType),
    pNumber: sUp(vehicle.pNumber),
    vFrequency: Number(vehicle.vFrequency),
    vNotifications: vehicle.vNotifications === 'on' ? true : false,
  };
};
