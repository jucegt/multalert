import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const FineCardWrapper = styled.div`
  border-radius: ${toRem(6)};
  padding: ${toRem(20)};
  background: var(--bg-box-light);
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
  font-size: ${toRem(16)};
  line-height: ${toRem(20)};
  margin: 0;
  color: var(--text-color);
`;
