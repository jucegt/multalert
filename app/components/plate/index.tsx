import { types } from '~/data/plate-types.json';

import {
  PlateContent,
  PlateNotification,
  PlateNumber,
  PlateType,
  PlateValue,
  PlateWrapper,
} from './style';
import { IPlate } from './types';

const Plate = ({ notForm, type, number, noti }: IPlate) => {
  return (
    <PlateWrapper>
      <PlateContent>
        <PlateValue>
          <PlateNumber
            as={notForm ? 'span' : 'input'}
            name="plate-number"
            id="plate-number"
            type="text"
            placeholder="987MAT"
            maxLength={6}
          >
            {notForm ? number : null}
          </PlateNumber>
          <PlateType
            as={notForm ? 'span' : 'select'}
            name="plate-type"
            id="plate-type"
          >
            {notForm
              ? type
              : types.map((plate) => (
                  <option key={plate} value={plate}>
                    {plate}
                  </option>
                ))}
          </PlateType>
        </PlateValue>
      </PlateContent>
      {noti ? <PlateNotification>{noti}</PlateNotification> : null}
    </PlateWrapper>
  );
};

export default Plate;
