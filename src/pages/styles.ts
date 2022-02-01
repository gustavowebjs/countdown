import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

export const CountDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  box-shadow: ${({ theme }) => theme.shadow.small};
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  min-height: 500px;
  margin-top: 150px;
`;

export const WrapperTimer = styled.div``;

export const Timer = styled.div`
  font-size: 6.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;
