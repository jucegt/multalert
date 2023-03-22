import styled from 'styled-components';
import toRem from '~/utils/to-rem';

export const SuccessWrapper = styled.div`
  background: var(--bg-success);
  padding: ${toRem(20)};
  border-radius: ${toRem(6)};
  margin: ${toRem(20)} auto;
  max-width: ${toRem(400)};
`;

export const SuccessText = styled.p`
  color: var(--white);
  font-size: ${toRem(18)};
  font-weight: 700;
  margin: 0;
  text-shadow: 0 ${toRem(2)} ${toRem(2)} rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  gap: ${toRem(10)};

  svg {
    flex: 0 0 ${toRem(24)};
    max-width: ${toRem(24)};
    height: ${toRem(24)};
  }
`;
