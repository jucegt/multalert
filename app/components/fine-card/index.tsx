import IconCalendar from '../svgs/calendar';
import IconLocation from '../svgs/location';
import IconMoney from '../svgs/money';
import { FineCardSection, FineCardText, FineCardWrapper } from './style';
import { IFineCard } from './types';

const FineCard = ({ date, location, cost }: IFineCard) => {
  return (
    <FineCardWrapper>
      <FineCardSection>
        <IconCalendar />
        <FineCardText>{date}</FineCardText>
      </FineCardSection>
      <FineCardSection>
        <IconLocation />
        <FineCardText>{location}</FineCardText>
      </FineCardSection>
      <FineCardSection>
        <IconMoney />
        <FineCardText>
          <strong>{cost}</strong>
        </FineCardText>
      </FineCardSection>
    </FineCardWrapper>
  );
};

export default FineCard;
