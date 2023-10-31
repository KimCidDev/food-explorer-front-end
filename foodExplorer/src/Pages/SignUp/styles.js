import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
`;

export const Form = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto Slab', serif;
  }

  > p {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  > input {
    max-width: 350px;
    height: 32px;
    
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
    border-radius: 10px;
  }
`;
