import { IVehicle, TFormTypes } from '~/interfaces/IVehicle';

export interface IVehicleCard {
  type: TFormTypes;
  number: TFormTypes;
  name: TFormTypes;
  total: number;
  // setList: React.Dispatch<React.SetStateAction<IVehicle[]>>;
}
