import {
  LabelDescription,
  LabelRequired,
  LabelText,
  LabelWrapper,
} from './style';
import { ILabel } from './types';

const Label = ({
  required,
  description,
  component,
  children,
  ...rest
}: ILabel) => {
  return (
    <LabelWrapper {...rest} hasComponent={component ? true : false}>
      <LabelText>
        {children} {required ? <LabelRequired>*</LabelRequired> : null}
      </LabelText>
      {description ? <LabelDescription>{description}</LabelDescription> : null}
      {component}
    </LabelWrapper>
  );
};

export default Label;
