type TDefaultTypes = React.SelectHTMLAttributes<HTMLSelectElement>;

export interface IOption {
  id: string | number;
  value: string | number;
  name: string | number;
}

export interface ISelect extends TDefaultTypes {
  options: IOption[];
}
