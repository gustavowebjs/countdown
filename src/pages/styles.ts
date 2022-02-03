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
  @media (max-width: 768px) {
    margin-top: 100px;
  }
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

export const WrapperSvg = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-top: 50px;

  & svg {
    height: 74px;
    width: 74px;
    fill: ${({ theme }) => theme.colors.neutral.dark};
    transition: all 0.3s ease;
  }

  :hover {
    & svg {
      transform: scale(1.05);
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  > p {
    color: ${({ theme }) => theme.colors.neutral.dark};
    padding-top: 10px;
  }
`;

export const OfficeTimeWrapper = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.neutral.dark};
  > h4 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  & p {
    margin-bottom: 5px;
  }
  & strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
