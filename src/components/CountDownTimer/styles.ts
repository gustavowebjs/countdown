import styled, { css } from 'styled-components';

interface TimerStyledProps {
  active: boolean;
  styleText?: string;
}

export const Container = styled.div<TimerStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 6.2rem;
    font-weight: bold;
    color: #666666;

    ${({ active }) =>
      active === true &&
      css`
        color: ${({ theme }) => theme.colors.neutral.dark};
      `}

    ${({ styleText }) =>
      styleText === 'timesup' &&
      css`
        color: ${({ theme }) => theme.colors.warning};
      `}

      ${({ styleText }) =>
      styleText === '10seconds' &&
      css`
        color: ${({ theme }) => theme.colors.warning};
        animation: blinker 1.5s linear infinite;
        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}

    ${({ styleText }) =>
      styleText === '20seconds' &&
      css`
        color: ${({ theme }) => theme.colors.warning};
      `}
  }
`;

export const TimerText = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.neutral.dark};
  font-style: italic;
`;
