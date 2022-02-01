import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: #ff9000;
  height: 42px;
  border-radius: 10px;
  border: 0;
  padding: 0 25px;
  color: #312e38;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
