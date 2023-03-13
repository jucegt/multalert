import { ButtonText, ButtonWrapper } from './style';
import { IButton } from './types';

const Button = ({ variant = 'primary', icon, children }: IButton) => {
  return (
    <ButtonWrapper variant={variant}>
      {icon}
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
