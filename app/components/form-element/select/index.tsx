import { SelectWrapper } from './style';
import { ISelect } from './types';

const Select = ({ options, ...props }: ISelect) => {
  return (
    <SelectWrapper {...props}>
      {options.map(({ id, value, name }) => (
        <option key={id} value={value}>
          {name}
        </option>
      ))}
    </SelectWrapper>
  );
};

export default Select;
