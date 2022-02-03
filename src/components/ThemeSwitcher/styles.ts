import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  top: 50px;

  & svg {
    margin: 0 10px;
    height: 30px;
    width: 30px;
    fill: ${({ theme }) => theme.colors.neutral.dark};

    & path {
      fill: ${({ theme }) => theme.colors.neutral.dark};
    }
  }
`;
