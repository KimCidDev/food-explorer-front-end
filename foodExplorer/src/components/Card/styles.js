import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 25px;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  
  svg:first-child {
    position: absolute;
   
  }

  h2, p, svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_200}
  }

  .sendAmount .howManyBox p {
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200}
  }

  .howManyBox {   
    display: flex;
  }

  img {
    height: 88px;
  }

`;
