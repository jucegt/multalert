import { Link } from 'react-router-dom';
import Logo from '~/components/logo';
import { IChildren } from '~/interfaces/IChildren';
import {
  DefaultLayoutContainer,
  DefaultLayoutFooter,
  DefaultLayoutHeader,
  DefaultLayoutWrapper,
} from './style';

const DefaultLayout = ({ children }: IChildren) => {
  return (
    <DefaultLayoutWrapper>
      <DefaultLayoutHeader>
        <DefaultLayoutContainer>
          <Logo />
        </DefaultLayoutContainer>
      </DefaultLayoutHeader>
      <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
      <DefaultLayoutFooter>
        <Link to="/vehiculos">Vehiculos</Link>
        <Link to="/vehiculos/agregar">Agregar</Link>
        <Link to="/ajustes">Ajustes</Link>
      </DefaultLayoutFooter>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
