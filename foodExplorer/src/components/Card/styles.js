import styled from 'styled-components';

export const Container = styled.div`
  max-width: 210px;
  height: 290px;
  
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 25px;
  gap: 12px;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  
  #save {
    position: absolute;
    top: 0;
    right: 0;

    margin: 15px;

    font-size: 22px;
  }

  h2, p, svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_200}
  }

  .sendAmount .howManyBox p {
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    font-size: 16px;
  }

  .howManyBox {   
    display: flex;
    align-items: center;

    gap: 4px;
    font-size: 22px;
  }

  img {
    height: 88px;
  }

`;
