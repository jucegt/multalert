import { IChildren } from '~/interfaces/IChildren';

export type TVariants = 'primary' | 'secondary' | 'cancel';

export interface IButton extends IChildren {
  variant?: TVariants;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface IButtonWrapper {
  variant: TVariants;
}
