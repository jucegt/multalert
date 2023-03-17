import Plate from '~/components/plate';

import { PlateGroupWrapper } from './style';

const PlateGroup = () => {
  return (
    <PlateGroupWrapper>
      <Plate notForm type="C" number="960PAS" noti={2} />
      <Plate notForm type="M" number="654GHJ" noti={1} />
      <Plate notForm type="P" number="832RYM" noti={3} />
    </PlateGroupWrapper>
  );
};

export default PlateGroup;
