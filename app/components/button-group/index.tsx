import { IChildren } from '~/interfaces/IChildren';
import { ButtonGroupWrapper } from './style';

const ButtonGroup = ({ children }: IChildren) => {
  return <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup;
