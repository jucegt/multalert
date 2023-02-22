import { useEffect, useState } from 'react';
import {
  PlateContent,
  PlateNotification,
  PlateNumber,
  PlateType,
  PlateValue,
  PlateWrapper,
} from './style';
import { IPlate } from './types';

const Plate = ({ notForm, type, number }: IPlate) => {
  const [notification, setNotification] = useState(0);

  useEffect(() => {
    const tieneMultas = localStorage.getItem(
      `${type?.toLowerCase()}-${number?.toLowerCase()}`
    );

    if (tieneMultas) setNotification(Number(tieneMultas));
  }, []);
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
      {notification ? (
        <PlateNotification>{notification}</PlateNotification>
      ) : null}
    </PlateWrapper>
  );
};

export default Plate;
