import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const NavWrapper = styled.nav`
  background: var(--bg-box-light);
  bottom: 0;
  left: 0;
  margin: auto 0 0;
  position: sticky;
  right: 0;
  z-index: 20;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: ${toRem(12)};
  a {
    color: var(--text-color);
    display: flex;
    text-decoration: none;
    height: ${toRem(60)};
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 ${toRem(18)};
    gap: ${toRem(10)};
    opacity: 0.3;
    transition: opacity ease 0.2s;
    &:before {
      background: var(--decoration-color);
      border-radius: ${toRem(6)};
      bottom: ${toRem(10)};
      content: '';
      height: ${toRem(6)};
      left: 50%;
      opacity: 0;
      position: absolute;
      transform: translateX(-50%) scale(0);
      transition: all ease 0.2s;
      width: ${toRem(6)};
    }
    &.active {
      opacity: 1;
      &:before {
        opacity: 1;
        transform: translateX(-50%) scale(1);
      }
    }
    svg {
      flex: 0 0 ${toRem(24)};
      height: ${toRem(24)};
      max-width: ${toRem(24)};
    }
  }
`;
