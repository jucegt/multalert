import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const FineCardWrapper = styled.div`
  border-radius: ${toRem(6)};
  padding: ${toRem(20)};
  background: var(--bg-box-light);
  display: flex;
  flex-direction: column;
  gap: ${toRem(10)};
  max-width: ${toRem(255)};
  counter-increment: fine;
  flex: 0 0 100%;
  min-width: 0;
  &:before {
    content: counter(fine);
    position: absolute;
    top: ${toRem(-5)};
    right: ${toRem(-5)};
    background: var(--notification-bg);
    width: ${toRem(20)};
    height: ${toRem(20)};
    border-radius: ${toRem(20)};
    color: var(--white);
    font-weight: 700;
    text-align: center;
    font-size: ${toRem(13)};
    line-height: ${toRem(20)};
  }
`;

export const FineCardSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(10)};
  color: var(--decoration-color);
  svg {
    flex: 0 0 ${toRem(24)};
    max-width: ${toRem(24)};
  }
`;

export const FineCardText = styled.p`
  color: var(--text-color);
  font-size: ${toRem(16)};
  line-height: ${toRem(20)};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
`;
