import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 6px;
  height: 42px;

  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.darker};
  padding: 16px 10px;
  width: 100%;

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
