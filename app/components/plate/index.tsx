import {
  PlateContent,
  PlateNotification,
  PlateNumber,
  PlateType,
  PlateValue,
  PlateWrapper,
} from './style';
import { IPlate } from './types';

const Plate = ({ notForm, type, number, notification }: IPlate) => {
  return (
    <PlateWrapper>
      <PlateContent>
        <PlateValue>
          <PlateType
            as={notForm ? 'span' : 'select'}
            name="plate-type"
            id="plate-type"
          >
            {notForm ? (
              type
            ) : (
              <>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="C">C</option>
                <option value="U">U</option>
              </>
            )}
          </PlateType>
          <PlateNumber
            as={notForm ? 'span' : 'input'}
            name="plate-number"
            type="text"
            placeholder="987ABC"
            maxLength={6}
          >
            {notForm ? number : null}
          </PlateNumber>
        </PlateValue>
      </PlateContent>
      <PlateNotification>{notification}</PlateNotification>
    </PlateWrapper>
  );
};

export default Plate;
