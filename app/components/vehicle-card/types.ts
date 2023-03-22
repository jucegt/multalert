import { IVehicle, TFormTypes } from '~/interfaces/IVehicle';

export interface IVehicleCard {
  type: TFormTypes;
  number: TFormTypes;
  name: TFormTypes;
  setList: React.Dispatch<React.SetStateAction<IVehicle[]>>;
}
