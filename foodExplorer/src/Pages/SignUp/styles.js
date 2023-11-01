import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > .logo {
    display: flex;
    align-items: center;
    padding-top: 160px;

    h1 {
      margin-left: 10px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: 'Roboto Slab', serif;
    }
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 100vh;
  
  padding-top: 75px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;
