import { IVehicle, TFormTypes } from '~/interfaces/IVehicle';

export const sUp = (string: TFormTypes | undefined) => {
  return string?.toString().toUpperCase();
};

export const sLow = (string: TFormTypes | undefined) => {
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
