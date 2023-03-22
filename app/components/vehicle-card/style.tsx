import styled from 'styled-components';
import toRem from '~/utils/to-rem';
import { PlateNotification } from '../plate/style';

export const VehicleCardWrapper = styled.div`
  margin: ${toRem(20)} 0;
  a {
    text-decoration: none;
  }
`;

export const VehicleCardInfo = styled.div`
  align-items: center;
  background: var(--bg-box-light);
  border-radius: 0 0 ${toRem(6)} ${toRem(6)};
  display: flex;
  justify-content: space-between;
  margin: ${toRem(-20)} auto 0;
  padding: ${toRem(40)} ${toRem(20)} ${toRem(20)};
  a {
    align-items: center;
    color: var(--text-color);
    display: flex;
    font-weight: 700;
    gap: ${toRem(10)};
    text-decoration: none;
  }
`;

export const VehicleCardNotification = styled(PlateNotification)`
  flex: 0 0 ${toRem(20)};
  font-size: ${toRem(13)};
  height: ${toRem(20)};
  line-height: ${toRem(20)};
  max-width: ${toRem(20)};
  position: relative;
  right: auto;
  top: auto;
`;

export const VehicleCardDelete = styled.div`
  color: var(--delete-color);
  svg {
    flex: 0 0 ${toRem(24)};
    height: ${toRem(24)};
    max-width: ${toRem(24)};
  }
`;
