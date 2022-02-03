import styled, { css } from 'styled-components';
import { ButtonSizes } from './types';

interface ButtonStyledProps {
  size?: ButtonSizes;
  className?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.primary};
  height: 42px;
  border-radius: 5px;
  border: 0;
  padding: 0 25px;
  color: #312e38;
  cursor: pointer;

  ${({ size }) =>
    size === 'small' &&
    css`
      height: 32px;
      padding: 0 20px;
      font-size: 14px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      height: 48px;
      padding: 0 30px;
      font-size: 16px;
    `}

  ${({ className }) =>
    className?.includes('outline') &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      :hover {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.neutral.dark};
      }
    `}
  
  ${({ className }) =>
    className?.includes('active') &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.neutral.lightest};
    `}

  :hover {
    opacity: 0.9;
  }
`;
