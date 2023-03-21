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

const Plate = ({ notForm, asLink, type, number, noti }: IPlate) => {
  return (
    <PlateWrapper as={asLink ? 'span' : 'div'}>
      <PlateContent as={asLink ? 'span' : 'div'}>
        <PlateValue as={asLink ? 'span' : 'div'}>
          <PlateNumber
            as={notForm || asLink ? 'span' : 'input'}
            name={notForm || asLink ? undefined : 'pNumber'}
            id={notForm || asLink ? undefined : 'pNumber'}
            type={notForm || asLink ? undefined : 'text'}
            placeholder={notForm || asLink ? undefined : '987MAT'}
            maxLength={notForm || asLink ? undefined : 6}
          >
            {notForm || asLink ? number : null}
          </PlateNumber>
          <PlateType
            as={notForm || asLink ? 'span' : 'select'}
            name={notForm || asLink ? undefined : 'pType'}
            id={notForm || asLink ? undefined : 'pType'}
          >
            {notForm || asLink
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
