import IconArrowDown from '~/components/svgs/arrow-down';

import { SelectWrapper, SelectElement } from './style';
import { ISelect } from './types';

const Select = ({ options, ...props }: ISelect) => {
  return (
    <SelectWrapper>
      <SelectElement {...props} as="select">
        {options.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </SelectElement>
      <IconArrowDown />
    </SelectWrapper>
  );
};

export default Select;
