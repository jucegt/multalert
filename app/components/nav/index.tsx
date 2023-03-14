import { NavLink } from '@remix-run/react';
import IconPlusSquare from '../svgs/plus-square';
import IconVehicle from '../svgs/vehicle';
import { NavItem, NavList, NavWrapper } from './style';

const Nav = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/vehiculos" end>
            <IconVehicle />
            Vehiculos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/vehiculos/agregar">
            <IconPlusSquare />
            Agregar
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default Nav;
