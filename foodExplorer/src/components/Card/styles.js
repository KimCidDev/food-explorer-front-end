import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: clamp(100px, 250px, 300px);
  height: 290px;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 25px;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  #save {
    position: absolute;
    top: 0;
    right: 0;

    margin: 15px;

    font-size: 22px;
  }

  h2 {
    width: 100%;
    text-align: center;
  }

  p {
    display: none;
  }

  .sendAmount .howManyBox p {
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    font-size: 16px;
  }

  .howManyBox {
    display: flex;
    align-items: center;

    padding: 5px 0;
    margin-bottom: 15px;

    gap: 14px;
    font-size: 22px;
  }

  img {
    height: 88px;
  }

  button {
    height: 30px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 460px;
    justify-content: space-around;

    img {
      height: 176px;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
    }

    p {
      display: flex;
    }

    #price {
      font-size: 28px;
      //font-weight: bold;
      color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};      
      -webkit-font-smoothing: antialiased;
    }

    .addToBasket {
      width: 200px;

      display: flex;
      justify-content: space-around;

      .howManyBox {
        gap: 5px;
      }
      button {
        max-width: 40%;
      }
    }
  }
`;
