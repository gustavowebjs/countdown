import styled, { css } from 'styled-components';

interface TimerStyledProps {
  active: boolean;
}

export const Container = styled.div<TimerStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 6.2rem;
    font-weight: bold;
    color: #ccc;

    ${({ active }) =>
      active === true &&
      css`
        color: ${({ theme }) => theme.colors.neutral.dark};
      `}
  }
`;
