export interface IVehicle {
  [k: string]:
    | FormDataEntryValue
    | string
    | number
    | undefined
    | null
    | boolean;
}
