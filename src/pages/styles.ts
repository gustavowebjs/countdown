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

export const WrapperInput = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
  width: 100%;
`;

export const WrapperTimer = styled.div``;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpeedButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: auto;
  margin-bottom: 20px;
`;
