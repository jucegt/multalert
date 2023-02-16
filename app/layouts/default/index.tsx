import { Link } from 'react-router-dom';
import { IChildren } from '~/interfaces/IChildren';

const DefaultLayout = ({ children }: IChildren) => {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      {children}
      <Link
        style={{ position: 'fixed', bottom: 20, right: 20 }}
        to="/vehiculos/agregar"
      >
        Agregar
      </Link>
    </div>
  );
};

export default DefaultLayout;
