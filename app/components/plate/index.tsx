import {
  PlateContent,
  PlateNumber,
  PlateType,
  PlateValue,
  PlateWrapper,
} from './style';

const Plate = () => {
  return (
    <PlateWrapper>
      <PlateContent>
        <PlateValue>
          <PlateType name="plate-type" id="plate-type">
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="C">C</option>
            <option value="U">U</option>
          </PlateType>
          <PlateNumber
            as="input"
            name="plate-number"
            type="text"
            placeholder="987ABC"
            maxLength={6}
          />
        </PlateValue>
      </PlateContent>
    </PlateWrapper>
  );
};

export default Plate;
