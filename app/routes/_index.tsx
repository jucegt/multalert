import BigTitle from '~/components/big-title';
import PlateGroup from '~/components/plate-group';

import SplashLayout from '~/layouts/splash';

export default function Index() {
  return (
    <SplashLayout>
      <PlateGroup />
      <BigTitle>
        Te <span>notificamos</span>
        <br /> cuando recibes una
        <br /> multa de tránsito
        <br /> de <strong>EMETRA</strong>
      </BigTitle>
    </SplashLayout>
  );
}
