import { ButtonText, ButtonWrapper } from './style';
import { IButton } from './types';

const Button = ({ variant = 'primary', icon, children, ...props }: IButton) => {
  return (
    <ButtonWrapper {...props} variant={variant}>
      {icon}
      {children ? <ButtonText>{children}</ButtonText> : null}
    </ButtonWrapper>
  );
};

export default Button;
