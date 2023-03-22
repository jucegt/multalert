import { IChildren } from '~/interfaces/IChildren';
import { GlowBackground } from './style';

const GlowLayout = ({ children }: IChildren) => {
  return (
    <>
      <GlowBackground />
      {children}
    </>
  );
};

export default GlowLayout;
