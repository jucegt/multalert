import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const InfoWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: ${toRem(10)};
  color: var(--decoration-color);
  padding: ${toRem(20)};
  background: var(--bg-box-light);
  border-radius: ${toRem(6)};
  margin: ${toRem(20)} 0;
  svg {
    flex: 0 0 ${toRem(24)};
    max-width: ${toRem(24)};
  }
`;

export const InfoText = styled.p`
  color: var(--text-color);
  font-size: ${toRem(18)};
  font-weight: 700;
  line-height: ${toRem(22)};
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
  margin: 0;
`;
