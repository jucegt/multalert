type TDefaultValues = React.InputHTMLAttributes<HTMLInputElement>;

interface ISwitchValues {
  on: string;
  off: string;
}

export interface ISwitch extends TDefaultValues {
  values?: ISwitchValues;
}
