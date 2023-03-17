import { IChildren } from '~/interfaces/IChildren';

type TDefaultTypes = IChildren & React.LabelHTMLAttributes<HTMLLabelElement>;

export interface ILabel extends TDefaultTypes {
  required?: boolean;
  description?: string;
  component?: React.ReactNode;
  disabled?: boolean;
}
