import { IChildren } from '~/interfaces/IChildren';

export type TVariants = 'primary' | 'secondary' | 'cancel';

type TDefaultTypes = IChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButton extends TDefaultTypes {
  variant?: TVariants;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface IButtonWrapper {
  variant: TVariants;
}
