import Plate from '../plate';
import { PlatesSplashWrapper } from './style';

const PlatesSplash = () => {
  return (
    <PlatesSplashWrapper>
      <Plate notForm type="C" number="960PAS" notification={2} />
      <Plate notForm type="M" number="654GHJ" notification={1} />
      <Plate notForm type="P" number="832RYM" notification={3} />
    </PlatesSplashWrapper>
  );
};

export default PlatesSplash;
